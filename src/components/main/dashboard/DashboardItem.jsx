import { FaTrash } from "react-icons/fa";
import Button from "../../common/Button";
import { deleteBoard } from "../../../services/boards";
import { useContext } from "react";
import ModalContext from "../../../context/ModalContext";
import BoardContext from "../../../context/BoardContext";

export default function DashboardItem({ setLoading, reload, id, title, created_at }) {
	
	const { showError, showConfirm } = useContext(ModalContext)
	const { dashboardSelected, setDashboardSelected } = useContext(BoardContext)

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
		setLoading(true)

		deleteBoard(id)
			.then(() => {
				setDashboardSelected((prev) => prev === id ? null : prev)
				reload(true)
			})
			.catch(error => showError(error.message))
			.finally(() => setLoading(false))

	}
	
	return (
		<li 
			className={`${id === dashboardSelected ? "bg-primary/40 border-l-2 border-accent-3" : "bg-background-dark cursor-pointer hover:opacity-80"} px-3 py-2  rounded-md`}
			onClick={() => setDashboardSelected(id)}
		>
			<div className="flex gap-2 justify-between items-center">
				<h1 className="font-secondary font-bold tracking-wider text-md truncate">
					{ title }
				</h1>
				{id === dashboardSelected && <div className="bg-accent-3 p-1 rounded-full"></div>}
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