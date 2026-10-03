import { useContext, useEffect, useRef, useState } from "react"
import useTasks from "../../../hooks/useTasks"
import TaskList from "./TaskList"
import BoardContext from "../../../context/BoardContext"
import Loader from "../../common/Loader"
import ShowError from "../../common/ShowError"
import TaskContext from "../../../context/TaskContext"
import ButtonPrimary from "../../common/ButtonPrimary"
import { FaPlusCircle } from "react-icons/fa"
import TaskCreate from "./TaskCreate"

export default function TaskSection() {
	
	const { dashboardSelected } = useContext(BoardContext)
	const { todoList, doingList, doneList, loading, errorMsg, setLoading, reload } = useTasks(dashboardSelected?.id)
	const [createOpen, setCreateOpen] = useState(false)
	const [title, setTitle] = useState("")
	const titleRef = useRef(null)
	const [status, setStatus] = useState("todo")

	const taskTypes = [
		{ type: "todo", title: "Ausstehend", color: "bg-background-dark", textDecoration: "", tasks: todoList },
		{ type: "doing", title: "In Bearbeitung", color: "bg-primary", textDecoration: "", tasks: doingList },
		{ type: "done", title: "Erledigt", color: "bg-secondary", textDecoration: "line-through text-text/80", tasks: doneList }
	]
	
	function openCreate(type = "todo") {
		setStatus(type)
		setCreateOpen(true)
	}

	function onClose() {
		setCreateOpen(false)
		setTitle("")
	}

	useEffect(() => {
		if (createOpen) { titleRef.current?.focus() }
	}, [createOpen])

	return (
		<section className="flex flex-col gap-4 p-4 h-full">
			{loading
				? <Loader />
				: errorMsg
					? <ShowError error={ errorMsg } />
					: <TaskContext value={{ openCreate, setLoading, reload }}>
						<div>
							<ButtonPrimary 
								className="flex gap-1 justify-center items-center"
								onClick={ () => openCreate() }
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
							open={ createOpen }
							title={ title }
							setTitle={ setTitle }
							titleRef={ titleRef }
							status={ status }
							setStatus={ setStatus }
							onClose={ onClose }
						/>
					</TaskContext>
			}
		</section>
	)
}