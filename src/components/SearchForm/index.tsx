import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { PostsContext } from '../../context/PostsContext'
import { useDebounce } from '../../hooks/useDebounce'
import { Text, Title } from '../Typography'
import {
  SearchFormContainer,
  SearchFormHeader,
  SearchFormWrapper,
} from './styles'

export function SearchForm() {
  const { searchPosts } = useContext(PostsContext)

  const [searchText, setSearchText] = useState<string>('')
  const debouncedValue = useDebounce<string>(searchText, 5000)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value)
  }

  useEffect(() => {
    searchPosts(searchText)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue])

  return (
    <SearchFormContainer>
      <SearchFormHeader>
        <Title size={'s'}>Publicações</Title>
        <Text size={'s'} color={'span'}>
          6 publicações
        </Text>
      </SearchFormHeader>
      <SearchFormWrapper>
        <input
          placeholder="Buscar conteúdo"
          value={searchText}
          onChange={handleChange}
        />
      </SearchFormWrapper>
    </SearchFormContainer>
  )
}
