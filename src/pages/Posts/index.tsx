import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PostInfo } from '../../components/PostInfo'
import { PostMarkdownContent } from '../../components/PostMarkdownContent'
import { PostsContext } from '../../context/PostsContext'

export function Posts() {
  const { post, searchPostByNumber } = useContext(PostsContext)
  const { number } = useParams()

  useEffect(() => {
    if (number) {
      searchPostByNumber(number)
    }
  }, [number, searchPostByNumber])

  return (
    <>
      <PostInfo />
      {!!post && <PostMarkdownContent content={post.body} />}
    </>
  )
}
