import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
// import productsFromFile from '../../data/products.json';
import config from "../../data/config.json"

function MaintainProducts() {
  const [products, setProducts] = useState([]);
  const [dbProducts, setDbproducts] = useState([]);
  const searchedRef = useRef();

  useEffect(() => {
    fetch(config.productsDbUrl)
    .then(response => response.json())
    .then(json => {
      setProducts(json || []);  // null || []        null - tyhjus
      setDbproducts(json || []);  // [].length    [].map   annavad errori:   null.length   null.map()
    })
  }, []);

  const remove = (productId) => {
    const index = dbProducts.findIndex(element => element.id === productId);
    dbProducts.splice(index, 1);
    setProducts(dbProducts);
    fetch(config.productsDbUrl, {"method": "PUT", "body": JSON.stringify(dbProducts)});
    searchFromProducts();
  };

  const searchFromProducts = () => {
    const result = dbProducts.filter(element =>
      element.name.toLowerCase().includes(searchedRef.current.value.toLowerCase()));
    setProducts(result)
  }

  return (
    <div>
      <input onChange={searchFromProducts} ref={searchedRef} type="text" />
      {products.map((element, index) => (
        <div key={index} className={ element.active === true ? "active-product" : "inactive-product" }>
          <img src={element.image} alt="" />
          <div>{element.id}</div>
          <div>{element.name}</div>
          <div>{element.price}</div>
          <div>{element.image}</div>
          <div>{element.category}</div>
          <div>{element.description}</div>
          <div>{element.active}</div>
          <button onClick={() => remove(element.id)}>Kustuta</button>
          <Link to={`/admin/edit/${element.id}`}>
            <button>Muuda</button>
          </Link>
        </div>
      ))}
    </div>
  );
}


export default MaintainProducts