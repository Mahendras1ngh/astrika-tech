import React from "react";

function Item({ data }) {
  return (
    <div className="item-div">
      <p className="item-name">{data.name}</p>
      <p className="item-price">{data.price}</p>
    </div>
  );
}

export default Item;
