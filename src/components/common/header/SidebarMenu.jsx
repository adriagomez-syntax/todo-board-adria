export default function SidebarMenu({ open, setOpen, className = "", children }) {
	return (
		<div className={(open ? "visible opacity-100" : "invisible opacity-0") + " fixed inset-0 z-100 transition"}>
			<div className="absolute inset-0 bg-black/30" onClick={ () => setOpen(false) } />
			<div className={`${open ? "translate-x-0" : "-translate-x-full"} top-0 left-0 h-full min-w-40 absolute p-6 flex flex-col gap-4 transform transition-transform ease-in-out duration-300 bg-background`}>
				<div className={`${className} flex flex-col gap-6 h-full`}>
					{ children }
				</div>
			</div>
		</div>
	)
}