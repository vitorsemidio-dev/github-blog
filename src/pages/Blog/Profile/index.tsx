import {
  ArrowSquareUpRight,
  Buildings,
  GithubLogo,
  Users,
} from 'phosphor-react'
import { ExternalLink } from '../../../components/ExternalLink'
import { Text, Title } from '../../../components/Typography'
import { useProfile } from '../../../hooks/useProfile'
import {
  InfoItemContainer,
  InfoProfileContainer,
  InfoProfileContainerBody,
  InfoProfileContainerFooter,
  InfoProfileContainerHeader,
  ProfileContainer,
  ProfileImageContainer,
} from './styles'

export function Profile() {
  const { profile } = useProfile()

  if (!profile) return <></>
  return (
    <ProfileContainer>
      <ProfileImageContainer>
        <img src={profile.avatar_url} alt="" />
      </ProfileImageContainer>

      <InfoProfileContainer>
        <InfoProfileContainerHeader>
          <Title lineHeight={130} size={'l'}>
            {profile.name}
          </Title>

          <ExternalLink href={profile.html_url}>
            <span>Github</span>
            <ArrowSquareUpRight size={18} />
          </ExternalLink>
        </InfoProfileContainerHeader>

        <InfoProfileContainerBody>
          <Text>{profile.bio}</Text>
        </InfoProfileContainerBody>

        <InfoProfileContainerFooter>
          <InfoItemContainer>
            <GithubLogo size={18} />
            <Text color={'subtitle'}>{profile.login}</Text>
          </InfoItemContainer>

          {profile.company && (
            <InfoItemContainer>
              <Buildings size={18} />
              <Text color={'subtitle'}>{profile.company}</Text>
            </InfoItemContainer>
          )}
          <InfoItemContainer>
            <Users size={18} />
            <Text color={'subtitle'}>{profile.followers} seguidor(es)</Text>
          </InfoItemContainer>
        </InfoProfileContainerFooter>
      </InfoProfileContainer>
    </ProfileContainer>
  )
}
