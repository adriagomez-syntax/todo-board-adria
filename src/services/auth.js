import { supabase } from "../lib/supabase"

export const providersOAuth = {
	Github: 'github',
	Discord: 'discord'
}

export async function register(email, password, user_name = "") {
	const { data, error} = await supabase.auth.signUp({ email, password, options: { data: { user_name } } })
	
	if (error) { throw new Error(error.message) }
	
	return data
}

export async function login(email, password) {
	const { data, error } = await supabase.auth.signInWithPassword({ email, password })

	if (error) { throw new Error(error.message) }

	return data
}

export async function loginOAuth(provider) {
	const { data, error } = await supabase.auth.signInWithOAuth({ provider: provider })

	if (error) { throw new Error(error.message) }

	return data
}

export async function logout() {
	const { data, error } = await supabase.auth.signOut()

	if (error) { throw new Error(error.message) }

	return data
}