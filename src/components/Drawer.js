function Drawer(props) {
  return (
    <div className="overlay" onClick={props.onClickOutside}>
      <div className="drawer d-flex flex-column">
        <div className="d-flex mt-30 justify-between align-center">
          <h2>Your cart [1]</h2>
          <img
            onClick={props.onClose}
            className="cu-p"
            width={32}
            height={32}
            src="/img/remove-btn.svg"
            alt="Remove button"
          />
        </div>

        <div className="items flex">
          <div className="cartItem d-flex justify-between align-center">
            <img
              className="sneakerImage"
              width={90}
              height={80}
              src="/img/1.jpg"
              alt="Nike Blazer Mid Suede for Men"
            />
            <div>
              <h4>Nike Blazer Mid Suede for Men</h4>
              <b>$120 USD</b>
            </div>

            <img
              className="removeBtn"
              width={32}
              height={32}
              src="/img/remove-btn.svg"
              alt="Remove Icon"
            />
          </div>
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
          <button class="button mt-30 cu-p">Complete order</button>
        </div>
      </div>
    </div>
  )
}
export default Drawer
