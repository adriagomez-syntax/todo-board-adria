import { useContext, useEffect } from "react";
import BoardContext from "../../../context/BoardContext";
import ButtonPrimary from "../../common/ButtonPrimary";
import { FaPlusCircle } from "react-icons/fa";
import DashboardItem from "./DashboardItem"

export default function DashboardList({ openCreate }) {
	
	const { boards, dashboardSelected, setDashboardSelected, setLoading, reload } = useContext(BoardContext)
	
	useEffect(() => {
		if (dashboardSelected === null && boards.length > 0) { setDashboardSelected(boards[0].id) }
	
	}, [boards, dashboardSelected, setDashboardSelected])

	return (
		<div className="flex flex-col gap-4 h-full overflow-hidden">
			<ul className="flex flex-col gap-1 h-full overflow-y-scroll">
				{boards.map(dashboard => (
					<DashboardItem
						key={ dashboard.id }
						setLoading={ setLoading }
						reload={ reload }
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