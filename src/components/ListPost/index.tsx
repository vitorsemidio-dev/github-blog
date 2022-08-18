import { useContext, useMemo } from 'react'
import { PostsContext } from '../../context/PostsContext'
import { formatterTimeAgo } from '../../utils/timeago'

import { Text, Title } from '../Typography'
import {
  ListItem,
  ListItemContent,
  ListItemHeader,
  ListItemLink,
  ListPostContainer,
} from './styles'

export function ListPost() {
  const { posts: postsSource } = useContext(PostsContext)
  const posts = useMemo(() => {
    return postsSource.map((postSourceItem) => ({
      ...postSourceItem,
      created_at: formatterTimeAgo(postSourceItem.created_at),
    }))
  }, [postsSource])

  return (
    <ListPostContainer>
      {posts.map((postItem) => (
        <ListItem key={postItem.id}>
          <ListItemLink to={`posts/${postItem.number}`}>
            <ListItemHeader>
              <Title size={'m'}>{postItem.title}</Title>
              <Text size={'s'} color={'span'}>
                {postItem.created_at}
              </Text>
            </ListItemHeader>

            <ListItemContent>{postItem.body}</ListItemContent>
          </ListItemLink>
        </ListItem>
      ))}
    </ListPostContainer>
  )
}
