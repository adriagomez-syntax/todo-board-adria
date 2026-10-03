import { FaFolderPlus, FaPlusCircle } from "react-icons/fa";
import ButtonPrimary from "../../common/ButtonPrimary";
import { useContext } from "react";
import BoardContext from "../../../context/BoardContext";

export default function DashboardEmpty() {	
	
	const { openBoard } = useContext(BoardContext)
	
	return (
		<div className="flex flex-col gap-2 items-center bg-background-dark p-3 rounded-md">
			<div className="p-2 bg-primary/30 inset-shadow-xs rounded-full">
				<FaFolderPlus className="text-accent-3" />
			</div>
			<h1 className="font-secondary font-bold text-center">Keine Dashboards vorhanden</h1>
			<p className="text-text/80 text-center text-2xs">Erstelle dein erstes Board, um Aufgaben im Team oder für dich zu organisieren.</p>
			<ButtonPrimary 
				className="w-full flex gap-1 justify-center items-center"
				onClick={ () => { openBoard() } }
			>
				<FaPlusCircle />
				Erste Dashboard erstellen
			</ButtonPrimary>
		</div>
	)
}