import React from "react";
import Item from "./Item";

function FoodList({ data, inStock }) {
  return (
    <div>
      {data.map((d) => (
        <div key={d.id}>
          <p className="category">{d.category}</p>
          <div>
            {inStock
              ? d.items
                  .filter((i) => i.inStock === true)
                  .map((i) => <Item data={i} key={i.id} />)
              : d.items.map((i) => <Item data={i} key={i.id} />)}
          </div>
        </div>
      ))}
    </div>
  );
}

export default FoodList;
