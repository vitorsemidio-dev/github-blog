import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { formatterTimeAgo } from '../../utils/timeago'

import { Text, Title } from '../Typography'
import {
  ListItem,
  ListItemContent,
  ListItemHeader,
  ListItemLink,
  ListPostContainer,
} from './styles'

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

export function ListPost() {
  const q = 'Boas'
  const username = 'rocketseat-education'
  const repo = 'reactjs-github-blog-challenge'
  const [posts, setPosts] = useState<IPost[]>([])

  useEffect(() => {
    const loadPost = async () => {
      const response = await api.get<ISearchIssueResponse>('/search/issues', {
        params: { q: `${q} repo:${username}/${repo}` },
      })
      setPosts(
        response.data.items.map((item) => ({
          ...item,
          created_at: formatterTimeAgo(item.created_at),
        })),
      )
    }

    loadPost()
  }, [])

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
