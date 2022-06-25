import React from 'react'
import { useState } from 'react'
import Card from '../components/Card'

const Home = ({ items, onAddToFavorite, onAddToCart, cartItems }) => {
  const [searchValue, setSearchValue] = useState('')

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
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

      <div className="sneakers">
        {items
          .filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase()),
          )
          .map((item) => (
            <Card
              key={item.id}
              onFavorite={(obj) => onAddToFavorite(obj)}
              title={item.title}
              price={item.price}
              imageURL={item.imageURL}
              onPlus={(obj) => onAddToCart(obj)}
              added={cartItems.some((obj) => obj.id === item.id) ? true : false}
              {...item}
            />
          ))}
      </div>
    </>
  )
}

export default Home
