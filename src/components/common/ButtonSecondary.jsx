import Button from "./Button";

export default function ButtonSecondary({ type = "button", onClick, disabled = false, className = "", children }) {
	return (
		<Button
			className={`${className} p-2 bg-background-dark text-text rounded-md text-2xs hover:opacity-80`}
			type={ type }
			onClick={ onClick }
			disabled={ disabled }
		>
			{ children }
		</Button>
	)
}