import { useState } from 'react'
import styles from './Card.module.scss'

function Card({ id, title, price, imageURL, onFavorite, onPlus, added }) {
  const [isAdded, setIsAdded] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  const onClickPlus = () => {
    onPlus({ id, title, price, imageURL })
    setIsAdded(!isAdded)
  }
  const onClickFavorite = () => {
    onFavorite({ id, title, price, imageURL })
    setIsFavorite(!isFavorite)
  }

  return (
    <div className={styles.card}>
      <img
        onClick={onClickFavorite}
        className="pos-a cu-p"
        height={22}
        width={22}
        src={isFavorite ? '/img/favorited.png' : '/img/favorite-btn.svg'}
        alt="Favorite Icon"
      />
      <img width={133} height={112} src={imageURL} alt={title} />
      <h4>{title}</h4>
      <div className={styles.cardinfo}>
        <div>
          <h6>PRICE:</h6>
          <b>${price} USD</b>
        </div>
        <button onClick={() => onClickPlus()}>
          <img
            src={added ? '/img/plus-added.png' : '/img/plus.svg'}
            alt="Plus icon"
          />
        </button>
      </div>
    </div>
  )
}
export default Card
