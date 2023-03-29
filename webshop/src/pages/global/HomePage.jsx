import React from 'react'
import productsFromFile from "../../data/products.json";
import { useState } from "react"


function HomePage() {
const[products, setProducts] = useState(productsFromFile);

const sortAZ = () => {
  products.sort((a,b) => a.name.localeCompare(b.name))
  setProducts.slice()
}

// sorteeri a-z
// sorteeri z-a
// sorteeri hind kasvavalt
// sorteeri hind kahanealt

  return (
    <div>
      {products.map(element =>
      <div>
        <img src={element.image} alt="" />
        <div>{element.id}</div>
        <div>{element.name}</div>
        <div>{element.price}</div>
        <div>{element.image}</div>
        <div>{element.category}</div>
        <div>{element.description}</div>
        <div>{element.active}</div>
        <button>Lisa ostukorvi</button>
        </div>)}
    </div>
  )
}

export default HomePage