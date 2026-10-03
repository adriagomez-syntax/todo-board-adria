import { FaPen, FaTrash } from "react-icons/fa";
import Button from "../../common/Button";
import { deleteBoard, updateBoard } from "../../../services/boards";
import { useContext, useEffect, useRef, useState } from "react";
import ModalContext from "../../../context/ModalContext";
import BoardContext from "../../../context/BoardContext";
import { useNavigate } from "react-router";

export default function DashboardItem({ id, title, created_at }) {
	
	const navigate = useNavigate()
	const { showError, showConfirm } = useContext(ModalContext)
	const { dashboardSelected } = useContext(BoardContext)
	const titleRef = useRef()
	const [inputTitle, setInputTitle] = useState(title)
	const [editEnabled, setEditEnabled] = useState(false)

	function confirmDelete() {
		showConfirm(
			"Vorsicht!",
			<div className="flex flex-col gap-1">
				Bist du sicher, dass du das Dashboard löschen möchtest?
				<span className="text-secondary">Diese Aktion kann nicht rückgängig gemacht werden.</span>
			</div>,
			deleteEntry
		)
	}

	async function deleteEntry() {
		deleteBoard(id)
			.then(() => navigate("/"))
			.catch(error => showError(error.message))
	}

	function toggleEdit() {
		setEditEnabled((prev) => !prev)
	}

	async function updateTitle() {
		setEditEnabled(false)
		
		updateBoard(inputTitle, id)
			.then(() => navigate("/"))
			.catch(error => showError(error.message))
	}

	useEffect(() => {
		if (editEnabled) { titleRef.current?.focus() }
	}, [editEnabled])
	
	return (
		<li 
			className={`${id === dashboardSelected?.id ? "bg-primary/40 border-l-2 border-accent-3" : "bg-background-dark cursor-pointer hover:opacity-80"} px-3 py-2  rounded-md`}
			onClick={() => navigate(`/board/${id}`)}
		>
			<div className="flex gap-2 justify-between items-center">
				<div className="overflow-hidden">
					<input
						className={`${!editEnabled && "hidden"} min-w-0 w-full`}
						value={ inputTitle }
						onChange={ (event) => setInputTitle(event.target.value) }
						ref={ titleRef }
						onBlur={ () => updateTitle() }
					/>
					<h1 className={`${editEnabled && "hidden"} font-secondary font-bold tracking-wider text-md truncate`}>
						{ title }
					</h1>
				</div>
				<Button
					className={`${editEnabled && "hidden"} text-2xs hover:opacity-50`}
					onClick={ () => toggleEdit() }
				>
					<FaPen />
				</Button>
			</div>
			<div className="flex gap-2 justify-between items-center text-2xs">
				<p className="flex gap-1">
					Erstellt: 
					<span className="font-bold">
						{ new Date(created_at).toLocaleDateString("de-De", { day: "2-digit", month: "2-digit", year: "numeric" }) }
					</span>
				</p>
				<Button 
					className="hover:text-secondary"
					onClick={ () => confirmDelete() }
				>
					<FaTrash />
				</Button>
			</div>
		</li>
	)
}