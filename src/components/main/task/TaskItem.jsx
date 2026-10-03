import { FaGripVertical, FaPen, FaTrash } from "react-icons/fa";
import Button from "../../common/Button";
import Card from "../../common/Card";

export default function TaskItem({ id, title, textDecoration }) {
	return (
		<Card 
			className="flex gap-2 justify-between bg-background-dark"
		>
			<div className="flex gap-2">
				<h1 className={`${textDecoration}`}>{ title }</h1>
				<Button className="text-2xs hover:opacity-50">
					<FaPen />
				</Button>
			</div>
			<div className="flex gap-2 text-2xs items-center">
				<Button className="hover:text-secondary">
					<FaTrash />
				</Button>
				<FaGripVertical className="cursor-move" />
			</div>
		</Card>
	)
}