import "./Navbar.scss";
import Basket from "./../../assets/icons/basket.svg";
import Menu from "./../../assets/icons/menu.svg";
import plusIcon from "./../../assets/icons/plus-circle.svg";
import search from "../../assets/search.svg";
import { Link } from "react-router-dom";
function Navbar() {
  const productCategories = [
    "Audio & Video",
    "Computers & Accessories",
    "Home Appliances",
    "Kitchen & Dining",
    "Mobile & Accessories",
  ];
  return (
    <header className="Navbar">
      <div className="small-navbar-container">
        <div className="small-navbar">
          <p>
            24/7 Customer service <strong>1-800-234-5678</strong>
          </p>
          <ul className="small-navbar-list">
            <li className="small-navbar-item">
              <a href="#">Login</a>
            </li>
            <li className="small-navbar-item">
              <a href="#">Register</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="Navbar-main-container">
        <div className="Navbar-main">
          <div className="middle-menu">
            <div className="upper-middle-menu">
              <div className="logo-area">
                <img src={Menu} alt="menu" className="menu-icon" />
                <div className="logo-wrapper">
                  <div className="logo-inner"></div> Multitude
                </div>
              </div>
              <div className="action-menu">
                <Link to="/login" className="login">
                Sign in
                </Link>
                <div className="order-icon mobile">
                  <img src={Basket} alt="basket" className="basket-icon" />
                  <p>0</p>
                </div>
              </div>
            </div>
            <div className="search-bar">
              <input
                type="search"
                className="search-field"
                placeholder="Search product …"
                value=""
                name="s"
              />
              <button type="submit" className="search-submit">
                <img src={search} className="search-icon" />
              </button>
            </div>
          </div>
          <div className="lower-menu">
            <ul className="category-list">
              {/* <li>
                All products
                <img src={arrowDown} className="down-arrow" />
              </li> */}
              {productCategories.map((category) => (
                <li>{category}</li>
              ))}
            </ul>
            <div className="action-menu">
            <div className="order-icon desktop">
              <img src={Basket} alt="basket" className="basket-icon" />
              <p>0</p>
            </div>
            <Link to="/add-item" className="add-item">
            <img src={plusIcon} alt="add item icon" className="add-item-icon" />
            </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
