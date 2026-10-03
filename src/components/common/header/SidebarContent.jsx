import { FaArrowRight, FaSignOutAlt } from "react-icons/fa";
import Button from "../Button";
import { logout } from "../../../services/auth";
import DashboardSection from "../../main/dashboard/DashboardSection";

export default function SidebarContent() {
	return (
		<>
			<div className="flex-1 p-4 bg-background h-full overflow-hidden">
				<div className="flex flex-col gap-4 max-h-full">
					<DashboardSection />
				</div>
			</div>
			<div className="bg-background-dark">
				<Button
					className="w-full flex gap-2 justify-between items-center p-4 text-xs text-accent-3 hover:text-red-500"
					onClick={ logout }
				>
					<div className="flex gap-1 items-center">
						<FaSignOutAlt />
						Abmelden
					</div>
					<FaArrowRight />
				</Button>
			</div>
		</>
	)
}