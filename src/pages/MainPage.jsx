import Main from "../components/common/Main";
import DashboardSection from "../components/main/dashboard/DashboardSection";

export default function MainPage() {
	return (
		<Main 
			className="flex gap-4"
			little={ false }
		>
			<DashboardSection className="hidden md:flex md:w-1/5 md:max-w-1/5" />
			<div className="flex-1">

			</div>
		</Main>
	)
}