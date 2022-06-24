function Drawer({ onRemove, onClose, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer d-flex flex-column">
        <div className="d-flex mt-30 justify-between align-center">
          <h2>Your cart [1]</h2>
          <img
            onClick={onClose}
            className="cu-p"
            width={32}
            height={32}
            src="/img/remove-btn.svg"
            alt="Remove button"
          />
        </div>

        {items.length > 0 ? (
          <div>
            <div className="items flex">
              {items.map((obj) => (
                <div key={obj.id} className="cartItem d-flex justify-between align-center">
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
              <button className="button mt-30 cu-p">Complete order</button>
            </div>
          </div>
        ) : (
          <h1>No items in Cart</h1>
        )}
      </div>
    </div>
  )
}
export default Drawer
