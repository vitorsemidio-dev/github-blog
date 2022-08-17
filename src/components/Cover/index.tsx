import { LogoGithubBlog } from '../LogoGithubBlog'
import { BackgroundCoverContainer, CoverContent } from './styles'

export function Cover() {
  return (
    <BackgroundCoverContainer>
      <CoverContent>
        <LogoGithubBlog />
      </CoverContent>
    </BackgroundCoverContainer>
  )
}
