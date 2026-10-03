import { useContext, useEffect } from "react"
import { useParams } from "react-router"
import BoardContext from "../context/BoardContext"

export default function BoardPage() {
	
	const params = useParams()
	const id = params?.id ?? null

	const { setDashboardSelected } = useContext(BoardContext)
	
	useEffect(() => {
		setDashboardSelected(id)
	}, [id, setDashboardSelected])

	return (
		<section>
			
		</section>
	)
}