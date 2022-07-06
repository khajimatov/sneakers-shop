import { useContext } from 'react'

import AppContext from '../context'
import Card from '../components/Card'
import Info from '../components/Info'

const Favorites = () => {
  const { favoriteItems, onAddToFavorite, onAddToCart } = useContext(AppContext)
  return (
    <>
      <div className="d-flex justify-between align-center">
        <h1>Your favorites</h1>
      </div>

      <div className="sneakers">
        {favoriteItems.length > 0 ? (
          favoriteItems.map((item, index) => (
            <Card
              key={index}
              onFavorite={(obj) => onAddToFavorite(obj)}
              title={item.title}
              price={item.price}
              imageURL={item.imageURL}
              onPlus={(obj) => onAddToCart(obj)}
              {...item}
            />
          ))
        ) : (
          <Info
            title="No Favorites"
            image="/img/no-favorites.png"
            text="Add sneakers to your favorites"
            buttonInclude={false}
          />
        )}
      </div>
    </>
  )
}

export default Favorites
