import { useContext } from "react";
import Card from "../../common/Card";
import LoginContext from "../../../context/LoginContext";
import Loader from "../../common/Loader"
import LoginType from "./LoginType";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import LoginThirdParty from "./LoginThirdParty";

export default function LoginCard() {
	
	const { authOption, loading } = useContext(LoginContext)
	
	return (
		<Card className="w-full flex flex-col gap-4">
			<LoginType />
			{ loading
				? <Loader />
				: authOption === 0
					? <LoginForm />
					: <RegisterForm />
			}
			<LoginThirdParty />
		</Card>
	)
}