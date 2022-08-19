import { ReactNode, useCallback, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../services/api'

const environment = {
  VITE_GITHUB_OWNER: import.meta.env.VITE_GITHUB_OWNER,
  VITE_GITHUB_REPO: import.meta.env.VITE_GITHUB_REPO,
}

export interface IPost {
  id: number
  body: string
  html_url: string
  title: string
  created_at: string
  number: number
  comments: number
  user: {
    company: string
  }
}

interface ISearchIssueResponse {
  items: IPost[]
}

type PostsContextType = {
  post?: IPost
  posts: IPost[]
  searchPosts: (query?: string) => Promise<void>
  searchPostByNumber: (number: number | string) => Promise<void>
}

export const PostsContext = createContext({} as PostsContextType)

interface PostsProviderProps {
  children: ReactNode
}

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<IPost[]>([])
  const [post, setPost] = useState<IPost | undefined>(undefined)

  const searchPosts = useCallback(async (query: string = '') => {
    const owner = environment.VITE_GITHUB_OWNER
    const repo = environment.VITE_GITHUB_REPO
    const response = await api.get<ISearchIssueResponse>(`/search/issues`, {
      params: { q: `${query} repo:${owner}/${repo}` },
    })

    setPosts(response.data.items)
  }, [])

  const searchPostByNumber = useCallback(async (number: number | string) => {
    const owner = environment.VITE_GITHUB_OWNER
    const repo = environment.VITE_GITHUB_REPO
    const response = await api.get<IPost>(
      `repos/${owner}/${repo}/issues/${number}`,
    )
    setPost(response.data)
  }, [])

  return (
    <PostsContext.Provider
      value={{
        post,
        posts,
        searchPostByNumber,
        searchPosts,
      }}
    >
      {children}
    </PostsContext.Provider>
  )
}
