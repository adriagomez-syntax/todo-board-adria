export default function Footer() {
	return (
		<footer className="flex justify-between gap-2 p-4 bg-background-dark shadow-t text-2xs text-accent-3">
			© 2026 KlarTask. Alle Rechte vorbehalten.
			<div className="flex gap-1">
				<a href="#" className="hover:underline">Impressum</a>
				<a href="#" className="hover:underline">Datenschutz</a>
			</div>
		</footer>
	)
}