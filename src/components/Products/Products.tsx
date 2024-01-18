import './Product.scss';

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
            description: 'Product 1 description',
            price: 100,
            image: 'https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-category-image-06.jpg',
        },
        {
            id: 2,
            name: 'Product 2',
            description: 'Product 2 description',
            price: 200,
            image: 'https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-category-image-06.jpg',
        },
        {
            id: 3,
            name: 'Product 3',
            description: 'Product 3 description',
            price: 300,
            image: 'https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-category-image-06.jpg',
        },
        {
            id: 4,
            name: 'Product 4',
            description: 'Product 4 description',
            price: 400,
            image: 'https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-category-image-06.jpg',
        },
        {
            id: 5,
            name: 'Product 5',
            description: 'Product 5 description',
            price: 500,
            image: 'https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-category-image-06.jpg',
        },
        {
            id: 6,
            name: 'Product 6',
            description: 'Product 6 description',
            price: 600,
            image: 'https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-category-image-06.jpg',
        },
        {
            id: 7,
            name: 'Product 7',
            description: 'Product 7 description',
            price: 700,
            image: 'https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-category-image-06.jpg',
        },
        {
            id: 8,
            name: 'Product 8',
            description: 'Product 8 description',
            price: 800,
            image: 'https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-category-image-06.jpg',
        },
        {
            id: 9,
            name: 'Product 9',
            description: 'Product 9 description',
            price: 900,
            image: 'https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-category-image-06.jpg',
        },
        {
            id: 10,
            name: 'Product 10',
            description: 'Product 10 description',
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
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>{product.price}</p>
                            <button>Add to cart</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Products
