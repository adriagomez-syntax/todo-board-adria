import { useContext, useState } from "react"
import LoginContext from "../../../context/LoginContext"
import Input from "../../common/Input"
import { FaArrowRight, FaEnvelope, FaLock, FaUser } from "react-icons/fa"
import ButtonPrimary from "../../common/ButtonPrimary"
import PasswordSecurity from "./PasswordSecurity"

export default function RegisterForm() {
	
	const [verify, setVerify] = useState(false)
	const [username, setUsername] = useState("")
	const [passwordRep, setPasswordRep] = useState("")
	const { email, setEmail, password, setPassword, errorMsg, handleSubmit } = useContext(LoginContext)

	function allCorrect(event) {
		event.preventDefault()

		if (!verify) { return }

		handleSubmit(event)
	}

	return (
		<form
			className="flex flex-col gap-4"
			onSubmit={ allCorrect }
		>
			<div className="flex flex-col gap-2">
				<Input 
					label="Benutzername"
					icon={ FaUser }
					value={ username }
					name="user_name"
					onChange={ setUsername }
					placeholder="Deine Benutzername"
					required={ true }
				/>
				<Input
					label="E-Mail-Adresse"
					icon={ FaEnvelope }
					value={ email }
					name="email"
					onChange={ setEmail }
					placeholder="example@example.test"
					type="email"
					required={ true }
				/>
				<Input
					label="Passwort"
					icon={ FaLock }
					value={ password }
					name="password"
					onChange={ setPassword }
					placeholder="Passwort"
					type="password"
					required={ true }
				/>
				<Input
					label="Passwort bestätigen"
					icon={ FaLock }
					value={ passwordRep }
					name="password_rep"
					onChange={ setPasswordRep }
					placeholder="Passwort widerholen"
					type="password"
					required={ true }
				/>
				<PasswordSecurity setVerify={ setVerify } password={ password } passwordRep={ passwordRep } />
				<label className="flex gap-1 items-start text-2xs">
					<input type="checkbox" name="terms" required />
					<div>
						{"Ich akzeptiere die "}
						<a 
							href="#"
							className="text-accent-1 hover:underline"
						>
							AGB
						</a>
						{" und habe die "}
						<a 
							href="#"
							className="text-accent-1 hover:underline"
						>
							Datenschutzerklärung
						</a>
						{" zur Kenntnis genommen."}
					</div>
				</label>
				{errorMsg && 
					<p
						title={ errorMsg } 
						className="text-2xs text-secondary first-letter:capitalize truncate"
					>{ errorMsg }</p>
				}
			</div>
			<div className="flex justify-center">
				<ButtonPrimary 
					className="flex-1 md:max-w-45 flex items-center justify-center gap-2"
					type="submit"
				>
					Registrieren
					<FaArrowRight />
				</ButtonPrimary>
			</div>
		</form>
	)
}