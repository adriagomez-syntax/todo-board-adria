import { FaGripVertical, FaPen, FaTrash } from "react-icons/fa";
import Button from "../../common/Button";
import Card from "../../common/Card";
import { useContext } from "react";
import ModalContext from "../../../context/ModalContext";
import TaskContext from "../../../context/TaskContext";
import { deleteTask } from "../../../services/tasks";

export default function TaskItem({ id, title, textDecoration }) {
	
	const { showConfirm, showError } = useContext(ModalContext)
	const { setLoading, reload } = useContext(TaskContext)

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
		setLoading(true)
	
		deleteTask(id)
			.then(() => reload(true))
			.catch(error => showError(error.message))
			.finally(() => setLoading(false))
	}
	
	return (
		<Card 
			className="flex gap-2 justify-between bg-background-dark"
		>
			<div className="flex gap-2">
				<h1 className={`${textDecoration}`}>{ title }</h1>
				<Button className="text-2xs hover:opacity-50">
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
				<FaGripVertical className="cursor-move" />
			</div>
		</Card>
	)
}