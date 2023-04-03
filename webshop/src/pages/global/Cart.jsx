import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../../css/Cart.css";
import Button from '@mui/material/Button';

function Cart() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const emptyCart = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
  };

  const decreaseQuantity = (index) => {
    cart[index].quantity = cart[index].quantity - 1;
    if (cart[index].quantity === 0) {
      removeFromCart(index);
    }
    setCart(cart.slice());
        localStorage.setItem("cart", JSON.stringify(cart));
  }

  const increaseQuantity = (index) => {
    cart[index].quantity = cart[index].quantity + 1;
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const removeFromCart = (index) => {
    cart.splice(index, 1);
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const summary = () => {
    let sum = 0;
    cart.forEach((element) => (sum = sum + element.product.price * element.quantity));
    return sum.toFixed(2);
  };
  // ostukorvi kogusumma arvutus

  // mitu tykki on ostukorvi v2ljakuvamine

  // 2ra n2ita v2lja tyhjenda nuppu, kogusumma v2ljakuvamist, mitu tykki v2ljakuvamist
  //         kui ostukorvis pole yhtegi toodet

  // n2ita v2lja ostukorv on tyhi kirjet kui ostukorvis on esemete arv 1

  return (
    <div>
     {cart.length > 0 &&
      <div className="cart-top">
        <div>Total different items: {cart.length}</div>
        <Button onClick={emptyCart} variant="outlined">Empty cart</Button>
      </div>}
      {cart.map((element, index) => (
        <div className="product" key={index}>
          <img className="image" src={element.product.image} alt="" />
          <div className="name">{element.product.name}</div>
          <div className="price">{element.product.price} €</div>
          <div className="quantity">
            <img className="button" onClick={() => decreaseQuantity(index)} src="/minus.png" alt="" />
            <div>{element.quantity} pcs</div>
            <img className="button" onClick={() => increaseQuantity(index)} src="/plus.png" alt="" />
          </div>
          <div className="total">{(element.product.price * element.quantity).toFixed(2)} €</div>
          <img className="button" onClick={() => removeFromCart(index)} src="/remove.png" alt="" />
        </div>
      ))}
      {cart.length === 0 && (
        <div>
          Cart is empty. <br /> <br />
          <Link to="/">Add products</Link> <br />
        </div>
      )}
      {cart.length > 0 &&
       <div className="cart-bottom">
        <div className="sum">Subtotal: {summary()} €</div>
        </div>
        }
    </div>
  );
}

export default Cart;
