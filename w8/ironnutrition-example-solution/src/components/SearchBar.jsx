import { Divider, Input } from 'antd'

const SearchBar = ({ searchQuery, setSearchQuery }) => {

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input
        value={searchQuery}
        type="text"
        onChange={(e) => setSearchQuery(e.target.value.toLocaleLowerCase())}
      />
    </>
  )
}

export default SearchBar