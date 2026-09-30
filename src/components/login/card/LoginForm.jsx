import { useContext } from "react"
import LoginContext from "../../../context/LoginContext"
import Input from "../../common/Input"
import ButtonPrimary from "../../common/ButtonPrimary"
import { FaArrowRight, FaEnvelope, FaLock } from "react-icons/fa"

export default function LoginForm() {
	
	const { setAuthOption, email, setEmail, password, setPassword, errorMsg, handleSubmit } = useContext(LoginContext)
	
	return (
		<form
			className="flex flex-col gap-2"
			onSubmit={ handleSubmit }
		>
			<Input
				label="E-Mail-Adresse"
				icon={ FaEnvelope }
				value={ email }
				name="email"
				onChange={ setEmail }
				placeholder="example@example.test"
				type="email"
				required={true}
			/>
			<div className="flex flex-col gap-1">
				<Input
					label="Passwort"
					icon={ FaLock }
					value={ password }
					name="password"
					onChange={ setPassword }
					placeholder="Passwort"
					type="password"
					required={true}
				/>
				{errorMsg && <p className="text-2xs text-secondary capitalize">{ errorMsg }</p>}
			</div>
			<a
				onClick={ () => setAuthOption(1) }
			>
				
			</a>
			<div className="flex justify-center">
				<ButtonPrimary 
					className="flex-1 md:max-w-45 flex items-center justify-center gap-2"
					type="submit"
				>
					Anmelden
					<FaArrowRight />
				</ButtonPrimary>
			</div>
		</form>
	)
}