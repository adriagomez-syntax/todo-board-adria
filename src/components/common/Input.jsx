import { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { FaXmark } from "react-icons/fa6"

export default function Input({ label = "", icon, value, onChange, name = "", type = "text", placeholder = "", readonly = false, disabled = false, required = false, ref, className = "", children }) {
	
	const [visibility, setVisibility] = useState(false)
	const [realType, setRealType] = useState(type)

	const Icon = icon

	function clearInput() {
		onChange("")
	}

	function toggleVisibility() {
		if (!visibility) {
			setRealType("text")
			setVisibility(true)
		} else { 
			setRealType("password")
			setVisibility(false)
		}
	}
	
	return (
		<label className="flex flex-col gap-1 text-2xs">
			<div className="flex justify-between">
				{ label }
				{ children }
			</div>
			<div className="flex-1 flex gap-2 items-center justify-between p-2 bg-background-dark rounded-md text-accent-3 text-xs">
				{Icon && <Icon />}
				<input
					className={`${className} inset-0 min-w-0 flex-1 text-2xs`}
					name={ name }
					value={ value }
					onChange={ (event) => onChange(event.target.value) }
					type={ realType }
					placeholder={ placeholder }
					readOnly={ readonly }
					disabled={ disabled }
					required={ required }
					ref={ ref }
				/>
				<div className="cursor-pointer">
					{type === "password"
						?  visibility
							? <FaEyeSlash onClick={ toggleVisibility } />
							: <FaEye onClick={ toggleVisibility } />
						: value && <FaXmark onClick={ clearInput } />
					}
				</div>
			</div>
		</label>
	)
}