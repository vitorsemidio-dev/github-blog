import styled from 'styled-components'
import coverImg from '../../assets/cover-github-blog.png'

export const BackgroundCoverContainer = styled.div`
  width: 100%;
  padding: 4rem 0 8.375rem;
  background-image: url(${coverImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

export const CoverContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
