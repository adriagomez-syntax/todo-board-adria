import { useState } from "react"

function useTaskDrag(handleUpdate) {
	const [dragTask, setDragTask] = useState(null)

	function handleDrop(status) {
		if (dragTask === null) { return }

		if (dragTask.status !== status) {
			handleUpdate(dragTask, status)
		}

		setDragTask(null)
	}

	function onDragStart(event, task) {
		setDragTask(task)

		const parent = event.currentTarget.parentElement.parentElement
		event.dataTransfer.setDragImage(parent, 0, 0)
	}

	return { setDragTask, handleDrop, onDragStart }
}

export default useTaskDrag