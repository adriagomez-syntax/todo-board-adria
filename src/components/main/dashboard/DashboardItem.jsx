import { FaTrash } from "react-icons/fa";
import Button from "../../common/Button";
import { deleteBoard } from "../../../services/boards";
import { useContext } from "react";
import ModalContext from "../../../context/ModalContext";
import BoardContext from "../../../context/BoardContext";
import { useNavigate } from "react-router";

export default function DashboardItem({ id, title, created_at }) {
	
	const navigate = useNavigate()
	const { showError, showConfirm } = useContext(ModalContext)
	const { dashboardSelected } = useContext(BoardContext)

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
	
	return (
		<li 
			className={`${id === dashboardSelected?.id ? "bg-primary/40 border-l-2 border-accent-3" : "bg-background-dark cursor-pointer hover:opacity-80"} px-3 py-2  rounded-md`}
			onClick={() => navigate(`/board/${id}`)}
		>
			<div className="flex gap-2 justify-between items-center">
				<h1 className="font-secondary font-bold tracking-wider text-md truncate">
					{ title }
				</h1>
				{id === dashboardSelected?.id && <div className="bg-accent-3 p-1 rounded-full"></div>}
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