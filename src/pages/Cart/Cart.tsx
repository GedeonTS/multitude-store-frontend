import './Cart.scss';
import ShoppingCartTable from '../../components/ShoppingCartTable';

function Cart() {
    const cartItems = [
        { productName: 'Item 1',image: 'https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-category-image-06.jpg' ,quantity: 2, price: 19.99 },
        { productName: 'Item 2',image: 'https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-category-image-06.jpg' ,quantity: 1, price: 29.99 },
        // Add more items as needed
      ];
  return (
    <section className='cart'>
        <h1>Cart</h1>
        <ShoppingCartTable cartItems={cartItems} />
        
        <div className='cart-total'>
            <h3>Total: $49.98</h3>
            <button className='btn btn-primary'>Checkout</button>
        </div>

    </section>
  )
}

export default Cart
