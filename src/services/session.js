import { supabase } from "../lib/supabase";

export async function getSession() {
	const { data } = await supabase.auth.getSession()

	return data.session?.user ?? null
}

export function subscribeSession(callback) {
	const { data } = supabase.auth.onAuthStateChange((event, session) => {
		callback(session?.user ?? null)
	})

	return data
}