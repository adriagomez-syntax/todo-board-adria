import { useRef, useState } from "react"

function useTaskDrag(handleUpdate) {
	const [dragTask, setDragTask] = useState(null)
	const dragElement = useRef(null)

	function onDrop(event, status) {
		if (dragElement.current === null || dragTask === null) { return }

		const target = document.elementFromPoint(event.clientX, event.clientY)
		const list = target?.closest("[data-list]")

		if (list && dragTask.status !== status)
		{
			handleUpdate(dragTask, status)
		}

		dragElement.current?.remove()
		dragElement.current = null
		setDragTask(null)
	}

	function onDragMove(event) {
		if (dragElement.current === null) { return }

		dragElement.current.style.top = `${event.clientY - 20}px`
    	dragElement.current.style.left = `${event.clientX - 50}px`
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