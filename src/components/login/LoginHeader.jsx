import Logo from "../common/Logo";

export default function LoginHeader() {
	return (
		<div className="flex flex-col gap-1">
			<Logo />
			<p className="text-accent-3">Aufgabenverwaltung & Fokus</p>
		</div>
	)
}