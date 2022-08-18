import { ListPost } from '../../components/ListPost'
import { Profile } from '../../components/Profile'
import { SearchForm } from '../../components/SearchForm'

export function Blog() {
  return (
    <>
      <Profile />
      <SearchForm />
      <ListPost />
    </>
  )
}
