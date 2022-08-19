import {
  ArrowSquareUpRight,
  Buildings,
  GithubLogo,
  Users,
} from 'phosphor-react'
import { useEffect, useState } from 'react'
import { ExternalLink } from '../../../components/ExternalLink'
import { Text, Title } from '../../../components/Typography'
import { api } from '../../../services/api'
import {
  InfoItemContainer,
  InfoProfileContainer,
  InfoProfileContainerBody,
  InfoProfileContainerFooter,
  InfoProfileContainerHeader,
  ProfileContainer,
  ProfileImageContainer,
} from './styles'

const environment = {
  VITE_GITHUB_OWNER: import.meta.env.VITE_GITHUB_OWNER,
}

type ProfileType = {
  login: string
  id: number
  avatar_url: string
  url: string
  html_url: string
  type: string
  name: string
  company: string
  location: string
  email: string
  bio: string
  public_repos: number
  public_gists: number
  followers: number
  following: number
}

export function Profile() {
  const [profile, setProfile] = useState<ProfileType | null>(null)
  useEffect(() => {
    const loadProfile = async () => {
      const owner = environment.VITE_GITHUB_OWNER
      const response = await api.get<ProfileType>(`/users/${owner}`)
      setProfile(response.data)
    }

    loadProfile()
  }, [])

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
