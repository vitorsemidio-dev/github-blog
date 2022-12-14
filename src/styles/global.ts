import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    ::-webkit-scrollbar {
      width: 0.45rem;
    }
    ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors['base-border']}
    }
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.blue};
      border-radius: 999px;
    }
  }
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.blue};
  }
  body {
    background-color: ${(props) => props.theme.colors['base-background']};
    color: ${(props) => props.theme.colors['base-text']};
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font: 400 1rem ${(props) => props.theme.fonts.regular}, sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`
