import { useEffect, useState } from "react"
import { login, loginOAuth, providersOAuth, register } from "../services/auth"

function useAuth(option = 0) {

	const [loading, setLoading] = useState(false)
	const [errorMsg, setErrorMsg] = useState(null)
	const [data, setData] = useState(null)
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [user_name, setUsername] = useState("")

	function handleSubmit(event) {
		event.preventDefault()

		const form = new FormData(event.target)
		setEmail(form.get("email"))
		setPassword(form.get("password"))
		setUsername(form.get("user_name"))
	}

	async function doRequest(execution) {
		setLoading(true)
		setErrorMsg(null)

		try {

			const data = await execution()
			setData(data)

		} catch(error) {
			setErrorMsg(error.message)
		} finally {
			setLoading(false)
			setEmail("")
			setPassword("")
		}
	}

	async function doLogin() {

		// eslint-disable-next-line no-useless-assignment
		let data = null

		switch(option) {
		case 1:
			data = await register(email, password, user_name)
			break;
		default:
			data = await login(email, password)
		}

		return data
	}

	async function doGithub() {
		doRequest(async () => {
			const data = await loginOAuth(providersOAuth.Github)
			return data
		})
	}

	async function doDiscord() {
		doRequest(async () => {
			const data = await loginOAuth(providersOAuth.Discord)
			return data
		})
	}

	useEffect(() => {

		if (!email || !password) { return }
		
		// eslint-disable-next-line react-hooks/set-state-in-effect
		doRequest(doLogin)
		
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [email, password])

	return { loading, errorMsg, data, handleSubmit, doGithub, doDiscord }
}

export default useAuth