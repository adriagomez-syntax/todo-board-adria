import { FaGripVertical, FaPen, FaTrash } from "react-icons/fa";
import Button from "../../common/Button";
import Card from "../../common/Card";
import { useContext, useEffect, useRef, useState } from "react";
import ModalContext from "../../../context/ModalContext";
import TaskContext from "../../../context/TaskContext";
import { deleteTask, updateTask } from "../../../services/tasks";

export default function TaskItem({ task, textDecoration }) {
	
	const { showConfirm, showError } = useContext(ModalContext)
	const { onDragStart } = useContext(TaskContext)
	const titleRef = useRef()
	const [title, setTitle] = useState(task.title)
	const [editEnabled, setEditEnabled] = useState(false)

	function confirmDelete() {
		showConfirm(
			"Vorsicht!",
			<div className="flex flex-col gap-1">
				Bist du sicher, dass du das Task löschen möchtest?
				<span className="text-secondary">Diese Aktion kann nicht rückgängig gemacht werden.</span>
			</div>,
			deleteEntry
		)
	}

	function deleteEntry() {
		deleteTask(task.id)
			.then(() => {})
			.catch(error => showError(error.message))
	}

	function toggleEdit() {
		setEditEnabled((prev) => !prev)
	}

	function updateTitle() {
		setEditEnabled(false)
		if (title === task.title) { return }
		
		updateTask({ id: task.id, title: title })
			.then(() => {})
			.catch(error => showError(error.message))
	}

	useEffect(() => {
		if (editEnabled) { titleRef.current?.focus() }
	},[editEnabled])
	
	return (
		<Card 
			className="flex gap-2 justify-between bg-background-dark text-text"
		>
			<div className="flex gap-2">
				<div>
					<input
						className={`${!editEnabled && "hidden"}`}
						value={ title }
						onChange={ (event) => setTitle(event.target.value) }
						onBlur={ () => updateTitle() }
						ref={ titleRef }
					/>
					<h1 className={`${editEnabled &&"hidden"} ${textDecoration}`}>{ task.title }</h1>
				</div>
				<Button 
					className={`${editEnabled && "hidden"} text-2xs hover:opacity-50`}
					onClick={ () => toggleEdit() }
				>
					<FaPen />
				</Button>
			</div>
			<div className="flex gap-2 text-2xs items-center">
				<Button 
					className="hover:text-secondary"
					onClick={ () => confirmDelete() }
				>
					<FaTrash />
				</Button>
				<button
					className="touch-none cursor-grab active:cursor-grabbing"
					onPointerDown={ (event) => onDragStart(event, task) }
				>
					<FaGripVertical />
				</button>
			</div>
		</Card>
	)
}