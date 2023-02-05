import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ListPostContainer = styled.ul`
  padding: 0 1rem;
  margin: 3rem auto 14.625rem;
  max-width: ${(props) => props.theme.screens.desktop};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
  gap: 2rem;
  width: 100%;

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const ListItem = styled.li`
  list-style: none;
`
export const ListItemLink = styled(Link)`
  text-decoration: none;

  padding: 2rem;
  background: ${(props) => props.theme.colors['base-post']};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  border: 2px solid transparent;
  transition: 0.5s;
  &:hover {
    border: 2px solid ${(props) => props.theme.colors['base-label']};
  }
`

export const ListItemHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;

  > h1 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  > p {
  }
`

export const ListItemContent = styled.p`
  color: ${(props) => props.theme.colors['base-text']};
  font-size: ${(props) => props.theme.textSizes['text-text-m']};
  line-height: 160%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  -webkit-box-orient: vertical;
  -ms-word-break: break-all;
  word-break: break-all;
`
