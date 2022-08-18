import { Cover } from '../../components/Cover'
import { ListPost } from '../../components/ListPost'
import { Profile } from '../../components/Profile'
import { SearchForm } from '../../components/SearchForm'

export function Blog() {
  return (
    <>
      <Cover />
      <Profile />
      <SearchForm />
      <ListPost />
    </>
  )
}
