import axios from 'axios'
import { useContext, useState } from 'react'

import AppContext from '../context'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

function Drawer({ onRemove, items = [] }) {
  const { setIsCartOpened, setCartItems, cartItems } = useContext(AppContext)
  const [isOrderComplete, setIsOrderComplete] = useState(false)
  const [orderId, setOrderId] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

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
    <div className="overlay">
      <div className="drawer d-flex flex-column">
        <div className="d-flex mt-30 justify-between align-center">
          <h2>Your cart [1]</h2>
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
            <div className="items flex">
              {items.map((obj) => (
                <div
                  key={obj.id}
                  className="cartItem d-flex justify-between align-center"
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
                    className="removeBtn"
                    width={32}
                    height={32}
                    src="/img/remove-btn.svg"
                    alt="Remove Icon"
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock mb-30">
              <ul>
                <li className="d-flex mb-15">
                  <span>Tax fee (5%):</span>
                  <div></div>
                  <b>$24 USD</b>
                </li>
                <li className="d-flex">
                  <span>Total:</span>
                  <div></div>
                  <b>$144 USD</b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                onClick={onClickOrder}
                className="button mt-30 cu-p"
              >
                Complete order
              </button>
            </div>
          </div>
        ) : (
          <>
            <h1>
              {isOrderComplete
                ? `Your Order ${orderId} Completed`
                : 'No items in Cart'}
            </h1>
            <button onClick={() => setIsCartOpened(false)}>Go back</button>
          </>
        )}
      </div>
    </div>
  )
}
export default Drawer
