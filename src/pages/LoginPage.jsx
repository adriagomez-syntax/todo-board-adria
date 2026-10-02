import { useState } from "react"
import Main from "../components/common/Main"
import useAuth from "../hooks/useAuth"
import LoginHeader from "../components/login/LoginHeader"
import LoginContext from "../context/LoginContext"
import LoginCard from "../components/login/card/LoginCard"

export default function LoginPage() {

	const [authOption, setAuthOption] = useState(0)
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const { loading, errorMsg, handleSubmit } = useAuth(authOption)

	return (
		<Main className="flex-1 flex flex-col gap-4 items-center justify-center">
			<LoginHeader />
			<LoginContext value={{ authOption, setAuthOption, email, setEmail, password, setPassword, loading, errorMsg, handleSubmit }}>
				<LoginCard />
			</LoginContext>
		</Main>
	)
}