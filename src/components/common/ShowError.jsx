import { FaExclamationTriangle } from "react-icons/fa";

export default function ShowError({ error }) {
	return (
		<div className="flex flex-col gap-2 justify-center items-center p-2 border border-secondary rounded-md">
			<div className="p-2 bg-primary/30 inset-shadow-xs rounded-full">
				<FaExclamationTriangle className="text-secondary text-lg" />
			</div>
			<h1 className="font-secondary font-bold text-lg text-secondary text-center">Ein Fehler ist aufgetreten</h1>
			<p className="text-xs font-light">Gründ: { error }</p>
		</div>
	)
}