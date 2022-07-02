import { Link } from 'react-router-dom'

function Header(props) {
  return (
    <header>
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
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
      </Link>

      <ul>
        <li className="cu-p" onClick={props.onClickCart}>
          <img width={20} height={20} src="/img/group.svg" alt="Group"></img>
          <span>$1205 USD.</span>
        </li>
        <li>
          <Link to="/favorites">
            <img
              width={20}
              height={20}
              src="/img/favorite.svg"
              alt="Group"
            ></img>
          </Link>
        </li>
        <li>
          <img width={20} height={20} src="/img/union.svg" alt="Group"></img>
        </li>
      </ul>
    </header>
  )
}

export default Header
