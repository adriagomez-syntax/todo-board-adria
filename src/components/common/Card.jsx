export default function Card({ className = "", children }) {
	return (
		<div className={`${className} bg-background-mid shadow-background-dark shadow-md p-4 md:p-8 rounded-md`}>
			{ children }
		</div>
	)
}