import { useEffect, useState } from "react"
import { FaRegCheckCircle, FaRegCircle } from "react-icons/fa"

export default function PasswordSecurity({ setVerify, password, passwordRep }) {

	const [securityLevel, setSecurityLevel] = useState(0)
	const [lengthCheck, setLengthCheck] = useState(false)
	const [minusCheck, setMinusCheck] = useState(false)
	const [mayusCheck, setMayusCheck] = useState(false)
	const [numberCheck, setNumberCheck] = useState(false)
	const [specialCharCheck, setSpecialCharCheck] = useState(false)
	const [pwdEqualCheck, setPwdEqualCheck] = useState(false)

	const securityLevels = [
		{ min: 5, text: "Stark", bg_color: "bg-accent-2", text_color: "text-accent-2", linies: 3},
		{ min: 3, text: "Mittel", bg_color: "bg-primary", text_color: "text-primary", linies: 2},
		{ min: 1, text: "Schwach", bg_color: "bg-secondary", text_color: "text-secondary", linies: 1},
		{ min: 0, text: "Keine", bg_color: "bg-secondary", text_color: "text-secondary", linies: 0}
	]
	
	const securityLevelObj = securityLevels.find((level) => level.min <= securityLevel)
	const securityBars = []

	for (let i = 0; i < 3; i++) {
		if (i < securityLevelObj.linies) { securityBars.push(securityLevelObj.bg_color) }
		else { securityBars.push("bg-background") }
	}

	const securityReqs = [
		{ id: "length", check: lengthCheck, text: "Mindestens 8 Zeichen" },
		{ id: "minus", check: minusCheck, text: "Kleinbuchstaben" },
		{ id: "mayus", check: mayusCheck, text: "Großbuchstaben" },
		{ id: "number", check: numberCheck, text: "Mindestens eine Zahl" },
		{ id: "special", check: specialCharCheck, text: "Sondernzeichnen" },
		{ id: "password", check: pwdEqualCheck, text: "Passwort stimmt" }
	]

	useEffect(() => {

		async function check() {

			let points = 0;

			if (password.length >= 8) {
				setLengthCheck(true)
				points++
			} else { setLengthCheck(false) }

			if (/[a-z]/.test(password)) {
				setMinusCheck(true)
				points++
			} else { setMinusCheck(false) }

			if (/[A-Z]/.test(password)) {
				setMayusCheck(true)
				points++
			} else { setMayusCheck(false) }

			if (/[0-9]/.test(password)) {
				setNumberCheck(true)
				points++
			} else { setNumberCheck(false) }

			if (/[^a-zA-Z0-9\s]/.test(password)) {
				setSpecialCharCheck(true)
				points++
			} else { setSpecialCharCheck(false) }

			setSecurityLevel(points)
			
			if (password === passwordRep) {
				setPwdEqualCheck(true)
				points++
			} else { setPwdEqualCheck(false) }

			setVerify(points >= 6)
		}

		check()

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [password, passwordRep])
	
	return (
		<div className="flex flex-col gap-2 p-2 bg-background-dark rounded-md text-2xs">
			<div className="flex gap-2 justify-between pb-1 items-center border-b border-background">
				<div className="flex gap-1 items-center">
					<span className={`${securityLevelObj.bg_color} h-2 w-2 rounded-full`}></span>
					Passwort-Sicherheit: <span className={`${securityLevelObj.text_color}`}>{ securityLevelObj.text }</span>
				</div>
				<div className="flex gap-1">
					{securityBars.map((bar, index) => (
						<div 
							key={ index }
							className={`${bar} h-1 w-4 rounded-md`}
						></div>
					))}
				</div>
			</div>
			<div className="grid grid-cols-2 md:grid-cols-1 gap-2">
				{ securityReqs.map((req) => (
					<div 
						key={ req.id }
						className="flex gap-1 items-center"
					>
						{ req.check
							? <FaRegCheckCircle className="text-accent-2" />
							: <FaRegCircle />
						}
						<p>{ req.text }</p>
					</div>
				))}
			</div>
		</div>
	)
}