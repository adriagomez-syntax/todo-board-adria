import Footer from "./components/common/footer/Footer";
import Header from "./components/common/header/Header";
import useUser from "./hooks/useUser";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import UserContext from "./context/UserContext"
import { useState } from "react";
import { Route, Routes } from "react-router";
import Modals from "./components/common/modal/Modals";

export default function App() {
	
	const user = useUser()
	const [dashboardSelected, setDashboardSelected] = useState(null)

	return (
		<div className="flex flex-col h-screen font-primary text-text text-sm bg-background">
			<Modals>
				{!user
					? <LoginPage />
					: <UserContext value={{ user, dashboardSelected, setDashboardSelected }}>
						<Header />
						<Routes>
							<Route path="/" element={<MainPage />} />
							<Route path="/board/:id" element={<MainPage />} />
						</Routes>
						<Footer />
					</UserContext>
				}
			</Modals>
		</div>
	)	
}