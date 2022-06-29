import { useContext } from 'react'
import AppContext from '../context'
import Card from '../components/Card'

const Favorites = () => {
  const { favoriteItems, onAddToFavorite, onAddToCart } = useContext(AppContext)
  return (
    <>
      <div className="d-flex justify-between align-center">
        <h1>Your favorite sneakers</h1>
      </div>

      <div className="sneakers">
        {favoriteItems.map((item, index) => (
          <Card
            key={index}
            onFavorite={(obj) => onAddToFavorite(obj)}
            title={item.title}
            price={item.price}
            imageURL={item.imageURL}
            onPlus={(obj) => onAddToCart(obj)}
            {...item}
          />
        ))}
      </div>
    </>
  )
}

export default Favorites
