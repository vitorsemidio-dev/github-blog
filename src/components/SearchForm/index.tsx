import { Text, Title } from '../Typography'
import {
  SearchFormContainer,
  SearchFormHeader,
  SearchFormWrapper,
} from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <SearchFormHeader>
        <Title size={'s'}>Publicações</Title>
        <Text size={'s'} color={'span'}>
          6 publicações
        </Text>
      </SearchFormHeader>
      <SearchFormWrapper>
        <input placeholder="Buscar conteúdo" />
      </SearchFormWrapper>
    </SearchFormContainer>
  )
}
