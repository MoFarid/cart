import React from "react";
import { Input, Collection } from "usetheform";

export function CartItem({ name, quantity, price, onRemoval, id }) {
  return (
    <div className="box control">
      <Collection object>
        <Input type="hidden" name="id" value={id} />
        <div className="field">
          <label className="label is-small">Item</label>
          <Input
            className="input is-small"
            type="text"
            name="name"
            readOnly
            value={name}
          />
        </div>
        <div className="field">
          <label className="label is-small">Quantity</label>
          <Input
            reducers={(q) => Math.max(1, q)}
            className="input is-small"
            type="number"
            name="quantity"
            value={quantity}
          />
        </div>
        <div className="field">
          <label className="label is-small">Price</label>
          <Input
            className="input is-small"
            type="text"
            name="price"
            readOnly
            value={price}
          />
        </div>
        <div className="field">
          <button
            type="button"
            className="button is-small is-danger"
            onClick={() => onRemoval(id)}
          >
            Discard
          </button>
        </div>
      </Collection>
    </div>
  );
}
