import { useState, useEffect } from 'react'
import './index.scss'
import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

function App() {
  const [items, setItems] = useState([])
  const [isCartOpened, setIsCartOpened] = useState(false)

  useEffect(() => {
    fetch('https://611a826e5710ca00173a1a6e.mockapi.io/items')
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        setItems(json)
      })
  }, [])

  return (
    <div className="wrapper">
      {isCartOpened && <Drawer onClose={() => setIsCartOpened(false)} />}
      <Header onClickCart={() => setIsCartOpened(true)} />
      <div className="content">
        <div className="d-flex justify-between align-center">
          <h1>All sneakers</h1>
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
              autoComplete="off"
              type="text"
              placeholder="Search..."
              name="search"
              id="search"
            />
          </div>
        </div>

        <div className="sneakers">
          {items.map((obj) => (
            <Card title={obj.title} price={obj.price} imageURL={obj.imageURL} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
