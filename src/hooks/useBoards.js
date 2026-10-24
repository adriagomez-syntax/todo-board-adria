import { useEffect, useState } from "react"
import { getBoards } from "../services/boards"
import { supabase } from "../lib/supabase"

function useBoards() {
	const [boards, setBoards] = useState(null)
	const [loading, setLoading] = useState(true)
	const [errorMsg, setErrorMsg] = useState(null)

	useEffect(() => {
		
		async function load() {
			setLoading(true)
			setErrorMsg(null)

			getBoards()
				.then(data => setBoards(data))
				.catch(error => setErrorMsg(error.message))
				.finally(() => setLoading(false))
		}

		const channel = supabase
			.channel("boards")
			.on(
				"postgres_changes",
				{
					event: "*",
					schema: "public",
					table: "boards"
				},
				load
			)
			.subscribe()

		load()
		
		return () => { supabase.removeChannel(channel) }
	}, [])

	return { boards, loading, errorMsg }
}

export default useBoards