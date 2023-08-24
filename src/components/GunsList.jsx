import gunsJson from "./../data.json" 
import { useState } from "react";
import GunsDisplay from "./GunsDisplay";

function GunsList (){

  const [guns, setGuns] = useState(gunsJson)

  
 
    return (
      <div>
        <h1>GUNS'R'US</h1>
      {guns.map((gun) => {
        return (
          <GunsDisplay key={gun.id} gun={gun}/>
        )
      })}
      </div>
    );
  };
  
  export default GunsList;
  
  
  {/* <Search SearchForGun={SearchForGun}/> */}
    // function SearchForGun (string) {
  //     let searchedGuns; 

  //     if (string === "") {
  //         searchedGuns = gunsFound
  //     }
  //     else {
  //         searchedGuns = gunsFound.filter((gun) => {
  //             return gun.name.match(string)
  //         })
  //     }

  //     setGuns(searchedGuns)
  // }