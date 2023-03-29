import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import productsFromFile from '../../data/products.json';

function MaintainProducts() {
  const [products, setProducts] = useState(productsFromFile);
  const searchedRef = useRef();

  const remove = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  const searchFromProducts = () => {
    const result = productsFromFile.filter(element =>
      element.name.toLowerCase().includes(searchedRef.current.value.toLowerCase()));
    setProducts(result)
  }

  return (
    <div>
      <input onChange={searchFromProducts} ref={searchedRef} type="text" />
      {products.map((element, index) => (
        <div key={element.id}>
          <img src={element.image} alt="" />
          <div>{element.id}</div>
          <div>{element.name}</div>
          <div>{element.price}</div>
          <div>{element.image}</div>
          <div>{element.category}</div>
          <div>{element.description}</div>
          <div>{element.active}</div>
          <button onClick={() => remove(index)}>Kustuta</button>
          <Link to={`/admin/edit/${element.id}`}>
            <button>Muuda</button>
          </Link>
        </div>
      ))}
    </div>
  );
}


export default MaintainProducts