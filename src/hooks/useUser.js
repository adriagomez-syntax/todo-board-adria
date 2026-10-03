import { useEffect, useState } from "react"
import { getSession, subscribeSession } from "../services/session"

function useUser() {
	const [user, setUser] = useState(null)

	useEffect(() => {
		async function loadSession() {
			const loadedUser = await getSession()
			setUser(loadedUser)
		}
		loadSession()
		
		const data = subscribeSession(setUser)

		return () => data.subscription.unsubscribe()
	}, [])

	return user
}

export default useUser