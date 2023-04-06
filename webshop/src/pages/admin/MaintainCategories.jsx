import React, { useEffect, useRef, useState } from 'react'

function MaintainCategories() {
  const [categories, setCategories] = useState([])
  const categoryRef = useRef();
  
  // uef --> kohe kui lehele tulles, midagi kysitakse v66ralt URL-lt siis peab uef tegema
  // localStorage.getItem("categories")
  useEffect(() => {
    fetch("https://webshop-349da-default-rtdb.europe-west1.firebasedatabase.app/categories.json")
      .then(response => response.json())
      .then(json => setCategories(json || []))
  }, []);

  const add = () => {
    categories.push({"name": categoryRef.current.value})
    setCategories(categories.slice());
    // localStorage.setItem("categories", categories)
    fetch("https://webshop-349da-default-rtdb.europe-west1.firebasedatabase.app/categories.json", {
      "method": "PUT",
      "body": JSON.stringify(categories)
    })
  }

  const remove = (index)=> {
    categories.splice(index,1)
    setCategories(categories.slice());
    // localStorage.setItem("categories", categories)
    fetch("https://webshop-349da-default-rtdb.europe-west1.firebasedatabase.app/categories.json", {
      "method": "PUT",
      "body": JSON.stringify(categories)
    })
  }

  return (
    <div>
      <label>Kategooria</label> <br />
      <input ref={categoryRef} type="text" /> <br />
      <button onClick={add}>Sisesta</button>
      {categories.map((category, index) => 
        <div key={index}>
          <div>{category.name}</div>
          <button onClick={() => remove(index)}>Kustuta</button>
        </div>)}
    </div>
  )
}

export default MaintainCategories