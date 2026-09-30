export default function Button({ type = "button", onClick, disabled = false, className = "", children }) {
	return (
		<button
			className={`${className} cursor-pointer active:transform active:scale-105 disabled:opacity-70 disabled:cursor-not-allowed`}
			type={ type }
			onClick={ onClick }
			disabled={ disabled }
		>
			{ children }
		</button>
	)
}