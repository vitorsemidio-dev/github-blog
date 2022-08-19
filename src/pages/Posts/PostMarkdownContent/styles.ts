import styled from 'styled-components'

export const PostContentContainer = styled.section`
  width: 100%;
  max-width: ${(props) => props.theme.screens.desktop};
  margin: 0 auto 8rem;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  img {
    width: 100%;
  }
  h1,
  h2,
  h3 {
    color: ${({ theme }) => theme.colors.blue};
  }
  ul {
    list-style: inherit;
    padding-left: 1.5rem;
  }
  pre {
    background: ${({ theme }) => theme.colors['base-post']};
    padding: 1rem;
    > div {
      background: none !important;
      padding: 0 !important;
      margin: 0 !important;
      code {
        font-family: Nunito, monospace !important;
        line-height: 160% !important;
      }
    }
  }
`
