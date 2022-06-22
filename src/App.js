import { useState, useEffect } from 'react'
import axios from 'axios'
import './index.scss'
import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

function App() {
  const [items, setItems] = useState([])
  const [favoriteItems, setFavoriteItems] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [cartItems, setCartItems] = useState([])
  const [isCartOpened, setIsCartOpened] = useState(false)

  useEffect(() => {
    axios
      .get('https://611a826e5710ca00173a1a6e.mockapi.io/items')
      .then((res) => {
        setItems(res.data)
      })
    axios
      .get('https://611a826e5710ca00173a1a6e.mockapi.io/cart')
      .then((res) => {
        setCartItems(res.data)
      })
  }, [])

  const onAddToCart = (obj) => {
    axios
      .post('https://611a826e5710ca00173a1a6e.mockapi.io/cart', obj)
      .then(setCartItems((prev) => [...prev, obj]))
  }

  const onAddToFavorite = (obj) => {
    axios
      .post('https://611a826e5710ca00173a1a6e.mockapi.io/favorites', obj)
      .then(setFavoriteItems((prev) => [...prev, obj]))
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  const onRemoveItem = (id) => {
    axios
      .delete(`https://611a826e5710ca00173a1a6e.mockapi.io/cart/${id}`)
      .then(setCartItems((prev) => prev.filter((item) => item.id !== id)))
  }

  return (
    <div className="wrapper">
      {isCartOpened && (
        <Drawer
          onRemove={onRemoveItem}
          items={cartItems}
          onClose={() => setIsCartOpened(false)}
        />
      )}
      <Header onClickCart={() => setIsCartOpened(true)} />
      <div className="content">
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
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default App
