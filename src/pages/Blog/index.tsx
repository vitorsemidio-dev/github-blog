import { ListPost } from './ListPost'
import { Profile } from './Profile'
import { SearchForm } from './SearchForm'

export function BlogPage() {
  return (
    <>
      <Profile />
      <SearchForm />
      <ListPost />
    </>
  )
}
