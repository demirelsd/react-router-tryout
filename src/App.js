import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Details from "./pages/Details";
import Checkout from "./pages/Checkout";

const App = () =>{

  return(
    <div className="App">
      <Router>
        <Navbar/>
        <div className="main">
          <Routes>
          <Route path="/" element= {<Home/>} />
          <Route path="/about" element = {<About/>}/>
          <Route path="/products" element= {<Products/>}/>
          <Route path="/products/details/:productId" element= {<Details/>}/>
          <Route path="/checkout" element= {<Checkout/>}/>
          <Route path="*" element = {<NotFound/>} />
        </Routes>
        </div>
        
        <Footer/>

      </Router>
      
    </div>
  )
}


export default App;