import { supabase } from "../lib/supabase";

export async function getBoards() {
	const { data, error } = await supabase
		.from("boards")
		.select("*")
		.order("created_at", { ascending: true })

	if (error) { throw new Error(error.message) }
	
	return data
}

export async function createBoard(title) {
	const { data, error } = await supabase
		.from("boards")
		.insert({ title })
		.select("id")
		.single()

	if (error) { throw new Error(error.message) }
	
	return data
}

export async function updateBoard(title, id) {
	const { data, error } = await supabase
		.from("boards")
		.update({ title })
		.eq("id", id)

	if (error) { throw new Error(error.message) }
	
	return data
}

export async function deleteBoard(id) {
	const { data, error } = await supabase
		.from("boards")
		.delete()
		.eq("id", id)

	if (error) { throw new Error(error.message) }
	
	return data
}