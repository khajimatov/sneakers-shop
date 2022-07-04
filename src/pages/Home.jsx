import { useState, useContext } from 'react'

import AppContext from '../context'
import Card from '../components/Card'

const Home = ({ items, onAddToFavorite, isLoading }) => {
  const [searchValue, setSearchValue] = useState('')
  const { onAddToCart } = useContext(AppContext)

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()),
    )
    return (isLoading ? [...Array(4)] : filteredItems).map((item, index) => (
      <Card
        key={index}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        loading={isLoading}
        {...item}
      />
    ))
  }

  return (
    <>
      <div className="d-flex justify-between align-center">
        <h1>{searchValue ? `Results by: ${searchValue}` : 'All sneakers'}</h1>
        <div className="search-block align-center d-flex">
          <label htmlFor="search">
            <img
              width={16}
              height={16}
              src="/img/search.svg"
              alt="Search Icon"
            />
          </label>
          <input
            value={searchValue}
            onChange={onChangeSearchInput}
            autoComplete="off"
            type="text"
            placeholder="Search..."
            name="search"
            id="search"
          />
          {searchValue && (
            <img
              onClick={() => setSearchValue('')}
              className="cu-p"
              width={32}
              height={32}
              src="/img/remove-btn.svg"
              alt="Remove button"
            />
          )}
        </div>
      </div>

      <div className="sneakers">{renderItems()}</div>
    </>
  )
}

export default Home
