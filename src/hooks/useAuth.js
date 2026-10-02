import { useEffect, useState } from "react"
import { login, register } from "../services/auth"

function useAuth(option = 0) {

	const [loading, setLoading] = useState(false)
	const [errorMsg, setErrorMsg] = useState(null)
	const [data, setData] = useState(null)
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	function handleSubmit(event) {
		event.preventDefault()

		const form = new FormData(event.target)
		setEmail(form.get("email"))
		setPassword(form.get("password"))
	}

	useEffect(() => {

		if (!email || !password) { return }

		async function doLogin() {

			setLoading(true)
			setErrorMsg(null)

			try {

				let data = null

				switch(option) {
				case 1:
					data = await register(email, password)
					break;
				default:
					data = await login(email, password)
				}

				setData(data)

			} catch(error) {
				setErrorMsg(error.message)
			} finally {
				setLoading(false)
				setEmail("")
				setPassword("")
			}

		}

		doLogin()

		
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [email, password])

	return { loading, errorMsg, data, handleSubmit }
}

export default useAuth