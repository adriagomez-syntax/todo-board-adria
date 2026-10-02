import { FaRegUser, FaSignOutAlt } from "react-icons/fa";
import Button from "../Button";
import { useContext } from "react";
import UserContext from "../../../context/UserContext";
import { logout } from "../../../services/auth";

export default function HeaderUser() {
	
	const { user } = useContext(UserContext)
	
	return (
		<div className="flex max-w-1/3 gap-2 items-center">
			<div className="flex gap-2 items-center max-w-full md:max-w-40">
				<div className="bg-accent-3 p-2 rounded-full">
					<FaRegUser className="text-background-mid" />
				</div>
				<div className="flex flex-col text-2xs max-w-full min-w-0">
					<p 
						className="font-bold truncate"
						title={ user?.user_metadata?.user_name ?? "--" }
					>
						{ user?.user_metadata?.user_name ?? "--" }
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
				className=" md:block p-2 bg-background rounded-md hover:text-red-500"
				onClick={ logout }
			>
				<FaSignOutAlt />
			</Button>
		</div>
	)
}