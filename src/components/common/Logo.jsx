export default function Logo({ className = "" }) {
	return (
		<div className={`${className} overflow-hidden`}>
			<img 
				src="/logo.svg" 
				alt="KlarTask Logo" 
				className="max-h-full w-auto object-contain"
			/>
		</div>
	)
}