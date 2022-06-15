import './index.scss'

function App() {
  return (
    <div className="wrapper">
      <div className="overlay">
        <div className="drawer">
          <h2 className="mt-30">Your cart</h2>

          <div className="items">
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
          <div className="cartTotalBlock">
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
          </div>
        </div>
      </div>
      <header>
        <div className="headerLeft">
          <img
            width={40}
            height={40}
            src="/img/logo.png"
            alt="Company Logo"
          ></img>
          <div>
            <h3>REACT SNEAKERS</h3>
            <p>Best sneakers shop</p>
          </div>
        </div>
        <ul>
          <li>
            <img width={20} height={20} src="/img/group.svg" alt="Group"></img>
            <span>$1205 USD.</span>
          </li>
          <li>
            <img
              width={20}
              height={20}
              src="/img/favorite.svg"
              alt="Group"
            ></img>
          </li>
          <li>
            <img width={20} height={20} src="/img/union.svg" alt="Group"></img>
          </li>
        </ul>
      </header>
      <div className="content">
        <div className="d-flex justify-between align-center">
          <h1>All sneakers</h1>
          <div className="search-block align-center d-flex">
            <label htmlFor="search">
              <img
                width={16}
                height={16}
                src="/img/search.svg"
                alt="Search Icon"
              />
            </label>
            <input
              autoComplete="off"
              type="text"
              placeholder="Search..."
              name="search"
              id="search"
            />
          </div>
        </div>

        <div className="sneakers">
          <div className="card">
            <img
              className="pos-a cu-p"
              height={22}
              width={22}
              src="/img/favorite-btn.svg"
              alt="Favorite Icon"
            />
            <img
              width={133}
              height={112}
              src="/img/11.jpg"
              alt="Nike Blazer Mid Suede for Men"
            />
            <h4>Nike Blazer Mid Suede for Men</h4>
            <div className="cardinfo">
              <div>
                <h6>PRICE:</h6>
                <b>$120 USD</b>
              </div>
              <button>
                <svg
                  alt="Plus Sign"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="31"
                    height="31"
                    rx="7.5"
                    fill="white"
                    stroke="#F2F2F2"
                  />
                  <path
                    d="M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021 20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z"
                    fill="#D3D3D3"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/1.jpg"
              alt="Puma X Aka Boku Future Rider"
            />
            <h4>Puma X Aka Boku Future Rider</h4>
            <div className="cardinfo">
              <div>
                <h6>PRICE:</h6>
                <b>$188 USD</b>
              </div>
              <button>
                <svg
                  alt="Plus Sign"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="31"
                    height="31"
                    rx="7.5"
                    fill="white"
                    stroke="#F2F2F2"
                  />
                  <path
                    d="M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021 20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z"
                    fill="#D3D3D3"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/12.jpg"
              alt="Nike Air Max 270"
            />
            <h4>Nike Air Max 270</h4>
            <div className="cardinfo">
              <div>
                <h6>PRICE:</h6>
                <b>$95 USD</b>
              </div>
              <button>
                <svg
                  alt="Plus Sign"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="31"
                    height="31"
                    rx="7.5"
                    fill="white"
                    stroke="#F2F2F2"
                  />
                  <path
                    d="M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021 20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z"
                    fill="#D3D3D3"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/9.jpg"
              alt="Nike Blazer Mid Suede"
            />
            <h4>Nike Blazer Mid Suede</h4>
            <div className="cardinfo">
              <div>
                <h6>PRICE:</h6>
                <b>$215 USD</b>
              </div>
              <button>
                <svg
                  alt="Plus Sign"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="31"
                    height="31"
                    rx="7.5"
                    fill="white"
                    stroke="#F2F2F2"
                  />
                  <path
                    d="M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021 20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z"
                    fill="#D3D3D3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
