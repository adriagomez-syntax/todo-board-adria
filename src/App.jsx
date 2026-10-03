import useUser from "./hooks/useUser";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import UserContext from "./context/UserContext"
import Modals from "./components/common/modal/Modals";

export default function App() {
	
	const user = useUser()

	return (
		<div className="flex flex-col h-screen font-primary text-text text-sm bg-background">
			<Modals>
				{!user
					? <LoginPage />
					: <UserContext value={{ user }}>
						<MainPage />
					</UserContext>
				}
			</Modals>
		</div>
	)	
}