import Logo from "../Logo";
import Button from "../Button";
import SidebarMenu from "../SidebarMenu";
import HeaderUser from "./HeaderUser";
import SidebarContent from "./SidebarContent";
import { FaBars } from "react-icons/fa";

export default function Header({ openMenu, setOpenMenu }) {
	return (
		<header className="flex justify-between items-center h-15 p-4 shadow-b bg-background-dark">
			<Button 
				className="md:hidden bg-background p-2 rounded-md"
				onClick={ () => setOpenMenu(true) }
			>
				<FaBars />
			</Button>
			<Logo className="flex-1 flex justify-center md:justify-start items-center w-full h-full" />
			<HeaderUser />
			<SidebarMenu direction="left" open={ openMenu } setOpen={ setOpenMenu }>
				<SidebarContent />
			</SidebarMenu>
		</header>
	)
}