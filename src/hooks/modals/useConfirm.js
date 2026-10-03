import { useState } from "react"

function useConfirm() {
	const [title, setTitle] = useState("")
	const [desc, setDesc] = useState("")
	const [callback, setCallback] = useState(null)
	const [open, setOpen] = useState(false)

	function showConfirm(title = "", desc = "", callback) {
		setTitle(title)
		setDesc(desc)
		setCallback(() => callback)
		setOpen(true)
	}

	return [title, desc, callback, open, setOpen, showConfirm]
}

export default useConfirm