export default function Main({ className = "", children }) {
	return (
		<main className={`${className} flex-1 p-4 md:mx-[30vw]`}>
			{ children }
		</main>
	)
}