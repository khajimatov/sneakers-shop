import React from 'react'

import Card from '../components/Card'

const Favorites = ({ favoriteItems, onAddToFavorite, onAddToCart }) => {
  return (
    <>
      <div className="d-flex justify-between align-center">
        <h1>Your favorite sneakers</h1>
      </div>

      <div className="sneakers">
        {favoriteItems.map((item) => (
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
    </>
  )
}

export default Favorites
