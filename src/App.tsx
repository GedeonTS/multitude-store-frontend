import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/Navbar/Navbar';
import './App.scss';
import Footer from './components/Footer/Footer';
import Description from './pages/description/Description';
import Login from './pages/login/Login';
import Category from './pages/Category/Category';
import Cart from './pages/Cart/Cart';
import AddItemForm from './components/NewItem/AddItemForm';


function App() {

  return (
    <BrowserRouter>
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/:itemId" element={<Description />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/add-item" element={<AddItemForm />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App
