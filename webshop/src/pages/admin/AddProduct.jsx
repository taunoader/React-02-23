import React, { useEffect, useRef, useState } from "react";
// import productsFromFile from "../../data/products.json";
import { ToastContainer, toast } from "react-toastify";
import config from "../../data/config.json";

function AddProduct() {
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const [isUnique, setUnique] = useState(true);
  const [dbProducts, setDbProducts] = useState([]);

  useEffect(() => {
    fetch(config.productsDbUrl)
    .then(response => response.json())
    .then(json => {  // null || []        null - tyhjus
      setDbProducts(json || []);  // [].length    [].map   annavad errori:   null.length   null.map()
    })
  }, []);

  const Add = () => {
    if (idRef.current.value === "") {
      toast.error("Ei saa lisada tühja ID-ga!")
      return;
    }
    if (nameRef.current.value === "") {
      toast.error("Ei saa lisada tühja nimega!")
      return;
    }
    if (priceRef.current.value === "") {
      toast.error("Ei saa lisada tühja hinnaga!")
      return;
    }

    if (nameRef.current.value === "") {
      toast.error("Tyhja nimetusega ei saa toodet lisada");
    } else {
      toast.success("Toode edukalt lisatud" + nameRef.current.value);

      dbProducts.push({
        id: Number(idRef.current.value),
        name: nameRef.current.value,
        price: Number(priceRef.current.value),
        image: imageRef.current.value,
        active: activeRef.current.checked,
        category: categoryRef.current.value,
        description: descriptionRef.current.value,
      });
      fetch(config.productsDbUrl, {"method": "PUT", "body": JSON.stringify(dbProducts)});
    }
  };

  const checkIdUniqueness = () => {

    const product = dbProducts.find(element => element.id === Number(idRef.current.value));
    if (product === undefined) {
     // Kelleli ei ole olemas! Korras! Unikaalne!
     setUnique(true);
     console.log("KELLELGI EI OLE OLEMAS")
    } else {
     // Kellelgi on samasugune ID olemas, sest ei ole tyhjus leitud toote sees
     setUnique(false)
     console.log("KELLELGI ON OLEMAS")
     toast.error("Id pole unikaalne")
    }
    }

  // KOJU: label + inputide + funktioon + productsFromFile.push()
  // tekib l6ppu juurde (refreshiga kaob 2ra)

  return (
    <div>
      {isUnique === false && <div>Id ei ole unikaalne</div>}
      <label>New ID</label> <br />
      <input onChange={checkIdUniqueness} ref={idRef} type="number" /> <br />
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
      <button disabled={isUnique === false} onClick={Add}>Sisesta</button> <br />
      <ToastContainer />
    </div>
  );
}

export default AddProduct;
