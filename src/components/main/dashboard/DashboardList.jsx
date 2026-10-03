import { useContext } from "react";
import BoardContext from "../../../context/BoardContext";
import ButtonPrimary from "../../common/ButtonPrimary";
import { FaPlusCircle } from "react-icons/fa";
import DashboardItem from "./DashboardItem"

export default function DashboardList({ openCreate }) {
	
	const { boards } = useContext(BoardContext)

	return (
		<div className="flex flex-col gap-4 h-full overflow-hidden">
			<ul className="flex flex-col gap-1 h-full overflow-y-scroll">
				{boards && boards.map(dashboard => (
					<DashboardItem
						key={ dashboard.id }
						{...dashboard}
					/>
				))}
			</ul>
			<ButtonPrimary 
				className="flex gap-1 justify-center items-center"
				onClick={ () => openCreate(true) }
			>
				<FaPlusCircle />
				Neues Dashboard
			</ButtonPrimary>
		</div>
	)
}