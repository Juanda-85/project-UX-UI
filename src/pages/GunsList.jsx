import React from 'react';

const GunList = () => {
    // Array of blasters data

    // const blasters = [
    //   {
    //     "id": "001",
    //     "name": "Blaster X1",
    //     "description": "A futuristic blaster with flashing lights and sound effects.",
    //     "in_stock": true,
    //     "price": "$24.99"
    //   },
      
    // ];
  
    return (
      <div>
        <h1>Gun List</h1>
        <ul>
          {guns.map(gun => (
            <li key={gun.id}>
              <h2>{gun.name}</h2>
              <p>In Stock: {gun.in_stock ? 'Yes' : 'No'}</p>
              <p>Price: {gun.price}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default GunList;

