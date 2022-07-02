import Card from '../components/Card'

const Orders = () => {
  return (
    <>
      <div className="d-flex justify-between align-center">
        <h1>Your orders</h1>
      </div>

      <div className="sneakers">
        {[].map((item, index) => (
          <Card
          // key={index}
          // onFavorite={(obj) => onAddToFavorite(obj)}
          // title={item.title}
          // price={item.price}
          // imageURL={item.imageURL}
          // onPlus={(obj) => onAddToCart(obj)}
          // {...item}
          />
        ))}
      </div>
    </>
  )
}

export default Orders
