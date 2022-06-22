import { useState, useEffect } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'

import './index.scss'
import Header from './components/Header'
import Home from './pages/Home'
import Drawer from './components/Drawer'
import Favorites from './pages/Favorites'

function App() {
  const [isCartOpened, setIsCartOpened] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [favoriteItems, setFavoriteItems] = useState([])
  const [items, setItems] = useState([])

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
    axios
      .get('https://611a826e5710ca00173a1a6e.mockapi.io/favorites')
      .then((res) => {
        setFavoriteItems(res.data)
      })
  }, [])

  

  const onRemoveItem = (id) => {
    axios
      .delete(`https://611a826e5710ca00173a1a6e.mockapi.io/cart/${id}`)
      .then(setCartItems((prev) => prev.filter((item) => item.id !== id)))
  }

  const onAddToCart = async (obj) => {
    try {
      if (cartItems.find((cartObj) => cartObj.id === obj.id)) {
        axios.delete(
          `https://611a826e5710ca00173a1a6e.mockapi.io/cart/${obj.id}`,
        )
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
      if (favoriteItems.find((favObj) => favObj.id === obj.id)) {
        axios.delete(
          `https://611a826e5710ca00173a1a6e.mockapi.io/favorites/${obj.id}`,
        )
      } else {
        const { data } = await axios.post(
          'https://611a826e5710ca00173a1a6e.mockapi.io/favorites',
          obj,
        )
        setFavoriteItems((prev) => [...prev, data])
      }
    } catch (error) {
      alert('Cannot add to cart')
    }
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
        <Routes>
          <Route
            path="/"
            element={
              <Home
                items={items}
                onAddToFavorite={onAddToFavorite}
                onAddToCart={onAddToCart}
              />
            }
          />
          <Route
            path="favorites"
            element={
              <Favorites
                favoriteItems={favoriteItems}
                onAddToFavorite={onAddToFavorite}
                onAddToCart={onAddToCart}
              />
            }
          />
        </Routes>
      </div>
    </div>
  )
}

export default App
