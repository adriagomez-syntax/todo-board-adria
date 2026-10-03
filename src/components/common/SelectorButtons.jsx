import Button from "./Button";

export default function SelectorButtons({ label, options, selected, setSelected }) {
	return (
		<div className="flex flex-col gap-1 text-2xs">
			<p>{ label }</p>
			<div className="flex-1 flex gap-2 items-center justify-between">
				{options.map(option => (
					<Button
						key={ option.value }
						className={`${selected === option.value ? "border border-accent-3 text-accent-3 bg-secondary" : "bg-background-dark"} text-2xs rounded-md p-2`}
						onClick={ () => setSelected(option.value) }
					>
						{ option.text }
					</Button>
				))}
			</div>
		</div>
	)
}