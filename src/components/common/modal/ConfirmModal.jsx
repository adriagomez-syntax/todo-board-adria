import ButtonPrimary from "../ButtonPrimary";
import ButtonSecondary from "../ButtonSecondary";
import Modal from "./Modal";

export default function ConfirmModal({ open, setOpen, callback, title, description }) {
	
	function onAccept() {
		callback()
		setOpen(false)
	}
	
	return (
		<Modal 
			className="gap-4"
			open={ open } 
			setOpen={ setOpen }
		>
			<div className="flex flex-col gap-2">
				<h1 className="font-secondary font-bold text-lg">{ title }</h1>
				<div className="text-2xs">{ description }</div>
			</div>
			<div className="flex justify-between gap-2 w-full">
				<ButtonPrimary 
					className="flex-1"
					onClick={ () => onAccept() }
				>
					Accept
				</ButtonPrimary>
				<ButtonSecondary 
					className="flex-1"
					onClick={ () => setOpen(false) }
				>
					Cancel
				</ButtonSecondary>
			</div>
		</Modal>
	)
}