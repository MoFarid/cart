import React, { useState, useCallback } from "react";
import "bulma/css/bulma.css";
import Form from "usetheform";

import "../styles.css";

import { Cart } from "../components/Cart";
import { getRandomItem } from "../utils/itemCreator";

export default function CartPage({ cartId }) {
  console.log(cartId);
  const [cartState, setCartState] = useState({});
  const [cartList, changeCartList] = useState([]);
  const [couponAccepted, setCouponAccepted] = useState(null);
  let currentId = 0;

  const sendRequest = useCallback(
    async (action, data, withCartId = true) =>
      fetch(`http://localhost:5000/v1/${action}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          withCartId
            ? {
                cartId: cartId,
                ...data,
              }
            : data
        ),
      }),
    [cartId]
  );

  const onAddition = useCallback(async () => {
    const newItem = getRandomItem();
    await sendRequest("cart/add", {
      itemData: {
        name: newItem.name,
        price: newItem.price,
      },
    });
    changeCartList((l) => [...l, { ...newItem, id: currentId++, quantity: 1 }]);
  }, [currentId, sendRequest]);

  const onRemoval = useCallback(
    async (idOfItemToRemove) => {
      await sendRequest("cart/remove", {
        itemIndex: idOfItemToRemove,
      });
      changeCartList((l) => l.filter(({ id }) => idOfItemToRemove !== id));
    },
    [sendRequest]
  );

  const onClear = useCallback(async () => {
    await Promise.all(
      cartList.map(async (e) => {
        await sendRequest("cart/remove", {
          itemIndex: e.id,
        });
      })
    );

    changeCartList((l) => []);
  }, [cartList, sendRequest]);

  const isInitial = () => cartList.length === 0;

  const calcTotal = () =>
    cartList.map((e) => e.price * e.quantity).reduce((a, b) => a + b, 0);

  const validateCoupon = async (coupon) => {
    const res = await sendRequest("coupon/check", { code: coupon }, false);
    const isAccepted = res.status === 200;
    setCouponAccepted(isAccepted);

    if (!isAccepted) {
      alert("Coupon Rejected!");
      return;
    }

    const { isFixed, value } = await res.json();
    const valueAdded = `Coupon gives you ${
      isFixed ? value + " Fixed" : value * 100 + "%"
    }`;
    alert(valueAdded);
  };

  const getInputColor = () => {
    if (couponAccepted === null) {
      return "is-info";
    }
    return couponAccepted ? "is-success" : "is-danger";
  };

  return (
    <div className="App">
      <div className="box">
        <h1 className="title">Your Shopping Cart</h1>
        <Form
          onSubmit={(s) => console.log(s)}
          onChange={(s) => setCartState(s)}
        >
          <Cart items={cartList} onRemoval={onRemoval} />
        </Form>
        <br />
        <button
          type="button"
          className="button is-small is-success"
          onClick={onAddition}
        >
          Add new random item
        </button>
        <br />
        <br />

        <nav className="level">
          <div className="level-left">
            <input
              className={`input level-item is-small ${getInputColor()}`}
              id="coupon"
              type="text"
              placeholder="Enter Coupon"
              disabled={isInitial()}
            ></input>
            <button
              type="submit"
              className="button is-small is-info level-item"
              disabled={isInitial()}
              onClick={() =>
                validateCoupon(document.getElementById("coupon").value)
              }
            >
              Validate Coupon
            </button>
          </div>
        </nav>

        <h1 className="subtitle">{`Total: ${calcTotal()}`}</h1>

        <br />
        <div className="buttons">
          <button
            type="submit"
            className="button is-small is-link"
            disabled={isInitial()}
          >
            Proceed to Checkout
          </button>
          <button
            type="submit"
            className="button is-small is-danger"
            onClick={onClear}
            disabled={isInitial()}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
}
