import "./Navbar.scss";
import Basket from "./../../assets/icons/basket.svg";
import Cancel from "./../../assets/icons/cancel.svg";
import Menu from "./../../assets/icons/menu.svg";

function Navbar() {
  return (
    <header className="Navbar">
      <div className="logo-area">
        <img src={Menu} alt="menu" className="menu-icon" />
        <div className="logo-wrapper">
          <div className="logo-inner"></div> Multitude
        </div>
      </div>

      <div className="order-icon">
        <img src={Basket} alt="basket" className="basket-icon" />
        <p>0</p>
      </div>
    </header>
  );
}

export default Navbar;
