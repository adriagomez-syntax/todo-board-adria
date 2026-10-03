import Modal from "./Modal";
import ShowError from "../ShowError";

export default function ErrorModal({ error, open, setOpen }) {
	return (
		<Modal open={ open } setOpen={ setOpen }>
			<ShowError error={ error } />
		</Modal>
	)
}