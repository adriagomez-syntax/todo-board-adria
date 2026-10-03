import { FaColumns } from "react-icons/fa";
import DashboardList from "./DashboardList";
import DashboardEmpty from "./DashboardEmpty";
import Loader from "../../common/Loader";
import ShowError from "../../common/ShowError"
import SidebarMenu from "../../common/SidebarMenu";
import { useContext } from "react";
import DashboardCreate from "./DashboardCreate";
import BoardContext from "../../../context/BoardContext";

export default function DashboardSection({ menuClassName = "", className = "" }) {
	
	const { boards, loading, errorMsg, isBoardOpen, closeBoard, titleBoard, setTitleBoard, titleBoardRef } = useContext(BoardContext)
	
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
						? <DashboardList />
						: <DashboardEmpty />
			}
			<SidebarMenu
				className={ menuClassName }
				direction="bottom" 
				open={ isBoardOpen() } 
				setOpen={ closeBoard }
			>
				<DashboardCreate
					titleBoard={ titleBoard }
					setTitleBoard={ setTitleBoard }
					titleBoardRef={ titleBoardRef } 
					closeBoard={ closeBoard }
				/>
			</SidebarMenu>
		</section>
	)
}