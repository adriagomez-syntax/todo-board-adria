export default function Main({ little = true, className = "", children }) {
	return (
		<main className={`${className} ${little && "md:mx-[30vw]"} flex-1 h-full overflow-hidden`}>
			{ children }
		</main>
	)
}