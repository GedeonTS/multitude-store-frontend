import './Category.scss';
import { useParams } from 'react-router-dom';
import StarRating from "../../components/FiveStars/StarRating";
import { Stars } from '../../components/Products/Products';
import { Link } from 'react-router-dom';


const Category = () => {
  const { category } = useParams();
  const ProductsData: {
    data: {
        id: number;
        name: string;
        description: string;
        price: number;
        category: string;
        image: string;
    }[]} = {
        data:[
        {
            id: 1,
            name: 'Product 1',
            description: 'This is an american product, manufactured in LA',
            price: 100,
            category: 'audio-video',
            image: 'https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-category-image-06.jpg',
        },
        {
            id: 2,
            name: 'Product 2',
            description: 'This is an american product, manufactured in LA',
            price: 200,
            category: 'audio-video',
            image: 'https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-category-image-06.jpg',
        },
        {
            id: 3,
            name: 'Product 3',
            description: 'This is an american product, manufactured in LA',
            price: 300,
            category: 'audio-video',
            image: 'https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-category-image-06.jpg',
        },
        {
            id: 3,
            name: 'Product 3',
            description: 'This is an american product, manufactured in LA',
            price: 300,
            category: 'audio-video',
            image: 'https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-category-image-06.jpg',
        }]}

  return (
    <section className='category'>
      <h1 className='title'>{category}</h1>
      <div className='products-section-inner'>
            {ProductsData.data.map((product) => (
                <Link to={`/${encodeURIComponent(product.name)}`} className='product-link'>
                <div className='product-item' key={product.id}>
                    <div className='product-item-inner'>
                        <img src={product.image} alt={product.name} />
                        <div className='product-item-info'>
                            <Stars className='stars'><StarRating/></Stars>
                            <div>
                            <p className='description'>{product.description}</p>
                            <p className='price'>${product.price}</p>
                            </div>
                        </div>
                    </div>
                </div>
                </Link>
            ))}
        </div>
    </section>
  )
}

export default Category
