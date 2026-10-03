import { useEffect, useRef, useState } from "react"

function useBoardCreate() {
	const [boardOpen, setBoardOpen] = useState(false)
	const [titleBoard, setTitleBoard] = useState("")
	const titleBoardRef = useRef(null)

	function openBoard() {
		setBoardOpen(true)
	}

	function isBoardOpen() {
		return boardOpen
	}

	function closeBoard() {
		setBoardOpen(false)
		setTitleBoard("")
	}

	useEffect(() => {
		if (boardOpen) { titleBoardRef.current?.focus() }
	}, [boardOpen])

	return { titleBoard, setTitleBoard, titleBoardRef, openBoard, isBoardOpen, closeBoard }
}

export default useBoardCreate