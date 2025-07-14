import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false)
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  

  function handleDarkModeClick() {
    setIsDarkMode((prevMode) => !prevMode)
  }

  return (
    <>
    {isDarkMode ? (
    <div className="App dark">
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>Light Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
    ) : (
      <div className="App light">
        <header>
          <h2>Shopster</h2>
          <button onClick={handleDarkModeClick}>Dark Mode</button>
        </header>
        <ShoppingList items={itemData} />

      </div>
    )}
    </>
  );
}

export default App;
