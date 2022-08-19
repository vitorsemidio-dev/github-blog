import { useEffect, useState } from 'react'
import { User } from '../context/PostsContext'
import { api } from '../services/api'

const environment = {
  VITE_GITHUB_OWNER: import.meta.env.VITE_GITHUB_OWNER,
}

export function useProfile() {
  const [profile, setProfile] = useState<User | null>(null)

  useEffect(() => {
    const loadProfile = async () => {
      const owner = environment.VITE_GITHUB_OWNER
      const response = await api.get<User>(`/users/${owner}`)
      setProfile(response.data)
    }

    loadProfile()
  }, [])

  return {
    profile,
    setProfile,
  }
}
