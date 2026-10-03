import { useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router"
import BoardContext from "../context/BoardContext"

export default function BoardPage() {
	
	const navigate = useNavigate()
	const params = useParams()
	let id = params?.id ?? null
	if (id !== null) { id = Number(id) }

	const { boards, setDashboardSelected } = useContext(BoardContext)
	const board = id !== null ? boards?.find(item => item.id === id) ?? null : null

	useEffect(() => {
		if (id === null && boards.length > 0) {
			navigate(`/board/${boards[0].id}`)
			return
		}

		if (id !== null && board === null) {
			navigate("/board")
			return
		}

		setDashboardSelected(id)
	}, [id, setDashboardSelected, navigate, boards, board])

	return (
		<section>
			
		</section>
	)
}