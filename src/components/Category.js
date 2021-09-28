import React from "react";

function Category({ data, selectedFunc }) {
  return (
    <div className="dropdown">
      Select the Category:
      <select onChange={(e) => selectedFunc(e.target.value)}>
        {data.map((c, index) => (
          <option value={c} key={index}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Category;
