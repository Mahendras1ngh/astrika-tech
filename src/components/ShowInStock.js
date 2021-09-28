import React from "react";

function ShowInStock({ instockFunc }) {
  return (
    <div className="checkbox-div">
      <input type="checkbox" onChange={(e) => instockFunc(e.target.checked)} />
      <label>Show only InStock Items</label>
    </div>
  );
}

export default ShowInStock;
