import { useEffect, useState } from "react"
import { getTasks } from "../services/tasks"

function useTasks(boardId) {
	const [loading, setLoading] = useState(true)
	const [errorMsg, setErrorMsg] = useState(null)
	const [todoList, setTodoList ] = useState([])
	const [doingList, setDoingList] = useState([])
	const [doneList, setDoneList ] = useState([])

	async function reload(ignore = false) {
		if (!ignore) { setLoading(true) }
		setErrorMsg(null)

		getTasks(boardId)
			.then(data => spreadTasks(data))
			.catch(error => setErrorMsg(error.message))
			.finally(() => {if (!ignore) { setLoading(false) }})
	}

	function spreadTasks(tasks) {
		setTodoList(tasks.filter(task => task.status === "todo"))
		setDoingList(tasks.filter(task => task.status === "doing"))
		setDoneList(tasks.filter(task => task.status === "done"))
	}

	useEffect(() => {
		
		if (!boardId) { return }

		let ignore = false;
		
		getTasks(boardId)
			.then(data => {
				if (!ignore) { spreadTasks(data) }
			})
			.catch(error => {
				if (!ignore) { setErrorMsg(error.message) }
			})
			.finally(() => {
				if (!ignore) { setLoading(false) }
			})
		
		return () => ignore = true
	}, [boardId])

	return { todoList, doingList, doneList, loading, errorMsg, setLoading, reload }
}

export default useTasks