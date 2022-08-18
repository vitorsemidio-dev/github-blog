import { PostInfo } from '../../components/PostInfo'
import { useParams } from 'react-router-dom'
import { PostMarkdownContent } from '../../components/PostMarkdownContent'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'

export function Posts() {
  const [content, setContent] = useState('')
  const { number } = useParams()

  useEffect(() => {
    const loadPost = async () => {
      const owner = 'rocketseat-education'
      const repo = 'reactjs-github-blog-challenge'
      const url = `/repos/${owner}/${repo}/issues/${number}`
      const response = await api.get(url)

      setContent(response.data.body as string)
    }

    loadPost()
  }, [number])
  return (
    <>
      <PostInfo />
      {content && <PostMarkdownContent content={content} />}
    </>
  )
}
