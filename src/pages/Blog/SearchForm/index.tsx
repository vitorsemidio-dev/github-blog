import { ChangeEvent, useEffect, useMemo, useState } from 'react'
import { useContextSelector } from 'use-context-selector'
import { Text, Title } from '../../../components/Typography'
import { PostsContext } from '../../../context/PostsContext'
import { useDebounce } from '../../../hooks/useDebounce'
import {
  SearchFormContainer,
  SearchFormHeader,
  SearchFormWrapper,
} from './styles'

export function SearchForm() {
  const { posts, searchPosts } = useContextSelector(PostsContext, (context) => {
    return {
      posts: context.posts,
      searchPosts: context.searchPosts,
    }
  })

  const quantityPostText = useMemo(() => {
    const quantity = posts.length
    const text = quantity > 1 ? 'publicações' : 'publicação'
    return `${quantity} ${text}`
  }, [posts])

  const [searchText, setSearchText] = useState<string>('')
  const debouncedValue = useDebounce<string>(searchText, 500)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value)
  }

  useEffect(() => {
    searchPosts(searchText)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue])

  return (
    <SearchFormContainer onSubmit={(e) => e.preventDefault()}>
      <SearchFormHeader>
        <Title size={'s'}>Publicações</Title>
        <Text size={'s'} color={'span'}>
          {quantityPostText}
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
