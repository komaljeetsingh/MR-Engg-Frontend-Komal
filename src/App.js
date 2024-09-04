import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Render/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Contact from './Render/Contact';
import About from './Render/About';
import Product from './Components/Product';
import Products from './Components/Products';
import Form from './Components/Form';
import Upper from './Components/Upper';
import ThankYou from './Components/ThankYou';
import BlogPage from './Components/BlogPage';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
     <ScrollToTop />
      <Upper />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/products' element={<Products />} />
        <Route path='/form' element={<Form />} />
        <Route path='/thankyou' element={<ThankYou />} />
        <Route path='/blog' element={<BlogPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
