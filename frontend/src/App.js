import React, { useState, useCallback } from "react";
import "bulma/css/bulma.css";
import Form from "usetheform";

import "./styles.css";

import { Cart } from "./components/Cart";
import { getRandomItem } from "./utils/itemCreator";

export default function App() {
  const [cartState, setCartState] = useState({});
  const [cartList, changeCartList] = useState([]);
  let currentId = 0;

  const onAddition = useCallback(() => {
    const newItem = getRandomItem();
    changeCartList((l) => [...l, { ...newItem, id: currentId++, quantity: 1 }]);
  }, [currentId]);

  const onRemoval = useCallback(
    (idOfItemToRemove) =>
      changeCartList((l) => l.filter(({ id }) => idOfItemToRemove !== id)),
    []
  );

  const onClear = useCallback(() => changeCartList((l) => []), []);

  const isInitial = () => cartList.length === 0;

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
              className="input level-item is-small"
              type="text"
              placeholder="Enter Coupon"
              disabled={isInitial()}
            ></input>
            <button
              type="submit"
              className="button is-small is-info level-item"
              disabled={isInitial()}
            >
              Validate Coupon
            </button>
          </div>
        </nav>

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
