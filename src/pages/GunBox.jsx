import React from "react";

function GunBox(props){
    const { id, description, in_stock, price } = props.gun;
    const gunName = props.gun.name;
}
return (
    <div>
      <p>{gunName}</p>

      <p>description: {description}</p>
      <p>in_stock: {in_stock}</p>
        <p>Price: {price} kcal</p>
</div>
);
      export default GunBox;