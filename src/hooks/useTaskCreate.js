import { useEffect, useRef, useState } from "react"

function useTaskCreate() {
	const [taskOpen, setTaskOpen] = useState(false)
	const [titleTask, setTitleTask] = useState("")
	const titleTaskRef = useRef(null)
	const [statusTask, setStatusTask] = useState("todo")

	function openTask(type = "todo") {
		setStatusTask(type)
		setTaskOpen(true)
	}

	function closeTask() {
		setTaskOpen(false)
		setTitleTask("")
	}

	function isTaskOpen() {
		return taskOpen
	}

	useEffect(() => {
		if (taskOpen) { titleTaskRef.current?.focus() }
	}, [taskOpen])

	return { titleTask, setTitleTask, titleTaskRef, statusTask, setStatusTask, isTaskOpen, openTask, closeTask }
}

export default useTaskCreate