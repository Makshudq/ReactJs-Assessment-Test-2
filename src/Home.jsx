import React, { useState } from "react";

function Home() {
  const pack = [
    // array of items to be filtered based on search input
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon",
    "lichi",
    "Avacado",
  ];

  const [items, setitems] = useState(pack); // state for managing array of items and displaying it
  const [input, setinput] = useState(""); // state for handling inputs

  function handleChnage(e) {
    setinput(e.target.value);

    let filterItem = pack.filter(
      // filtering item based on available array or items
      (item) => item.toLowerCase().includes(e.target.value)
    );
    setitems(filterItem);
  }

  return (
    <div>
      <div className="container">
        <label htmlFor="input1">Search</label>
        <input
          type="text"
          id="input1"
          value={input}
          onChange={(e) => handleChnage(e)}
        />

        <div className="list_div" style={{ marginTop: ".5rem" }}>
          {items.map((item, index) => (
            <li key={index}>
              {item} <br />
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
