import { useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router"
import BoardContext from "../context/BoardContext"
import TaskSection from "../components/main/task/TaskSection"
import TaskEmpty from "../components/main/task/TaskEmpty"

export default function BoardPage() {
	
	const navigate = useNavigate()
	const params = useParams()
	let id = params?.id ?? null
	if (id !== null) { id = Number(id) }

	const { boards, setDashboardSelected } = useContext(BoardContext)
	const board = id !== null ? boards?.find(item => item.id === id) ?? null : null

	useEffect(() => {
		if (boards === null) { return }

		if (id === null && boards.length > 0) {
			navigate(`/board/${boards[0].id}`)
			return
		}

		setDashboardSelected(board ?? null)
	}, [id, setDashboardSelected, navigate, boards, board])

	return (
		<>
			{ boards && boards.length > 0
				? <TaskSection />
				: <TaskEmpty />
			}
		</>
	)
}