import { useLocation } from "react-router-dom"


const Checkout = () => {
    const location =useLocation();
    console.log(location);
  return (
    <div><h2>Checkout</h2></div>
  )
}

export default Checkout
