import { Text, Title } from '../Typography'
import {
  ListItem,
  ListItemContent,
  ListItemHeader,
  ListPostContainer,
} from './styles'

export function ListPost() {
  const posts = [
    {
      id: '1',
      title: 'JavaScript data types and data structures',
      text: 'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in',
      createdAt: 'Há 1 dia',
    },
    {
      id: '2',
      title: 'JavaScript data types and data structures',
      text: 'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in',
      createdAt: 'Há 1 dia',
    },
    {
      id: '3',
      title: 'JavaScript data types and data structures',
      text: 'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in',
      createdAt: 'Há 1 dia',
    },
    {
      id: '4',
      title: 'JavaScript data types and data structures',
      text: 'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in. Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in',
      createdAt: 'Há 1 dia',
    },
    {
      id: '5',
      title: 'JavaScript data types and data structures',
      text: 'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in',
      createdAt: 'Há 1 dia',
    },
    {
      id: '6',
      title: 'JavaScript data types and data structures',
      text: 'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in',
      createdAt: 'Há 1 dia',
    },
  ]
  return (
    <ListPostContainer>
      {posts.map((postItem) => (
        <ListItem key={postItem.id}>
          <ListItemHeader>
            <Title size={'m'}>{postItem.title}</Title>
            <Text size={'s'} color={'span'}>
              {postItem.createdAt}
            </Text>
          </ListItemHeader>

          <ListItemContent>{postItem.text}</ListItemContent>
        </ListItem>
      ))}
    </ListPostContainer>
  )
}
