import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsIncart] = useState(false)

  function handleClick() {
    setIsIncart(!isInCart)
  }

  const liClassList = ["", "in-cart"]
  const buttonTextList = ["Add to Cart", "Remove From Cart"]
  return (
    <li className={liClassList[Number(isInCart)]}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick}>{buttonTextList[Number(isInCart)]}</button>
    </li> 
  );
}

export default Item;
