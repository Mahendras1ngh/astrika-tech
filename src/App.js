import React, { useState } from "react";
import { categoryList, test } from "./data";
import Category from "./components/Category";
import ShowInStock from "./components/ShowInStock";
import FoodList from "./components/FoodList";

function App() {
  const [selected, setSelected] = useState("");
  const [inStock, setInStock] = useState(false);
  return (
    <div className="container">
      <h1 className="title">Welcome to Foodie Club</h1>
      <Category data={categoryList} selectedFunc={(val) => setSelected(val)} />
      <ShowInStock instockFunc={(val) => setInStock(val)} />
      <FoodList
        data={selected ? test.filter((i) => i.category === selected) : test}
        inStock={inStock}
      />
    </div>
  );
}

export default App;
