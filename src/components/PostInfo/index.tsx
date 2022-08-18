import {
  ArrowLeft,
  ArrowSquareUpRight,
  Calendar,
  ChatText,
  GithubLogo,
} from 'phosphor-react'

import { Text, Title } from '../../components/Typography'
import { ExternalLink } from '../../components/ExternalLink'
import {
  PostInfoList,
  PostInfoListItem,
  PostContentHeader,
  PostInfoContainer,
  PostBackLink,
} from './styles'

export function PostInfo() {
  const urlGithub =
    'https://github.com/rocketseat-education/reactjs-github-blog-challenge/issues'
  return (
    <PostInfoContainer>
      <PostContentHeader>
        <PostBackLink to={'/'}>
          <ArrowLeft size={18} />
          Voltar
        </PostBackLink>
        <ExternalLink href={urlGithub}>
          <span>Ver no Github</span>
          <ArrowSquareUpRight size={18} />
        </ExternalLink>
      </PostContentHeader>

      <Title>JavaScript data types and data structures</Title>

      <PostInfoList>
        <PostInfoListItem>
          <GithubLogo size={18} />
          <Text color={'span'}>cameronwll</Text>
        </PostInfoListItem>
        <PostInfoListItem>
          <Calendar size={18} />
          <Text color={'span'}>Há 1 dia</Text>
        </PostInfoListItem>
        <PostInfoListItem>
          <ChatText size={18} />
          <Text color={'span'}>5 comentários</Text>
        </PostInfoListItem>
      </PostInfoList>
    </PostInfoContainer>
  )
}
