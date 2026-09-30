import { useContext } from "react"
import LoginContext from "../../../context/LoginContext"
import { FaSignInAlt, FaUserPlus } from "react-icons/fa"

export default function LoginType() {
	
	const { authOption, setAuthOption } = useContext(LoginContext)
	
	return (
		<div className="relative flex gap-2 h-8 bg-background-dark p-1 rounded-md text-2xs">
			<div className={`
				${authOption === 0 ? "left-1" : "translate-x-full left-1"} 
				absolute top-1 bottom-1 w-[calc(50%-0.25rem)] transform duration-300 bg-background-mid rounded-md`
			}></div>
			<div 
				className={`${authOption === 1 ? "cursor-pointer" : "cursor-default"} relative flex-1 flex gap-1 justify-center items-center z-10 px-2`}
				onClick={ () => setAuthOption(0) }
			>
				<FaSignInAlt />
				<p>Anmelden</p>
			</div>
			<div 
				className={`${authOption === 0 ? "cursor-pointer" : "cursor-default"} relative flex-1 flex gap-1 justify-center items-center z-10 px-2`}
				onClick={ () => setAuthOption(1) }
			>	
				<FaUserPlus />
				<p>Registrieren</p>
			</div>
		</div>
	)
}