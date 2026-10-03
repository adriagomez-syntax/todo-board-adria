import { Route, Routes } from "react-router";
import Main from "../components/common/Main";
import DashboardSection from "../components/main/dashboard/DashboardSection";
import BoardPage from "./BoardPage";
import Header from "../components/common/header/Header";
import Footer from "../components/common/footer/Footer";
import { useState } from "react";
import BoardContext from "../context/BoardContext"
import useBoards from "../hooks/useBoards"

export default function MainPage() {
	
	const { boards, loading, errorMsg, setLoading, reload } = useBoards()
	const [dashboardSelected, setDashboardSelected] = useState(null)

	return (
		<BoardContext value={{ boards, loading, errorMsg, setLoading, reload, dashboardSelected, setDashboardSelected }}>
			<Header />
			<Main 
				className="flex gap-4"
				little={ false }
			>
				<DashboardSection
					className="hidden md:flex md:w-1/5 md:max-w-1/5 p-4 bg-background-mid overflow-hidden"
					menuClassName="md:max-w-1/5" 
				/>
				<div className="flex-1">
					<Routes>
						<Route path="/board/:id" element={<BoardPage />} />
						<Route path="/*" element={<BoardPage />} />
					</Routes>
				</div>
			</Main>
			<Footer />
		</BoardContext>
	)
}