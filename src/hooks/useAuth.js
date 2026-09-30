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
		console.log(form.get("email"))
		setPassword(form.get("password"))
		console.log(form.get("password"))
	}

	useEffect(() => {

		if (!email || !password) { return }

		async function doLogin() {

			setLoading(true)
			setErrorMsg(null)

			try {

				let data = null

				switch(option) {
				case 0:
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
			}

		}

		doLogin()

	}, [email, password])

	return { loading, errorMsg, data, handleSubmit }
}

export default useAuth