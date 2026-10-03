import { supabase } from "../lib/supabase";

export async function getTasks(boardId) {
	const { data, error } = await supabase.from("tasks")
		.select("*")
		.eq("board_id", boardId)
		.order("created_at", { ascending: true })

	if (error) { throw new Error(error.message) }
	
	return data
}

export async function createTask(boardId, title, status = "todo") {
	const { data, error } = await supabase.from("tasks").insert({ board_id: boardId, title, status})

	if (error) { throw new Error(error.message) }
	
	return data
}

export async function updateTask({ id, title, status}) {
	const updates = {}
	if (title) { updates.title = title }
	if (status) { updates.status = status }
	
	const { data, error } = await supabase.from("tasks").update(updates).eq("id", id)

	if (error) { throw new Error(error.message) }
	
	return data
}

export async function deleteTask(id) {
	const { data, error } = await supabase.from("tasks").delete().eq("id", id)

	if (error) { throw new Error(error.message) }
	
	return data
}