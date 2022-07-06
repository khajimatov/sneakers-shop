import axios from 'axios'
import { useState, useContext } from 'react'

import Info from '../Info'
import { useCart } from '../../hooks/useCart'
import AppContext from '../../context'

import styles from './Drawer.module.scss'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

function Drawer({ onRemove, items = [], opened }) {
  const { setIsCartOpened } = useContext(AppContext)
  const [isOrderComplete, setIsOrderComplete] = useState(false)
  const [orderId, setOrderId] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const { cartItems, setCartItems, orderPrice } = useCart()

  const onClickOrder = async () => {
    try {
      setIsLoading(true)
      const {
        data,
      } = await axios.post(
        'https://611a826e5710ca00173a1a6e.mockapi.io/orders',
        { items: cartItems },
      )

      setOrderId(data.id)
      setIsOrderComplete(true)
      setCartItems([])

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i]
        await axios.delete(
          'https://611a826e5710ca00173a1a6e.mockapi.io/cart/' + item.id,
        )
        await delay(1000)
      }
    } catch (error) {
      alert('Cannot complete order')
    }
    setIsLoading(false)
  }

  return (
    <div className={`${styles.overlay} ${opened && styles.overlayVisible}`}>
      <div className={`${styles.drawer} d-flex flex-column`}>
        <div className="d-flex mt-30 justify-between align-center">
          <h2>Your cart [{cartItems.length}]</h2>
          <img
            onClick={() => setIsCartOpened(false)}
            className="cu-p"
            width={32}
            height={32}
            src="/img/remove-btn.svg"
            alt="Remove button"
          />
        </div>

        {items.length > 0 ? (
          <div className="flex d-flex flex-column">
            <div className={`${styles.items} flex`}>
              {items.map((obj) => (
                <div
                  key={obj.id}
                  className={`${styles.cartItem} d-flex justify-between align-center`}
                >
                  <img
                    className="sneakerImage"
                    width={90}
                    height={80}
                    src={obj.imageURL}
                    alt={obj.title}
                  />
                  <div>
                    <h4>{obj.title}</h4>
                    <b>${obj.price} USD</b>
                  </div>

                  <img
                    onClick={() => onRemove(obj.id)}
                    className={`${styles.removeBtn}`}
                    width={32}
                    height={32}
                    src="/img/remove-btn.svg"
                    alt="Remove Icon"
                  />
                </div>
              ))}
            </div>
            <div className={`${styles.cartTotalBlock} mb-30`}>
              <ul>
                <li className="d-flex mb-15">
                  <span>Tax fee (5%):</span>
                  <div></div>
                  <b>${(orderPrice / 100) * 5} USD</b>
                </li>
                <li className="d-flex">
                  <span>Total:</span>
                  <div></div>
                  <b>${orderPrice} USD</b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                onClick={onClickOrder}
                className={`${styles.button} mt-30 cu-p`}
              >
                Complete order
              </button>
            </div>
          </div>
        ) : (
          <Info
            buttonInclude
            title={
              isOrderComplete
                ? `Your order ${orderId} is complete🥳`
                : 'Your cart is empty'
            }
            image={
              isOrderComplete
                ? '/img/order-complete.png'
                : '/img/cart-empty.png'
            }
            text={
              isOrderComplete
                ? `Your order #${orderId} will soon be delivered`
                : 'Add at least one pair of sneakers to order.'
            }
          />
        )}
      </div>
    </div>
  )
}
export default Drawer
