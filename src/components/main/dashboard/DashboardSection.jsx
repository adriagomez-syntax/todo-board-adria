import { FaColumns } from "react-icons/fa";
import DashboardList from "./DashboardList";
import DashboardEmpty from "./DashboardEmpty";
import useBoards from "../../../hooks/useBoards";
import Loader from "../../common/Loader";
import ShowError from "../../common/ShowError"
import SidebarMenu from "../../common/SidebarMenu";
import { useState } from "react";
import DashboardCreate from "./DashboardCreate";

export default function DashboardSection({ className = "" }) {
	
	const { boards, loading, errorMsg, setLoading, reload } = useBoards()
	const [menuOpen, setMenuOpen] = useState(false)
	/*const boards = [
		{ id: 1, title: "Ein Dashboard", created_at: "2026-10-02T15:45:55.417655+00:00" },
		{ id: 2, title: "Zweite Dashboard", created_at: "2026-10-02T15:45:55.417655+00:00" }
	]*/
	
	return (
		<section className={`${className} flex flex-col gap-4 h-full overflow-hidden`}>
			<div className="flex gap-2 justify-between">
				<div className="flex gap-2 items-center text-2xs">
					<FaColumns />
					<h2 className="text-light uppercase font-bold font-secondary">Meine Dashboards</h2>
				</div>
				{!loading && !errorMsg &&
					<div className="px-1 bg-background-dark font-bold text-2xs rounded-md">
						{ boards.length }
					</div>
				}
			</div>
			{ loading
				? <Loader />
				: errorMsg
					? <ShowError error={ errorMsg } />
					: boards.length > 0
						? <DashboardList dashboards={ boards } openCreate={ setMenuOpen } setLoading={ setLoading } reload={ reload } />
						: <DashboardEmpty />
			}
			<SidebarMenu direction="bottom" open={ menuOpen } setOpen={ setMenuOpen }>
				<DashboardCreate setOpen={ setMenuOpen } reload={ reload } setLoading={ setLoading } />
			</SidebarMenu>
		</section>
	)
}