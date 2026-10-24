import { useEffect, useState } from "react"
import { getTasks } from "../services/tasks"
import { supabase } from "../lib/supabase"

function useTasks(boardId) {
	const [loading, setLoading] = useState(true)
	const [errorMsg, setErrorMsg] = useState(null)
	const [todoList, setTodoList ] = useState([])
	const [doingList, setDoingList] = useState([])
	const [doneList, setDoneList ] = useState([])

	function spreadTasks(tasks) {
		setTodoList(tasks.filter(task => task.status === "todo"))
		setDoingList(tasks.filter(task => task.status === "doing"))
		setDoneList(tasks.filter(task => task.status === "done"))
	}

	useEffect(() => {
		
		if (!boardId) { return }
		
		async function load() {
			setLoading(true)
			setErrorMsg(null)

			getTasks(boardId)
				.then(data => spreadTasks(data))
				.catch(error => setErrorMsg(error.message))
				.finally(() => setLoading(false))
		}
		
		const channel = supabase
			.channel(`tasks-board-${boardId}`)
			.on(
				'postgres_changes',
				{ 
					event: "*", 
					schema: "public", 
					table: "tasks",
					filter: `board_id=eq.${boardId}`
				},
				() => load()
			)
			.subscribe()

		load()

		return () => { supabase.removeChannel(channel) }
	}, [boardId])

	return { todoList, doingList, doneList, loading, errorMsg }
}

export default useTasks