import React, { useState } from "react";
import GunsDisplay from "./GunsDisplay";
import gunsJson from "./../data.json";

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
      <h1>GUNS'R'US</h1>
      {guns.map((gun) => {
        return (
          <GunsDisplay
            key={gun._id}
            gun={gun}
            toggleAddedToCart={toggleAddedToCart}
          />
        );
      })}
      <p>Total Guns in Cart: {addedGuns}</p>
    </div>
  );
}

export default GunsList;