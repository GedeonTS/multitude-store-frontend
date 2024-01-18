import './Home.scss';
import Headline from '../../components/Headline/Headline';
import Products from '../../components/Products/Products';
import Promotion from '../../components/Promotion/Promotion';
function Home() {
  return (
    <section className='home-section'>
     <Headline/>
     <Products/>
     <Promotion/>
     <Products/>
    </section>
  )
}

export default Home
