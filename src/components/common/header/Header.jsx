import Logo from "../Logo";
import Button from "../Button";
import { useState } from "react";
import SidebarMenu from "../SidebarMenu";
import HeaderUser from "./HeaderUser";
import SidebarContent from "./SidebarContent";
import { FaBars } from "react-icons/fa";

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
			<HeaderUser />
			<SidebarMenu open={ openMenu } setOpen={ setOpenMenu }>
				<SidebarContent />
			</SidebarMenu>
		</header>
	)
}