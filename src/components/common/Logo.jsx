export default function Logo({ className = "" }) {
	return (
		<div className={`${className} overflow-hidden h-full`}>
			<img 
				src="/logo.svg" 
				alt="KlarTask Logo" 
				className="h-full w-auto"
			/>
		</div>
	)
}