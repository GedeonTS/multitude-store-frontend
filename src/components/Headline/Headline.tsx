import './Headline.scss';
import icon from './../../assets/icons/basket.svg';

function Headline() {
  return (
    <section className='headline-section'>
      <div className='headline-section-inner'>
        <p className='short-title'><img src={icon} alt="icon-image" /><span>Multitude</span></p>
        <h1 className='headline'>The best Home entertainment system is here</h1>
        <p className='sub-headline'>A new way to shop, a new way to live.</p>
        <a href='#' className='btn'>Shop Now</a>
      </div>
    </section>
  )
}

export default Headline
