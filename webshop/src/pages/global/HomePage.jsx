import React, { useEffect, useState, useContext } from "react"
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import config from "../../data/config.json"
import SortButtons from '../../components/home/SortButtons';
import FilterButtons from '../../components/home/FilterButtons';
import { CartSumContext } from "../../store/CartSumContext";

function HomePage() {
const [products, setProducts] = useState([]);
const [dbProducts, setDbproducts] = useState([]);
const [categories, setCategories] = useState([]);
const { setCartSum } = useContext(CartSumContext)

// uef
useEffect(() => {
  fetch(config.categoriesDbUrl)
  .then(response => response.json())
  .then(json => setCategories(json || []))


  fetch(config.productsDbUrl)
  .then(response => response.json())
  .then(json => {
    setProducts(json || []);  // null || []        null - tyhjus
    setDbproducts(json || []);  // [].length    [].map   annavad errori:   null.length   null.map()
  })
}, []);



const addProductToCart = (productClicked) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || []; // vana ostukorvi sisu enne juurde lisamist
  // .find() --> kas on v6i ei ole ostukorvis
  // if () {} else {} --> kui on, siis suurendan kogust, kui ei ole, siis pushin kogusega 1

  //.find() -> kui leiab, siis tagastab toote enda. Kui ei leia siis tagastab "undefined"
  // .findIndex() -> kui leiab, siis tagastab toote j2rjekorranumbri. Kui ei leia, siis tagastab -1
  const index = cart.findIndex(element => element.product.id === productClicked.id);
  if (index !== -1) { 
  // muudan ---> suurendan kogust    KUI midagi muudan v6i kustutan, vajan alati j2rjekorranumbrit
  cart[index].quantity = cart[index].quantity + 1;

  // uuendaKogus( kogus + 1 )
  // tootedFailist[jrkNr] = toodeRef.current.value
  } else {
    cart.push({"product": productClicked, "quantity": 1});
  }

  let sum = 0;
  cart.forEach((element) => sum = sum + element.product.price * element.quantity);
  setCartSum(sum.toFixed(2));

  setCartSum(888)

  localStorage.setItem("cart", JSON.stringify(cart));
}



  return (
    <div>
        <SortButtons products={products} setProducts={setProducts} />
        <div>{products.length} pcs</div>
        {/* <button onClick={() => filterProducts("camping")}>camping</button>
        <button onClick={() => filterProducts("tent")}>tent</button>
        <button onClick={() => filterProducts("motorcycle")}>motorcycle</button>
  <button onClick={() => filterProducts("motors")}>motors</button>*/}
        <FilterButtons
          dbProducts={dbProducts}
          setProducts={setProducts}
          categories={categories}
        />
      {products.filter(element => element.active === true).map(element =>
      <div key={element.id}>
        <Link to={"/product/" + element.id}>
        <img src={element.image} alt="" />
        <div>{element.name}</div>
        <div>{element.price}</div>
        </Link>
        <Button variant="contained" onClick={() => addProductToCart(element)}>Add to cart</Button>
        </div>)}
    </div>
  )
}

export default HomePage