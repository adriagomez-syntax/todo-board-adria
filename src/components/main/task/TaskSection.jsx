import { useContext } from "react"
import useTasks from "../../../hooks/useTasks"
import TaskList from "./TaskList"
import BoardContext from "../../../context/BoardContext"
import Loader from "../../common/Loader"
import ShowError from "../../common/ShowError"
import TaskContext from "../../../context/TaskContext"
import ButtonPrimary from "../../common/ButtonPrimary"
import { FaPlusCircle } from "react-icons/fa"

export default function TaskSection() {
	
	const { dashboardSelected } = useContext(BoardContext)
	const { todoList, doingList, doneList, loading, errorMsg, setLoading, reload } = useTasks(dashboardSelected)

	const taskTypes = [
		{ title: "Ausstehend", color: "bg-background-dark", textDecoration: "", tasks: todoList },
		{ title: "In Bearbeitung", color: "bg-primary", textDecoration: "", tasks: doingList },
		{ title: "Erledigt", color: "bg-secondary", textDecoration: "line-through text-text/80", tasks: doneList }
	]
	
	return (
		<section className="flex flex-col gap-4 p-4 h-full">
			{loading
				? <Loader />
				: errorMsg
					? <ShowError error={ errorMsg } />
					: <TaskContext value={{ setLoading, reload }}>
						<div>
							<ButtonPrimary className="flex gap-1 justify-center items-center">
								<FaPlusCircle />
								<p>Neue Aufgabe erstellen</p>
							</ButtonPrimary>
						</div>
						<div className="grid grid-cols-1 gap-4 md:grid-cols-3 overflow-scroll">
							{ taskTypes.map((type, index) => (
								<TaskList 
									key={ index }
									title={ type.title }
									color={ type.color }
									textDecoration={ type.textDecoration }
									tasks={ type.tasks }
								/>
							))}
						</div>
					</TaskContext>
			}
		</section>
	)
}