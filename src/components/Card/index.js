import { useContext } from 'react'
import styles from './Card.module.scss'
import ContentLoader from 'react-content-loader'

import AppContext from '../../context'

function Card({ id, title, price, imageURL, onFavorite, onPlus, loading }) {
  const { isItemAdded, isItemFavorited } = useContext(AppContext)

  const onClickPlus = () => {
    onPlus({ id, title, price, imageURL })
  }
  const onClickFavorite = () => {
    onFavorite({ id, title, price, imageURL })
  }

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={200}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          {onFavorite && (
            <img
              onClick={onClickFavorite}
              className="pos-a cu-p"
              height={22}
              width={22}
              src={
                isItemFavorited(id)
                  ? '/img/favorited.png'
                  : '/img/favorite-btn.svg'
              }
              alt="Favorite Icon"
            />
          )}
          <img width={133} height={112} src={imageURL} alt={title} />
          <h4>{title}</h4>
          <div className={styles.cardinfo}>
            <div>
              <h6>PRICE:</h6>
              <b>${price} USD</b>
            </div>
            {onPlus && (
              <button onClick={() => onClickPlus()}>
                <img
                  src={
                    isItemAdded(id) ? '/img/plus-added.png' : '/img/plus.svg'
                  }
                  alt="Plus icon"
                />
              </button>
            )}
          </div>
        </>
      )}
    </div>
  )
}
export default Card
