import React from "react";
import { Collection } from "usetheform";
import { CartItem } from "./CartItem";

export function Cart({ items, onRemoval }) {
  return (
    <Collection object name="cart">
      <Collection array name="items">
        {items.map((item) => (
          <CartItem {...item} onRemoval={onRemoval} key={item.id} />
        ))}
      </Collection>
    </Collection>
  );
}
