import { useContext } from "react";
import Modal from "../../common/modal/Modal";
import BoardContext from "../../../context/BoardContext";
import { FaClipboardCheck, FaPen } from "react-icons/fa";
import Input from "../../common/Input";
import ButtonPrimary from "../../common/ButtonPrimary";
import ButtonSecondary from "../../common/ButtonSecondary";
import SelectorButtons from "../../common/SelectorButtons";
import TaskContext from "../../../context/TaskContext";
import { createTask } from "../../../services/tasks";
import ModalContext from "../../../context/ModalContext";

export default function TaskCreate({ open, title, setTitle, titleRef, status, setStatus, onClose }) {
	
	const { showError } = useContext(ModalContext)
	const { dashboardSelected } = useContext(BoardContext)
	const { setLoading, reload } = useContext(TaskContext)
	const statusOptions = [
		{ text: "Ausstehend", value: "todo" },
		{ text: "In Bearbeitung", value: "doing" },
		{ text: "Erledigt", value: "done" }
	]

	function onSubmit(event) {
		event.preventDefault()

		setLoading(true)
		
		const titleSend = title;
		onClose()

		createTask(dashboardSelected?.id, titleSend, status)
			.then(() => reload(true))
			.catch(error => showError(error.message))
			.finally(() => setLoading(false))
	}

	return (
		<Modal
			open={ open }
			setOpen={ onClose }
		>
			<form 
				className="flex flex-col gap-4"
				onSubmit={ onSubmit }
			>
				<div className="flex gap-2 items-center">
					<div className="p-1 bg-primary text-accent-3 rounded-md">
						<FaClipboardCheck />
					</div>
					<div className="flex flex-col gap-1">
						<h1 className="font-secondary font-bold">Neue Aufgabe erstellen</h1>
						<p className="text-2xs text-text/80">
							{`Erstelle eine neue Karte für das Board "`}
							<span className="font-bold">{dashboardSelected?.title}</span>
						".</p>
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<SelectorButtons
						label="Status"
						options={ statusOptions }
						selected={ status }
						setSelected={ setStatus }
					/>
					<Input
						label="Aufgabetitel"
						icon={ FaPen }
						value={ title }
						onChange={ setTitle }
						ref={ titleRef }
						required={ true }
					/>
				</div>
				<div className="flex gap-2 justify-end">
					<ButtonPrimary type="submit">
						Aufgabe speichern
					</ButtonPrimary>
					<ButtonSecondary onClick={ () => onClose() }>
						Abbrechen
					</ButtonSecondary>
				</div>
			</form>
		</Modal>
	)
}