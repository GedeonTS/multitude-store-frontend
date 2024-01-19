import "./Footer.scss";
import newsletter from "../../assets/newsletter.svg";

function Footer() {
  const submit = () => {
    alert("Subscribed successfully!");
  };
  return (
    <section className="footer">
      <div className="contact-container">
        <form className="form" onSubmit={submit}>
          <img src={newsletter} className="newsletter-image" />
          <h3>Subscribe to our Newletter</h3>
          <p>Sign up for all the latest news and special offers</p>
          <div className="input-area">
            <input name="email" type="email" placeholder=" Email address" />
            <button type="submit" className="btn">
              Subscribe
            </button>
          </div>
        </form>
        <div className="contact-area">
          <div className="logo-wrapper">
            <div className="logo-inner"></div> Multitude
          </div>
          <p>123 Avenue Orchidees, Goma, 551 AB</p>
          <p>Multitude@info.com</p>
          <p>+243-3443 888</p>
        </div>
      </div>
      <div className="Footer-area">
          <p>© 2024 Electronic Store. Powered by Afrinovator</p>
          <ul>
            <li><img src={newsletter} className="footer-icon"/></li>
            <li><img src={newsletter} className="footer-icon"/></li>
            <li><img src={newsletter} className="footer-icon"/></li>
            <li><img src={newsletter} className="footer-icon"/></li>
          </ul>
        </div>
    </section>
  );
}

export default Footer;
