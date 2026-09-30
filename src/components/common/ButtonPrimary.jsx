import Button from "./Button";

export default function ButtonPrimary({ type = "button", onClick, disabled = false, className = "", children }) {
	return (
		<Button
			className={`${className} p-2 bg-primary text-accent-3 rounded-md text-2xs hover:opacity-80`}
			type={ type }
			onClick={ onClick }
			disabled={ disabled }
		>
			{ children }
		</Button>
	)
}