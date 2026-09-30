export default function Logo({ className = "" }) {
	return (
		<div className={`${className} overflow-hidden`}>
			<img 
				src="/logo.svg" 
				alt="KlarTask Logo" 
				className="h-15 object-contain"
			/>
		</div>
	)
}