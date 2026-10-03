import { useContext } from "react";
import BoardContext from "../../../context/BoardContext";
import ButtonPrimary from "../../common/ButtonPrimary";
import { FaPlusCircle } from "react-icons/fa";
import DashboardItem from "./DashboardItem"

export default function DashboardList() {
	
	const { boards, openBoard } = useContext(BoardContext)

	return (
		<div className="flex flex-col gap-4 h-full overflow-hidden">
			<ul className="flex flex-col gap-2 h-full overflow-y-scroll">
				{boards && boards.map(dashboard => (
					<DashboardItem
						key={ dashboard.id }
						{...dashboard}
					/>
				))}
			</ul>
			<ButtonPrimary 
				className="flex gap-1 justify-center items-center"
				onClick={ () => openBoard() }
			>
				<FaPlusCircle />
				Neues Dashboard
			</ButtonPrimary>
		</div>
	)
}