import { useEffect, useRef, useState } from "react"

function useTaskCreate() {
	const [createOpen, setCreateOpen] = useState(false)
	const [title, setTitle] = useState("")
	const titleRef = useRef(null)
	const [status, setStatus] = useState("todo")

	function openCreate(type = "todo") {
		setStatus(type)
		setCreateOpen(true)
	}

	function closeCreate() {
		setCreateOpen(false)
		setTitle("")
	}

	function isCreateOpen() {
		return createOpen
	}

	useEffect(() => {
		if (createOpen) { titleRef.current?.focus() }
	}, [createOpen])

	return { title, setTitle, titleRef, status, setStatus, isCreateOpen, openCreate, closeCreate }
}

export default useTaskCreate