import { useState } from "react"

function useError() {
	const [error, setError] = useState("")
	const [open, setOpen] = useState(false)

	function showError(error) {
		setError(error)
		setOpen(true)
	}

	return { error, open, setOpen, showError }
}

export default useError