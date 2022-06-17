import './index.scss'
import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
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
          <Card />
          <Card />
          <Card />

          <Card />
        </div>
      </div>
    </div>
  )
}

export default App
