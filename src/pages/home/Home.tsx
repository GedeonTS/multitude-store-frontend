import "./Home.scss";
import Headline from "../../components/Headline/Headline";
import Products from "../../components/Products/Products";
import Promotion from "../../components/Promotion/Promotion";
import TopBrands from "../../components/TopBrands/TopBrands";
import Comments from "../../components/Comments/Comments";  

function Home() {
  return (
    <section className="home-section">
      <Headline />
      <Products category={'Top sales'}/>
      <Promotion />
      <Products category={'Audio & Video'}/>
      <Promotion />
      <Products category={'Home appliances'}/>
      <TopBrands />
      <Comments />
    </section>
  );
}

export default Home;
