import { createClient } from "@supabase/supabase-js"
import { env } from "./mockEnv"

const url = env.SUPABASE_URL
const anonKey = env.SUPABASE_ANON_KEY

export const supabase = createClient(url, anonKey)