import { FaPlusCircle } from "react-icons/fa";
import TaskItem from "./TaskItem";
import ButtonSecondary from "../../common/ButtonSecondary";

export default function TaskList({ title, color, textDecoration, tasks }) {
	return (
		<div className="flex flex-col gap-4 bg-background-mid p-4 rounded-md">
			<div className="flex justify-between gap-2 items-center">
				<div className="flex gap-2 items-center">
					<div className={`${color} p-1 rounded-full`}></div>
					<h1 className="font-secondary">{ title }</h1>
				</div>
				<span className="font-bold bg-background-dark p-1 text-2xs rounded-md">{ tasks.length }</span>
			</div>
			{tasks.map(task => (
				<TaskItem
					key={ task.id }
					textDecoration={ textDecoration }
					{ ...task }
				/>
			))}
			<ButtonSecondary className="flex gap-1 justify-center items-center">
				<FaPlusCircle />
				<p>Aufgabe hier einfügen</p>
			</ButtonSecondary>
		</div>
	)
}