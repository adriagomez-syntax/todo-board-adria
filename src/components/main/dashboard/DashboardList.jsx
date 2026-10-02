import { useContext } from "react";
import UserContext from "../../../context/UserContext";
import ButtonPrimary from "../../common/ButtonPrimary";
import { FaPlusCircle } from "react-icons/fa";
import DashboardItem from "./DashboardItem"

export default function DashboardList({ dashboards }) {
	
	const { dashboardSelected, setDashboardSelected } = useContext(UserContext)
	
	return (
		<div className="flex flex-col gap-4">
			<ul className="flex flex-col gap-1">
				{dashboards.map(dashboard => (
					<DashboardItem
						key={ dashboard.id }
						dashboardSelected={ dashboardSelected } 
						setDashboardSelected={ setDashboardSelected } 
						{...dashboard}
					/>
				))}
			</ul>
			<ButtonPrimary 
				className="flex gap-1 justify-center items-center"
				onClick={ null }
			>
				<FaPlusCircle />
				Neues Dashboard
			</ButtonPrimary>
		</div>
	)
}