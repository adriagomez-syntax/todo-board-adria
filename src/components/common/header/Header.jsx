import { FaBars, FaRegUser } from "react-icons/fa";
import Logo from "../Logo";
import { logout } from "../../../services/auth";
import Button from "../Button";
import { useState } from "react";
import SidebarMenu from "./SidebarMenu";
import DashboardList from "../../main/DashboardList";

export default function Header() {
	
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
			<div className="flex gap-2 items-center">
				<div className="bg-accent-3 p-2 rounded-full">
					<FaRegUser className="text-background-mid" />
				</div>
				<div className="flex flex-col gap-1 text-2xs">
					<p className="font-bold capitalize">Name</p>
					<a 
						onClick={ logout }
						className="hidden md:block font-semibold tracking-wider text-accent-3 hover:underline cursor-pointer"
					>
						Abmelden
					</a>
				</div>
			</div>
			<SidebarMenu open={ openMenu } setOpen={ setOpenMenu }>
				<div className="flex flex-col gap-4">
					<DashboardList />
				</div>
			</SidebarMenu>
		</header>
	)
}