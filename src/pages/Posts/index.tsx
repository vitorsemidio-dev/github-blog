import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useContextSelector } from 'use-context-selector'
import { PostInfo } from '../../components/PostInfo'
import { PostMarkdownContent } from '../../components/PostMarkdownContent'
import { PostsContext } from '../../context/PostsContext'

export function Posts() {
  const { post, searchPostByNumber } = useContextSelector(
    PostsContext,
    (context) => {
      return {
        post: context.post,
        searchPostByNumber: context.searchPostByNumber,
      }
    },
  )
  const { number } = useParams()

  useEffect(() => {
    if (number) {
      searchPostByNumber(number)
    }
  }, [number, searchPostByNumber])

  return (
    <>
      <PostInfo post={post} />
      {!!post && <PostMarkdownContent content={post.body} />}
    </>
  )
}
