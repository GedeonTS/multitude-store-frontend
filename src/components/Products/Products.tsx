import './Product.scss';
import StarRating from "../FiveStars/StarRating";
import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Stars = styled.div`
display: flex;
justify-content: center;
align-items: center;
min-height: 50px;
input[type="radio"] {
  display: none;
}
.star {
  cursor: pointer;
  transition: color 200ms;
}
`;

function Products({category}) {
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
    <section  className='products-section'>
        <div className='products-section-wrapper'>
            <h2 className='products-type'>
                {category}
            </h2>
            <Link to={`/category/${encodeURIComponent(category)}`} className='btn'>
                See more
            </Link>
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
        </div>
    </section>
  )
}

export default Products
