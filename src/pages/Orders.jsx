import { useState, useEffect } from 'react'
import axios from 'axios'

import Card from '../components/Card'

const Orders = () => {
  const [orders, setOrders] = useState([])

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      try {
        const { data } = await axios.get(
          'https://611a826e5710ca00173a1a6e.mockapi.io/orders',
        )
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []))
        setIsLoading(false)
      } catch (error) {
        alert('Cannot get orders')
      }
    })()
  }, [])

  return (
    <>
      <div className="d-flex justify-between align-center">
        <h1>Your orders</h1>
      </div>

      <div className="sneakers">
        {(isLoading ? [...Array(4)] : orders).map((item, index) => (
          <Card key={index} {...item} loading={isLoading} />
        ))}
      </div>
    </>
  )
}

export default Orders
