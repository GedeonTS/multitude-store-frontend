import './Product.scss';
import StarRating from "../FiveStars/StarRating";
import styled from "styled-components";

const Stars = styled.div`
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

function Products() {
    const ProductsData: {
    sectionType: string;
    data: {
        id: number;
        name: string;
        description: string;
        price: number;
        image: string;
    }[]} = {
         sectionType: 'products', // goup of products
        data:[
        {
            id: 1,
            name: 'Product 1',
            description: 'This is an american product, manufactured in LA',
            price: 100,
            image: 'https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-category-image-06.jpg',
        },
        {
            id: 2,
            name: 'Product 2',
            description: 'This is an american product, manufactured in LA',
            price: 200,
            image: 'https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-category-image-06.jpg',
        },
        {
            id: 3,
            name: 'Product 3',
            description: 'This is an american product, manufactured in LA',
            price: 300,
            image: 'https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-category-image-06.jpg',
        },
        {
            id: 4,
            name: 'Product 4',
            description: 'This is an american product, manufactured in LA',
            price: 400,
            image: 'https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-category-image-06.jpg',
        },
        {
            id: 5,
            name: 'Product 5',
            description: 'This is an american product, manufactured in LA',
            price: 500,
            image: 'https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-category-image-06.jpg',
        },
        {
            id: 6,
            name: 'Product 6',
            description: 'This is an american product, manufactured in LA',
            price: 600,
            image: 'https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-category-image-06.jpg',
        },
        {
            id: 7,
            name: 'Product 7',
            description: 'This is an american product, manufactured in LA',
            price: 700,
            image: 'https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-category-image-06.jpg',
        },
        {
            id: 8,
            name: 'Product 8',
            description: 'This is an american product, manufactured in LA',
            price: 800,
            image: 'https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-category-image-06.jpg',
        },
        {
            id: 9,
            name: 'Product 9',
            description: 'This is an american product, manufactured in LA',
            price: 900,
            image: 'https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-category-image-06.jpg',
        },
        {
            id: 10,
            name: 'Product 10',
            description: 'This is an american product, manufactured in LA',
            price: 1000,
            image: 'https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-category-image-06.jpg',
        }]}

  return (
    <section  className='products-section'>
        <div className='products-section-inner'>
            {ProductsData.data.map((product) => (
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
            ))}
        </div>
    </section>
  )
}

export default Products
