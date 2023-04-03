import React from 'react'
import productsFromFile from "../../data/products.json";
import { useState } from "react"
import Button from '@mui/material/Button';

function HomePage() {
const[products, setProducts] = useState(productsFromFile);

const sortAZ = () => {
  products.sort((a,b) => a.name.localeCompare(b.name))
  setProducts(products.slice())
}

const sortZA = () => {
  products.sort((a,b) => b.name.localeCompare(a.name));
  setProducts(products.slice());
}

const sortPriceHigh = () => {
  products.sort((a,b) => a.price - b.price);
  setProducts(products.slice());
}

const sortPriceLow = () => {
  products.sort((a,b) => b.price - a.price);
  setProducts(products.slice());
}

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

  localStorage.setItem("cart", JSON.stringify(cart));
}

  return (
    <div>
      {products.map(element =>
      <div key={element.id}>
        <img src={element.image} alt="" />
        <div>{element.name}</div>
        <div>{element.price}</div>
        <Button onClick={sortAZ}>Sort A-Z</Button>
        <Button onClick={sortZA}>Sort Z-A</Button>
        <Button onClick={sortPriceHigh}>Sort by price low to high</Button>
        <Button onClick={sortPriceLow}>Sort by price high to low</Button>
        <Button variant="contained" onClick={() => addProductToCart(element)}>Add to cart</Button>
        </div>)}
    </div>
  )
}

export default HomePage