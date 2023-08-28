import React, { useState } from "react";
import gunsJson from "./../data.json";
import "./GunsDisplay.css";

function GunsList() {
  const [guns, setGuns] = useState(gunsJson);
  const [addedGuns, setAddedGuns] = useState(0);

  const toggleAddedToCart = (id) => {
    const gunsCopy = [...guns];

    gunsCopy.forEach((gun) => {
      if (gun.id === id) {
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
            <div className={`${!gun.in_stock && "notInStock"}`} key={gun.id}>
              <div className="gunsDisplayContainer">
                {!gun.in_stock && <h4>Not in stock</h4>}
                <img src={gun.image} alt={gun.name} />
                <h4>{gun.name}</h4>
                <div className="innerDiv one">
                  <p>In Stock: {gun.in_stock ? "Yes" : "No"}</p>
                  <p>Price: {gun.price}</p>
                </div>
                <div className="btnDiv">
                  <button onClick={() => toggleAddedToCart(gun.id)}>
                    {gun.isAdded ? (
                      <span>DELETE FROM CART</span>
                    ) : (
                      <span>ADD TO CART </span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GunsList;