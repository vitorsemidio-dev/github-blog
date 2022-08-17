import {
  ArrowSquareUpRight,
  Buildings,
  GithubLogo,
  Users,
} from 'phosphor-react'
import { ExternalLink } from '../ExternalLink'
import { Text, Title } from '../Typography'
import {
  InfoProfileContainer,
  ProfileContainer,
  ProfileImageContainer,
  InfoProfileContainerHeader,
  InfoProfileContainerBody,
  InfoProfileContainerFooter,
  InfoItemContainer,
} from './styles'

export function Profile() {
  const urlAvatar = 'https://github.com/vitorsemidio-dev.png'
  const githubUrl = 'https://github.com/vitorsemidio-dev'
  return (
    <ProfileContainer>
      <ProfileImageContainer>
        <img src={urlAvatar} alt="" />
      </ProfileImageContainer>

      <InfoProfileContainer>
        <InfoProfileContainerHeader>
          <Title lineHeight={130} size={'l'}>
            Vitor Emídio
          </Title>

          <ExternalLink href={githubUrl}>
            <span>Github</span>

            <ArrowSquareUpRight size={18} />
          </ExternalLink>
        </InfoProfileContainerHeader>

        <InfoProfileContainerBody>
          <Text>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </Text>
        </InfoProfileContainerBody>

        <InfoProfileContainerFooter>
          <InfoItemContainer>
            <GithubLogo size={18} />
            <Text color={'subtitle'}>cameronwll</Text>
          </InfoItemContainer>
          <InfoItemContainer>
            <Buildings size={18} />
            <Text color={'subtitle'}>Rocketseat</Text>
          </InfoItemContainer>
          <InfoItemContainer>
            <Users size={18} />
            <Text color={'subtitle'}>32 seguidores</Text>
          </InfoItemContainer>
        </InfoProfileContainerFooter>
      </InfoProfileContainer>
    </ProfileContainer>
  )
}
