import "./Home.scss";
import Headline from "../../components/Headline/Headline";
import Products from "../../components/Products/Products";
import Promotion from "../../components/Promotion/Promotion";
import TopBrands from "../../components/TopBrands/TopBrands";
import Comments from "../../components/Comments/Comments";  
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useEffect } from "react";
import { fetchProduct } from "../../redux/productSlice";


function Home() {
  const productsList=useAppSelector((state)=> state.products)
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(fetchProduct());
  });

  console.log("productsList:",productsList)
  return(
    <section className="home-section">{
      console.log("productsList:",productsList)
    }
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
