import "./Headline.scss";
import icon from "./../../assets/icons/basket.svg";
import delivery from "../../assets/delivery-svgrepo-com.svg";
import undo from "../../assets/undo-svgrepo-com.svg";
import payment  from "../../assets/payment-svgrepo-com.svg";
import message from "../../assets/message-circle-dots-svgrepo-com.svg";

function Headline() {
  return (
    <section className="headline-section-container">
      <div className="headline-section">
        <div className="headline-section-inner">
          <p className="short-title">
            <img src={icon} alt="icon-image" />
            <span>Multitude</span>
          </p>
          <h1 className="headline">
            The best Home entertainment system is here
          </h1>
          <p className="sub-headline">A new way to shop, a new way to live.</p>
          <a href="#" className="btn">
            Shop Now
          </a>
        </div>
      </div>
      <div className="headline-footer">
        <div className="headline-footer-item">
            <img src={delivery} />
          <h2>Free Shipping</h2>
          <p>On all orders over $99</p>
        </div>
        <div className="headline-footer-item">
        <img src={undo} />
          <h2>30 Days Return</h2>
          <p>Money back guarantee</p>
        </div>
        <div className="headline-footer-item">
        <img src={message} />
          <h2>24/7 Support</h2>
          <p>Call us anytime</p>
        </div>
        <div className="headline-footer-item">
        <img src={payment} />
          <h2>100% Payment Secure</h2>
          <p>We ensure secure payment</p>
        </div>
      </div>
    </section>
  );
}

export default Headline;
