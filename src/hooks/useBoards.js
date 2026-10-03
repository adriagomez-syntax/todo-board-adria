import { useEffect, useState } from "react"
import { getBoards } from "../services/boards"

function useBoards() {
	const [boards, setBoards] = useState(null)
	const [loading, setLoading] = useState(true)
	const [errorMsg, setErrorMsg] = useState(null)

	async function reload(ignore = false) {
		if (!ignore) { setLoading(true) }
		setErrorMsg(null)

		getBoards()
			.then(data => setBoards(data))
			.catch(error => setErrorMsg(error.message))
			.finally(() => {if (!ignore) { setLoading(false) }})
	}

	useEffect(() => {
		
		let ignore = false;
		
		getBoards()
			.then(data => {
				if (!ignore) { setBoards(data) }
			})
			.catch(error => {
				if (!ignore) { setErrorMsg(error.message) }
			})
			.finally(() => {
				if (!ignore) { setLoading(false) }
			})
		
		return () => ignore = true
	}, [])

	return { boards, loading, errorMsg, setLoading, reload }
}

export default useBoards