export default function Logo({ className = "" }) {
	return (
		<div className={`${className} overflow-hidden flex-1 h-full flex`}>
			<img 
				src="/logo.svg" 
				alt="KlarTask Logo" 
				className="flex-1"
			/>
		</div>
	)
}