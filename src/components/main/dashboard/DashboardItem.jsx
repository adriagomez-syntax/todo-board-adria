export default function DashboardItem({ dashboardSelected, setDashboardSelected, id, title, created_at }) {
	return (
		<li 
			className={`${id === dashboardSelected ? "bg-primary/40 border-l-2 border-accent-3" : "bg-background-dark cursor-pointer hover:opacity-80"} px-3 py-2  rounded-md`}
			onClick={() => setDashboardSelected(id)}
		>
			<div className="flex gap-2 justify-between items-center">
				<h1 className="font-secondary font-bold tracking-wider text-md truncate">
					{ title }
				</h1>
				{id === dashboardSelected && <div className="bg-accent-3 p-1 rounded-full"></div>}
			</div>
			<p className="flex gap-1 text-2xs">
				Erstellt: 
				<span className="font-bold">
					{ new Date(created_at).toLocaleDateString("de-De", { day: "2-digit", month: "2-digit", year: "numeric" }) }
				</span>
			</p>
		</li>
	)
}