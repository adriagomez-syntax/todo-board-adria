import { FaColumns } from "react-icons/fa";
import DashboardList from "./DashboardList";
import DashboardEmpty from "./DashboardEmpty";

export default function DashboardSection({ className = "" }) {
	
	const dashboards = [
		{ id: 1, title: "Ein Dashboard", created_at: "2026-10-02T15:45:55.417655+00:00" },
		{ id: 2, title: "Zweite Dashboard", created_at: "2026-10-02T15:45:55.417655+00:00" }
	]
	
	return (
		<section className={`${className} flex flex-col gap-4`}>
			<div className="flex gap-2 justify-between">
				<div className="flex gap-2 items-center text-2xs">
					<FaColumns />
					<h2 className="text-light uppercase font-bold font-secondary">Meine Dashboards</h2>
				</div>
				<div className="px-1 bg-background-dark font-bold text-2xs rounded-md">
					{ dashboards.length }
				</div>
			</div>
			{ dashboards.length > 0
				? <DashboardList dashboards={ dashboards } />
				: <DashboardEmpty />
			}
		</section>
	)
}