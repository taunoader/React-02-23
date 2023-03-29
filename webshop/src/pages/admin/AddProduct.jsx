import React, { useRef, useState } from 'react'
import productsFromFile from '../../data/products.json'

function AddProduct() {
const [ sonum, uuendaSonum] = useState('Lisa uus toode!');
const idRef = useRef();
const nameRef = useRef();
const priceRef = useRef();
const imageRef = useRef();
const categoryRef = useRef();
const descriptionRef = useRef();
const activeRef = useRef();

const Add = () => {
  if (nameRef.current.value === "") {
    uuendaSonum("Tyhja nimetusega ei saa toodet lisada");
  } else {
    uuendaSonum("Toode lisatud" + nameRef.current.value);
    productsFromFile.push({
      "id": Number(idRef.current.value),
      "name": nameRef.current.value,
      "price": Number(priceRef.current.value),
      "image": imageRef.current.value,
      "active": activeRef.current.checked,
      "category": categoryRef.current.value,
      "description": descriptionRef.current.value,
    });
  }
};

// KOJU: label + inputide + funktioon + productsFromFile.push()
// tekib l6ppu juurde (refreshiga kaob 2ra)

  return (
    <div>
      <div>{sonum}</div>
      <label>New ID</label> <br />
      <input ref={idRef} type="number" /> <br />
      <label>Uue toote nimi</label> <br />
      <input ref={nameRef} type="text" /> <br />
      <label>Uue toote hind</label> <br />
      <input ref={priceRef} type="number" /> <br />
      <label>Uue toote pilt</label> <br />
      <input ref={imageRef} type="text" /> <br />
      <label>Uue toote kategooria</label> <br />
      <input ref={categoryRef} type="text" /> <br />
      <label>Uue toote kirjeldus</label> <br />
      <input ref={descriptionRef} type="text" /> <br />
      <label>Uue toote aktiivsus</label> <br />
      <input ref={activeRef} type="checkbox" /> <br />
      <button onClick={Add}>Sisesta</button> <br />
    </div>
  )
}

export default AddProduct