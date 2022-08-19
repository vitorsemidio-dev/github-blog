import {
  ArrowLeft,
  ArrowSquareUpRight,
  Calendar,
  ChatText,
  GithubLogo,
} from 'phosphor-react'

import { ExternalLink } from '../../../components/ExternalLink'
import { Text, Title } from '../../../components/Typography'
import { IPost } from '../../../context/PostsContext'
import { formatterTimeAgo } from '../../../utils/timeago'
import {
  PostBackLink,
  PostContentHeader,
  PostInfoContainer,
  PostInfoList,
  PostInfoListItem,
} from './styles'

interface PostInfoProps {
  post?: IPost
}

export function PostInfo({ post }: PostInfoProps) {
  if (!post) return <></>
  const timeAgo = formatterTimeAgo(post?.created_at)
  const quantityComments = post?.comments
  return (
    <PostInfoContainer>
      <PostContentHeader>
        <PostBackLink to={'/'}>
          <ArrowLeft size={18} />
          Voltar
        </PostBackLink>
        <ExternalLink href={post.html_url}>
          <span>Ver no Github</span>
          <ArrowSquareUpRight size={18} />
        </ExternalLink>
      </PostContentHeader>

      <Title>{post?.title}</Title>

      <PostInfoList>
        <PostInfoListItem>
          <GithubLogo size={18} />
          <Text color={'span'}>{post?.user?.login || '-'}</Text>
        </PostInfoListItem>
        <PostInfoListItem>
          <Calendar size={18} />
          <Text color={'span'}>{timeAgo}</Text>
        </PostInfoListItem>
        <PostInfoListItem>
          <ChatText size={18} />
          <Text color={'span'}>{quantityComments} comentário(s)</Text>
        </PostInfoListItem>
      </PostInfoList>
    </PostInfoContainer>
  )
}
