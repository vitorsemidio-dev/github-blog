import styled from 'styled-components'
export const SearchFormContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: ${(props) => props.theme.screens.desktop};
  margin-top: 4.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const SearchFormHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SearchFormWrapper = styled.form`
  input {
    width: 100%;
    color: ${(props) => props.theme.colors['base-text']};
    padding: 12px 16px;
    background: ${(props) => props.theme.colors['base-input']};

    border: 1px solid ${(props) => props.theme.colors['base-border']};
    border-radius: 6px;

    &::placeholder {
      color: ${(props) => props.theme.colors['base-label']};
    }
  }
`
