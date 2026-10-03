import { FaPlusCircle } from "react-icons/fa";
import ButtonPrimary from "../../common/ButtonPrimary";
import Card from "../../common/Card";
import { useContext } from "react";
import BoardContext from "../../../context/BoardContext";

export default function TaskEmpty() {
	
	const { openBoard, setOpenMenu } = useContext(BoardContext)
	
	function handleOnClick(mobile = true) {
		if (mobile) { setOpenMenu(true) }
		
		openBoard()
	}

	return (
		<section className="p-4 md:mx-[20vw]">
			<Card className="flex flex-col gap-6 bg-background-mid">
				<div className="flex flex-col gap-3">
					<div className="flex flex-col font-secondary font-bold text-2xl text-center text-primary">
						<h1 className="font-secondary font-bold text-2xl">
							{"Wilkomen bei "}
						</h1>
						<p>
							<span className="text-text">Klar</span>
							<span className="text-secondary">Task</span>
							!
						</p>
					</div>
					<p className="text-xs font-light">Erstelle dein erstes Dashboard links in der Leiste, um mit deinen Aufgaben loszulegen und deine tägliche Routine mühelos zu strukturieren.</p>
				</div>
				<ButtonPrimary 
					className="flex md:hidden gap-2 items-center justify-center"
					onClick={ () => handleOnClick() }
				>
					<FaPlusCircle />
					<p>Erste Dashboard erstellen</p>
				</ButtonPrimary>
				<ButtonPrimary 
					className="hidden md:flex gap-2 items-center justify-center"
					onClick={ () => handleOnClick(false) }
				>
					<FaPlusCircle />
					<p>Erste Dashboard erstellen</p>
				</ButtonPrimary>
			</Card>
		</section>
	)
}