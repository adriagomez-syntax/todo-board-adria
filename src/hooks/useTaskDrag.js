import { useRef, useState } from "react"

function useTaskDrag(handleUpdate) {
	const [dragTask, setDragTask] = useState(null)
	const dragElement = useRef(null)

	function onDrop(status) {
		alert(status)
		if (dragElement.current === null || dragTask === null) { return }

		alert(dragTask.status)
		if (dragTask.status !== status)
		{
			alert("enter")
			handleUpdate(dragTask, status)
		}

		alert("end")
		dragElement.current?.remove()
		dragElement.current = null
		setDragTask(null)
	}

	function onDragMove(event) {
		if (dragElement.current === null) { return }

		const rect = dragElement.current.getBoundingClientRect();

		dragElement.current.style.top = `${event.clientY - rect.top / 8}px`
    	dragElement.current.style.left = `${event.clientX - rect.width + 15}px`
	}

	function onDragStart(event, task) {
		
		const parent = event.currentTarget?.parentElement?.parentElement
		const rect = parent?.getBoundingClientRect();
		
		if (!rect) { return }

		setDragTask(task)
		
		dragElement.current = parent.cloneNode(true)
		dragElement.current.style.position = "fixed"
		dragElement.current.style.top = `${rect.top}px`
		dragElement.current.style.left = `${rect.left}px`
		dragElement.current.style.width = `${rect.width}px`
		dragElement.current.style.pointerEvents = "none"
		dragElement.current.style.zIndex = 1000
		
		document.body.appendChild(dragElement.current)
	}

	return { setDragTask, onDrop, onDragMove, onDragStart }
}

export default useTaskDrag