import { FaColumns } from "react-icons/fa";
import DashboardList from "./DashboardList";
import DashboardEmpty from "./DashboardEmpty";
import Loader from "../../common/Loader";
import ShowError from "../../common/ShowError"
import SidebarMenu from "../../common/SidebarMenu";
import { useContext, useEffect, useRef, useState } from "react";
import DashboardCreate from "./DashboardCreate";
import BoardContext from "../../../context/BoardContext";

export default function DashboardSection({ menuClassName = "", className = "" }) {
	
	const { boards, loading, errorMsg } = useContext(BoardContext)
	const [menuOpen, setMenuOpen] = useState(false)
	const [title, setTitle] = useState("")
	const inputRef = useRef(null)

	function onClose() {
		setMenuOpen(false)
		setTitle("")
	}

	useEffect(() => {
		if (menuOpen) { inputRef.current?.focus() }
	}, [menuOpen])
	
	return (
		<section className={`${className} flex flex-col gap-4 h-full overflow-hidden`}>
			<div className="flex gap-2 justify-between">
				<div className="flex gap-2 items-center text-2xs">
					<FaColumns />
					<h2 className="text-light uppercase font-bold font-secondary">Meine Dashboards</h2>
				</div>
				{!loading && !errorMsg &&
					<div className="px-1 bg-background-dark font-bold text-2xs rounded-md">
						{ boards && boards.length }
					</div>
				}
			</div>
			{ loading
				? <Loader />
				: errorMsg
					? <ShowError error={ errorMsg } />
					: boards && boards.length > 0
						? <DashboardList openCreate={ setMenuOpen } />
						: <DashboardEmpty openCreate={ setMenuOpen } />
			}
			<SidebarMenu
				className={ menuClassName }
				direction="bottom" 
				open={ menuOpen } 
				setOpen={ onClose }
			>
				<DashboardCreate
					title={ title }
					setTitle={ setTitle }
					inputRef={ inputRef } 
					onClose={ onClose }
				/>
			</SidebarMenu>
		</section>
	)
}