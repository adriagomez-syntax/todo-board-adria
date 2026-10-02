import { FaBars, FaRegUser, FaSignOutAlt } from "react-icons/fa";
import Logo from "../Logo";
import { logout } from "../../../services/auth";
import Button from "../Button";
import { useContext, useState } from "react";
import SidebarMenu from "./SidebarMenu";
import DashboardList from "../../main/DashboardList";
import UserContext from "../../../context/UserContext";

export default function Header() {
	
	const { user } = useContext(UserContext)
	const [openMenu, setOpenMenu] = useState(false)
	
	function openSidebar() {
		setOpenMenu(true)
	}

	return (
		<header className="flex justify-between items-center h-15 p-4 shadow-b bg-background-mid">
			<Button 
				className="md:hidden bg-background p-2 rounded-md"
				onClick={ openSidebar }
			>
				<FaBars />
			</Button>
			<Logo />
			<div className="flex max-w-1/3 gap-2 items-center">
				<div className="flex gap-2 items-center max-w-full md:max-w-40">
					<div className="bg-accent-3 p-2 rounded-full">
						<FaRegUser className="text-background-mid" />
					</div>
					<div className="flex flex-col text-2xs max-w-full min-w-0">
						<p 
							className="font-bold capitalize truncate"
							title={ user?.user_metadata?.username ?? "--" }
						>
							{ user?.user_metadata?.username ?? "--" }
						</p>
						<p 
							className="font-semibold tracking-wider text-accent-3 truncate"
							title={ user?.email ?? "--" }
						>
							{ user?.email ?? "--" }
						</p>
					</div>
				</div>
				<Button 
					className="hidden md:block p-2 bg-background rounded-md hover:text-red-500"
					onClick={ logout }
				>
					<FaSignOutAlt />
				</Button>
			</div>
			<SidebarMenu open={ openMenu } setOpen={ setOpenMenu }>
				<div className="flex flex-col gap-4">
					<DashboardList />
				</div>
			</SidebarMenu>
		</header>
	)
}