import { useState, useEffect } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import AppContext from './context'

import './index.scss'
import Header from './components/Header'
import Home from './pages/Home'
import Drawer from './components/Drawer'
import Favorites from './pages/Favorites'
import Orders from './pages/Orders'

function App() {
  const [isCartOpened, setIsCartOpened] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [favoriteItems, setFavoriteItems] = useState([])
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const [
          cartResponse,
          favoritesResponse,
          itemsResponse,
        ] = await Promise.all([
          axios.get('https://611a826e5710ca00173a1a6e.mockapi.io/cart'),
          axios.get('https://611a826e5710ca00173a1a6e.mockapi.io/favorites'),
          axios.get('https://611a826e5710ca00173a1a6e.mockapi.io/items'),
        ])

        setIsLoading(false)
        setCartItems(cartResponse.data)
        setFavoriteItems(favoritesResponse.data)
        setItems(itemsResponse.data)
      } catch (error) {
        alert('Cannot load data')
      }
    }
    fetchData()
  }, [])

  const onRemoveItem = (id) => {
    axios
      .delete(`https://611a826e5710ca00173a1a6e.mockapi.io/cart/${id}`)
      .then(setCartItems((prev) => prev.filter((item) => item.id !== id)))
  }

  const onAddToCart = async (obj) => {
    try {
      if (cartItems.find((cartObj) => Number(cartObj.id) === Number(obj.id))) {
        axios.delete(
          `https://611a826e5710ca00173a1a6e.mockapi.io/cart/${obj.id}`,
        )
        setCartItems((prev) => prev.filter((item) => item.id !== obj.id))
      } else {
        const { data } = await axios.post(
          'https://611a826e5710ca00173a1a6e.mockapi.io/cart',
          obj,
        )
        setCartItems((prev) => [...prev, data])
      }
    } catch (error) {
      alert('Cannot add to cart')
    }
  }

  const onAddToFavorite = async (obj) => {
    try {
      if (
        favoriteItems.find((favObj) => Number(favObj.id) === Number(obj.id))
      ) {
        axios.delete(
          `https://611a826e5710ca00173a1a6e.mockapi.io/favorites/${obj.id}`,
        )
        setFavoriteItems((prev) => prev.filter((item) => item.id !== obj.id))
      } else {
        const { data } = await axios.post(
          'https://611a826e5710ca00173a1a6e.mockapi.io/favorites',
          obj,
        )
        setFavoriteItems((prev) => [...prev, data])
      }
    } catch (error) {
      alert('Cannot add to Favorite')
    }
  }

  const isItemAdded = (id) => {
    return cartItems.find((obj) => Number(obj.id) === Number(id))
  }

  const isItemFavorited = (id) => {
    return favoriteItems.find((obj) => Number(obj.id) === Number(id))
  }

  return (
    <div className="wrapper">
      <AppContext.Provider
        value={{
          items,
          favoriteItems,
          cartItems,
          isItemAdded,
          isItemFavorited,
          onAddToFavorite,
          onAddToCart,
          setIsCartOpened,
          setCartItems,
        }}
      >
        <Drawer
          onRemove={onRemoveItem}
          items={cartItems}
          opened={isCartOpened}
        />
        <Header onClickCart={() => setIsCartOpened(true)} />
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  items={items}
                  onAddToFavorite={onAddToFavorite}
                  onAddToCart={onAddToCart}
                  cartItems={cartItems}
                  isLoading={isLoading}
                />
              }
            />
            <Route
              path="favorites"
              element={
                <Favorites
                  onAddToFavorite={onAddToFavorite}
                  onAddToCart={onAddToCart}
                />
              }
            />
            <Route path="orders" element={<Orders />} />
          </Routes>
        </div>
      </AppContext.Provider>
    </div>
  )
}

export default App
