import { useState } from 'react'
import './index.scss'
import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

const arr = [
  {
    name: 'Nike Blazer Mid Suede',
    price: 500,
    imageURL: '/img/sneakers/1.jpg',
  },
  {
    name: 'Nike Air Max 270',
    price: 399,
    imageURL: '/img/sneakers/2.jpg',
  },
  {
    name: 'Puma X Aka Boku Future Rider',
    price: 755,
    imageURL: '/img/sneakers/3.jpg',
  },
  {
    name: 'Under Armour Curry 8',
    price: 450,
    imageURL: '/img/sneakers/4.jpg',
  },
]

function App() {
  const [isCartOpened, setIsCartOpened] = useState(false)

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
          {arr.map((obj) => (
            <Card title={obj.name} price={obj.price} imageURL={obj.imageURL} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
