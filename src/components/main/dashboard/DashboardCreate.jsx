import { FaCheck, FaPen, FaRegCalendarPlus } from "react-icons/fa";
import Input from "../../common/Input";
import { useContext } from "react";
import ButtonPrimary from "../../common/ButtonPrimary";
import ButtonSecondary from "../../common/ButtonSecondary";
import { createBoard } from "../../../services/boards";
import ModalContext from "../../../context/ModalContext";
import { useNavigate } from "react-router";

export default function DashboardCreate({ titleBoard, setTitleBoard, titleBoardRef, closeBoard }) {
	
	const navigate = useNavigate()
	const { showError } = useContext(ModalContext)

	async function onSubmit(event) {
		event.preventDefault()

		const titleSend = titleBoard
		closeBoard()

		createBoard(titleSend)
			.then(data => {
				if (data?.id !== null) { navigate(`/board/${data.id}`) }
			})
			.catch(error => showError(error.message))
	}

	return (
		<form
			className="flex flex-col gap-4 p-4 bg-background-mid"
			onSubmit={ onSubmit }
		>
			<div className="flex gap-2 items-center">
				<div className="p-2 bg-primary rounded-md text-accent-3">
					<FaRegCalendarPlus />
				</div>
				<h1 className="">Neues Dashboard erstellen</h1>
			</div>
			<p className="font-light text-2xs">Organisiere ein neues Projekt</p>
			<Input
				label="Titel des Dashboards"
				icon={ FaPen }
				value={ titleBoard }
				onChange={ setTitleBoard }
				ref={ titleBoardRef }
				required={ true }
			/>
			<div className="flex flex-col gap-2">
				<ButtonPrimary 
					className="flex gap-2 justify-center items-center"
					type="submit"
				>
					<FaCheck />
					Dashboard erstellen
				</ButtonPrimary>
				<ButtonSecondary onClick={ () => closeBoard() }>
					Abbrechen
				</ButtonSecondary>
			</div>
		</form>
	)
}