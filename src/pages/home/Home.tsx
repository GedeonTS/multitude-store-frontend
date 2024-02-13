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
  const { products } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  });

  const productByCategory = ( category:string)=>{
    if(products.products.length === 0){
      return [];
    }
    return products.products?.filter((product)=>product.category === category);
  }

  console.log("productsList:", products.products);
  return (
    <section className="home-section">
      {console.log("productsList:", products.products)}
      <Headline />
      <Products category={"Top sales"} list={productByCategory( "Top sales")} />
      <Promotion />
      <Products category={"Audio & Video"} list={productByCategory( "Audio & Video")} />
      <Promotion />
      <Products category={"Home appliances"} list={productByCategory( "Home appliances")} />
      <TopBrands />
      <Comments />
    </section>
  );
}

export default Home;
