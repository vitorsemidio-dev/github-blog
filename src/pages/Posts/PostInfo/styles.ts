import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PostInfoContainer = styled.div`
  margin: 0 auto;
  margin-top: -5.5rem;

  width: ${(props) => props.theme.screens.desktop};
  background: ${(props) => props.theme.colors['base-profile']};
  padding: 2rem 2.5rem;
  border-radius: 10px;
`

export const PostContentHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;
`

export const PostInfoList = styled.ul`
  display: flex;
  gap: 1.5rem;
  margin-top: 0.5rem;
`

export const PostBackLink = styled(Link)`
  font-family: ${(props) => props.theme.fonts.regular};
  font-style: normal;
  font-weight: 700;
  font-size: ${(props) => props.theme.textSizes['components-link']};
  line-height: 160%;

  text-transform: uppercase;

  color: ${(props) => props.theme.colors.blue};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

export const PostInfoListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
