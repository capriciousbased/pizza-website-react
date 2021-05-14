import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero";
import { productData } from "./components/Products/data";
import Products from "./components/Products/Products";

function App() {
  return (
    <Router>
      <Hero />
      <Products heading='Choose your favorite' data={productData} />
    </Router>
  );
}

export default App;
