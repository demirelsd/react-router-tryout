import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.css"

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://fakestoreapi.com/products");
      setProducts(result.data);
    };
    fetchData();
  }, []);

  // fetch('https://fakestoreapi.com/products')
  //         .then(res=>res.json())
  //         .then(json=>setProducts(json));

  return (
    <div>
      <h2>Products Page</h2>
      <div className={styles.products}>
        {products.map(({ image, id, category, price, description, title }) => (
          <Link to={`details/${id}`} key={id} className={styles.product}>
            <h6>{category}</h6>
            <h4>{title}</h4>
            <img src={image} style={{ width: "100px" }} alt={title} />
            
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
