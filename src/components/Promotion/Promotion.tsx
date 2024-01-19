import './Promotion.scss';
import imgUrl1 from '../../assets/case.jpg';
import imgUrl2 from '../../assets/phones.jpg';

function Promotion() {
    const divStyle1 = {
        color: 'white',
        fontSize: '20px',
        textAlign: 'center',
        backgroundImage: 'url(' + imgUrl1 + ')',
        backgroundSize: 'cover',
      };

      const divStyle2 = {
        color: 'white',
        fontSize: '20px',
        textAlign: 'center',
        backgroundImage: 'url(' + imgUrl2 + ')',
        backgroundSize: 'cover',
      };
  return (
    <section className="promotion-section">
        <div className="promotion-section-inner promotion-section-inner_first" style={divStyle1}>
            <h2>The only Case you need.</h2>
            <a href="#" className="btn">
          Shop Now
        </a>
        </div>
        <div className="promotion-section-inner" style={divStyle2}>
        <p>BRAND DAY</p>
        <h2>Get 30% Off</h2>
        <a href="#" className="btn">
          Shop Now
        </a>
        </div>
    </section>
  )
}

export default Promotion
