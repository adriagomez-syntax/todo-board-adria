import Footer from "./components/common/footer/Footer";
import Header from "./components/common/header/Header";
import useUser from "./hooks/useUser";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import UserContext from "./context/UserContext"
import { useState } from "react";

export default function App() {
	
	const user = useUser()
	const [dashboardSelected, setDashboardSelected] = useState(null)
	
	return (
		<div className="flex flex-col min-h-screen font-primary text-text text-sm bg-background">
			{!user
				? <LoginPage />
				: <UserContext value={{ user, dashboardSelected, setDashboardSelected }}>
					<Header />
					<MainPage />
					<Footer />
				</UserContext>
			}
		</div>
	)	
}