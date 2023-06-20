import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import Products from './components/Products';


function App() {
  return (
  <>
    <Navbar/>
    <Carousel/>
    <Products/>

    <Footer/>
  </>
  );
}

export default App;
