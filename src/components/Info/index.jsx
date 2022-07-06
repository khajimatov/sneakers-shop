import { useContext } from 'react'

import styles from './Info.module.scss'
import AppContext from '../../context'

const Info = ({ title, text, image, buttonInclude }) => {
  const { setIsCartOpened } = useContext(AppContext)
  return (
    <>
      <div className="d-flex flex-column m-auto align-center">
        <img
          className={styles.img}
          src={image}
          alt="Info"
          width={150}
          height={150}
        />
        <h2>{title}</h2>
        <p>{text}</p>
        {buttonInclude && (
          <button onClick={() => setIsCartOpened(false)}>Go back</button>
        )}
      </div>
    </>
  )
}

export default Info
