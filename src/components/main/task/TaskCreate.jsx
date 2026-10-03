import { useContext } from "react";
import Modal from "../../common/modal/Modal";
import BoardContext from "../../../context/BoardContext";
import { FaClipboardCheck, FaPen } from "react-icons/fa";
import Input from "../../common/Input";
import ButtonPrimary from "../../common/ButtonPrimary";
import ButtonSecondary from "../../common/ButtonSecondary";
import SelectorButtons from "../../common/SelectorButtons";
import { createTask } from "../../../services/tasks";
import ModalContext from "../../../context/ModalContext";

export default function TaskCreate({ isTaskOpen, titleTask, setTitleTask, titleTaskRef, statusTask, setStatusTask, closeTask }) {
	
	const { showError } = useContext(ModalContext)
	const { dashboardSelected } = useContext(BoardContext)
	const statusOptions = [
		{ text: "Ausstehend", value: "todo" },
		{ text: "In Bearbeitung", value: "doing" },
		{ text: "Erledigt", value: "done" }
	]

	function onSubmit(event) {
		event.preventDefault()
		
		const titleSend = titleTask;
		closeTask()

		createTask(dashboardSelected?.id, titleSend, statusTask)
			.then(() => {})
			.catch(error => showError(error.message))
	}

	return (
		<Modal
			open={ isTaskOpen }
			setOpen={ closeTask }
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
						selected={ statusTask }
						setSelected={ setStatusTask }
					/>
					<Input
						label="Aufgabetitel"
						icon={ FaPen }
						value={ titleTask }
						onChange={ setTitleTask }
						ref={ titleTaskRef }
						required={ true }
					/>
				</div>
				<div className="flex gap-2 justify-end">
					<ButtonPrimary type="submit">
						Aufgabe speichern
					</ButtonPrimary>
					<ButtonSecondary onClick={ () => closeTask() }>
						Abbrechen
					</ButtonSecondary>
				</div>
			</form>
		</Modal>
	)
}