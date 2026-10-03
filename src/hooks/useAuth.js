import { useState } from "react"
import { login, loginOAuth, providersOAuth, register } from "../services/auth"

function useAuth(option = 0) {

	const [loading, setLoading] = useState(false)
	const [errorMsg, setErrorMsg] = useState(null)
	const [data, setData] = useState(null)

	function handleSubmit(event) {
		event.preventDefault()

		const form = new FormData(event.target)
		const email = form.get("email")
		const password = form.get("password")
		const user_name = form.get("user_name")

		if (!email || !password || (option === 1 && !user_name)) { return }

		doRequest(async () => {
			switch(option) {
			case 1:
				return await register(email, password, user_name)
			default:
				return await login(email, password)
			}
		})
	}

	async function doRequest(execution) {
		setLoading(true)
		setErrorMsg(null)

		execution()
			.then(data => setData(data))
			.catch(error => setErrorMsg(error.message))
			.finally(() => setLoading(false))
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

	return { loading, errorMsg, data, handleSubmit, doGithub, doDiscord }
}

export default useAuth