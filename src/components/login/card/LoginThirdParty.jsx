import ButtonSecondary from "../../common/ButtonSecondary";
import { useContext } from "react";
import LoginContext from "../../../context/LoginContext";
import { FaDiscord, FaGithub } from "react-icons/fa";

export default function LoginThirdParty() {
	
	const { authOption, doGithub, doDiscord } = useContext(LoginContext)

	const loginOption = [
		{ name: "GitHub", icon: FaGithub, func: doGithub },
		{ name: "Discord", icon: FaDiscord, func: doDiscord }
	]
	
	return (
		<div className="w-full flex flex-col gap-4">
			<div className="border-t border-background relative flex justify-center items-center">
				<span className="absolute uppercase text-2xs text-accent-3/40 bg-background-mid p-1">Oder</span>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
				{ loginOption.map(option => {
					
					const Icon = option.icon

					return (
						<ButtonSecondary 
							key={ option.name }
							className="w-full flex gap-1 items-center justify-center"
							onClick={ option.func }
						>
							<Icon />
							Mit {option.name} {authOption === 0 ? "anmelden" : "registrieren"}
						</ButtonSecondary>
					)
				})}
			</div>
		</div>
	)
}