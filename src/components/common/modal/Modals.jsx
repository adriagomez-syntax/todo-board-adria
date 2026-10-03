import ModalContext from "../../../context/ModalContext";
import useConfirm from "../../../hooks/modals/useConfirm";
import useError from "../../../hooks/modals/useError";
import ConfirmModal from "./ConfirmModal";
import ErrorModal from "./ErrorModal";

export default function Modals({ children }) {
	
	const { error, open, setOpen, showError } = useError()
	const [confirmTitle, confirmDesc, confirmCallback, confirmOpen, setConfirmOpen, showConfirm] = useConfirm()

	return (
		<ModalContext value={{ showError, showConfirm }}>
			{ children }
			<ConfirmModal 
				title={ confirmTitle } 
				description={ confirmDesc }
				callback={ confirmCallback }
				open={ confirmOpen }
				setOpen={ setConfirmOpen } 
			/>
			<ErrorModal error={ error } open={ open } setOpen={ setOpen } />
		</ModalContext>
	)
}