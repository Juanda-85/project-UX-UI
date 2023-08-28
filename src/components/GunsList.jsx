import React, { useState } from "react";
import GunsDisplay from "./GunsDisplay";
import gunsJson from "./../data.json";
import "./GunsDisplay.css"

function GunsList() {
  const [guns, setGuns] = useState(gunsJson);
  const [addedGuns, setAddedGuns] = useState(0);

  const toggleAddedToCart = (id) => {
    const gunsCopy = [...guns];

    gunsCopy.forEach((gun) => {
      if (gun._id === id) {
        gun.isAdded = gun.isAdded ? false : true;

        if (gun.isAdded) setAddedGuns(addedGuns + 1);
        else setAddedGuns(addedGuns - 1);
      }
    });

    setGuns(gunsCopy);
  };

  return (

    <div>
      <div className="pageContainer"> 
        <h1>GUNS'R'US</h1>
        <p>Total Guns in Cart: {addedGuns}</p>
      </div>
      <div className="gunsDisplay">
        {guns.map((gun) => {
          return (
            <GunsDisplay
              key={gun._id}
              gun={gun}
              toggleAddedToCart={toggleAddedToCart}
            />
          );
        })}
      </div>
    </div>

  );
}

export default GunsList;