import { useContext } from 'react'
import AppContext from '../context'

export const useCart = () => {
  const { cartItems, setCartItems } = useContext(AppContext)

  const orderPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0)

  return { cartItems, orderPrice, setCartItems }
}
