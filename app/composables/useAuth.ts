export const useAuth = () => {
  const supabase = useSupabaseClient()

  const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) throw error
    return data
  }
  const signOut = async () => {
    await supabase.auth.signOut()
  }
  return { signIn, signOut }
}