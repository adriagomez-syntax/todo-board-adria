import { useContext, useEffect } from "react";
import UserContext from "../../../context/UserContext";
import ButtonPrimary from "../../common/ButtonPrimary";
import { FaPlusCircle } from "react-icons/fa";
import DashboardItem from "./DashboardItem"

export default function DashboardList({ dashboards, openCreate, setLoading, reload }) {
	
	const { dashboardSelected, setDashboardSelected } = useContext(UserContext)
	
	useEffect(() => {
		if (dashboardSelected === null && dashboards.length > 0) { setDashboardSelected(dashboards[0].id) }
	
	}, [dashboards, dashboardSelected, setDashboardSelected])

	return (
		<div className="flex flex-col gap-4 h-full overflow-hidden">
			<ul className="flex flex-col gap-1 h-full overflow-y-scroll">
				{dashboards.map(dashboard => (
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