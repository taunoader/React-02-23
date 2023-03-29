import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import productsFromFile from "../../data/products.json"
import { useRef, useState } from 'react'

function EditProduct() {
const { id } = useParams();
// ENNE VEEBIPOES: const leitud = productsFromFile[id]   productsFromFile[93.876.610]
// kui on kandilised sulud, t2hendab j2rjekorranumbri alusel leidmiseks
// .find vs .filter ---> kysivad mis on tingimus
// .find annab mulle 1, k6ige esimene
// .fillter annab mulle k6ik kellel tingimus vastab
// const found = productsFromFilter.filter(element.id === id)[0]
const found = productsFromFile.find(element => element.id === Number(id)); // .find   .filter / .sort / .map / .forEach
const index = productsFromFile.findIndex(element => element.id === Number(id));
// !==   ! - keerab vastupidiseks, ei v6rdu
// ===   vasak ja parem pool v6rduvad
// !==   vasak ja parem pool ei v6rdu

// kogus !== 0  pane nulli tagasi
// kodus === 0  suurenda/v2henda

const idRef = useRef();
const nameRef = useRef();
const priceRef = useRef();
const imageRef = useRef();
const categoryRef = useRef();
const descriptionRef = useRef();
const activeRef = useRef();
const navigate = useNavigate(); 
const [isUnique, setUnique] = useState(true);

const edit = () => {
  productsFromFile[index] = {
    "id": Number(idRef.current.value),
    "name": nameRef.current.value,
    "price": Number(priceRef.current.value),
    "image": imageRef.current.value,
    "active": activeRef.current.checked,
    "category": categoryRef.current.value,
    "description": descriptionRef.current.value
  }
  navigate("/admin/maintain-products")
// productsFromFile[5] = updatedProduct;
//  ["Nobe", "BMW", "Tesla"][0] = "Audi";
}

const checkIdUniqueness = () => {

const product = productsFromFile.find(element => element.id === Number(idRef.current.value));
if (product === undefined) {
 // Kelleli ei ole olemas! Korras! Unikaalne!
 setUnique(true);
 console.log("KELLELGI EI OLE OLEMAS")
} else {
 // Kellelgi on samasugune ID olemas, sest ei ole tyhjus leitud toote sees
 setUnique(false)
 console.log("KELLELGI ON OLEMAS")
}
}

return (
  <div>
    {found !== undefined && <div>
    {isUnique === false && <div>Id ei ole unikaalne</div>}
    <label>Id</label> <br />
    <input ref={idRef} onChange={checkIdUniqueness} defaultValue={found.id} type="number" /> <br />
    <label>Name</label> <br />
    <input ref={nameRef} defaultValue={found.name} type="text" /> <br />
    <label>Price</label> <br />
    <input ref={priceRef} defaultValue={found.price} type="number" /> <br />
    <label>Image</label> <br />
    <input ref={imageRef} defaultValue={found.image} type="text" /> <br />
    <label>Category</label> <br />
    <input ref={categoryRef} defaultValue={found.category} type="text" /> <br />
    <label>Description</label> <br />
    <input ref={descriptionRef} defaultValue={found.description} type="text" /> <br />
    <label>Active</label> <br />
    <input ref={activeRef} defaultChecked={found.active} type="checkbox" /> <br />
    <button disabled={isUnique === false} onClick={edit}>Edit</button> <br />
    </div>}
    {found === undefined && <div>Toodet ei leitud!</div>}
  </div>
)
}

export default EditProduct