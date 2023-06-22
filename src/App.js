import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <div className="p-max-container">
        <Products />
      </div>

      <Footer />
    </>
  );
}

export default App;
