import styled from 'styled-components'

export const ExternalLinkContainer = styled.a`
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
