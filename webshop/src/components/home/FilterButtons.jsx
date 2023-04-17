import React from 'react'

function FilterButtons({dbProducts, setProducts, categories}) {
  // const filterProducts = () => {}
  // const filterProductsUSB = () => {}
  
  const filterProducts = (categoryClicked) => {
    const filteredProducts = dbProducts.filter((product) => product.category === categoryClicked);
    setProducts(filteredProducts);
}

  return (
    <div>
        {
        categories.map(category => <button onClick={() => filterProducts(category.name)}>{category.name}</button>)
        }
    </div>
  )
}

export default FilterButtons