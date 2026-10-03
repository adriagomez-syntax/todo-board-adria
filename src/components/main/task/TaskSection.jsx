import { useContext } from "react"
import useTasks from "../../../hooks/useTasks"
import TaskList from "./TaskList"
import BoardContext from "../../../context/BoardContext"
import Loader from "../../common/Loader"
import ShowError from "../../common/ShowError"
import TaskContext from "../../../context/TaskContext"
import ButtonPrimary from "../../common/ButtonPrimary"
import { FaPlusCircle } from "react-icons/fa"
import TaskCreate from "./TaskCreate"
import useTaskDrag from "../../../hooks/useTaskDrag"
import { updateTask } from "../../../services/tasks"
import ModalContext from "../../../context/ModalContext"
import useTaskCreate from "../../../hooks/useTaskCreate"

export default function TaskSection() {
	
	const { showError } = useContext(ModalContext)
	const { dashboardSelected } = useContext(BoardContext)
	const { todoList, doingList, doneList, loading, errorMsg } = useTasks(dashboardSelected?.id)

	const taskTypes = [
		{ type: "todo", title: "Ausstehend", color: "bg-background-dark", textDecoration: "", tasks: todoList },
		{ type: "doing", title: "In Bearbeitung", color: "bg-primary", textDecoration: "", tasks: doingList },
		{ type: "done", title: "Erledigt", color: "bg-secondary", textDecoration: "line-through text-text/80", tasks: doneList }
	]

	function handleUpdate(task, status) {
		updateTask({ id: task.id, status: status })
			.then(() => {})
			.catch(error => showError(error.message))
	}

	const { setDragTask, handleDrop, onDragStart } = useTaskDrag(handleUpdate)
	const { titleTask, setTitleTask, titleTaskRef, statusTask, setStatusTask, isTaskOpen, openTask, closeTask } = useTaskCreate()

	return (
		<section className="flex flex-col gap-4 p-4 h-full">
			{loading
				? <Loader />
				: errorMsg
					? <ShowError error={ errorMsg } />
					: <TaskContext value={{ openTask, setDragTask, handleDrop, onDragStart }}>
						<div>
							<ButtonPrimary 
								className="flex gap-1 justify-center items-center"
								onClick={ () => openTask() }
							>
								<FaPlusCircle />
								<p>Neue Aufgabe erstellen</p>
							</ButtonPrimary>
						</div>
						<div className="grid grid-cols-1 gap-4 md:grid-cols-3 overflow-scroll">
							{ taskTypes.map((type, index) => (
								<TaskList 
									key={ index }
									{ ...type }
								/>
							))}
						</div>
						<TaskCreate
							isTaskOpen={ isTaskOpen() }
							titleTask={ titleTask }
							setTitleTask={ setTitleTask }
							titleTaskRef={ titleTaskRef }
							statusTask={ statusTask }
							setStatusTask={ setStatusTask }
							closeTask={ closeTask }
						/>
					</TaskContext>
			}
		</section>
	)
}