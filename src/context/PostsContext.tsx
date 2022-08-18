import {
  ReactNode,
  useCallback,
  useEffect,
  useState,
  createContext,
} from 'react'
// import { createContext } from 'use-context-selector'
import { api } from '../services/api'

interface IPost {
  id: number
  body: string
  html_url: string
  title: string
  created_at: string
  number: number
}

interface ISearchIssueResponse {
  items: IPost[]
}

type PostsContextType = {
  post: IPost
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
  const [post, setPost] = useState<IPost>({} as IPost)

  const searchPosts = useCallback(async (query: string = '') => {
    const username = 'rocketseat-education'
    const repo = 'reactjs-github-blog-challenge'
    const response = await api.get<ISearchIssueResponse>(`/search/issues`, {
      params: { q: `${query} repo:${username}/${repo}` },
    })

    setPosts(response.data.items)
  }, [])

  const searchPostByNumber = useCallback(async (number: number | string) => {
    const owner = 'rocketseat-education'
    const repo = 'reactjs-github-blog-challenge'
    const response = await api.get<IPost>(
      `repos/${owner}/${repo}/issues/${number}`,
    )
    setPost(response.data)
  }, [])

  useEffect(() => {
    searchPosts()
  }, [searchPosts])

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
