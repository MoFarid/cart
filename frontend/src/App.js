import React, { useEffect, useState, useCallback } from "react";

import CartPage from "./pages/CartPage";

export default function App() {
  const localValue = JSON.parse(localStorage.getItem("cartId"));
  const [cartId, setCartId] = useState(localValue);

  const initCart = useCallback(async () => {
    await fetch("http://localhost:5000/v1/cart/init", {
      method: "POST",
      body: {},
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const id = data.cart.id;
        localStorage.setItem("cartId", JSON.stringify(id));
        setCartId(id);
      });
  }, []);

  useEffect(() => {
    if (cartId === null) {
      initCart();
    }
  }, [cartId, initCart]);

  return cartId === null ? <h1> Loading </h1> : <CartPage cartId={cartId} />;
}
