import './App.css'
import Search from "./pages/Search"
import { useState } from 'react'

function Home() {

    const [guns, setGuns] = useState(gunsJson)
    const [gunsFound, setGunsFound] = useState(gunsJson)

    function SearchForGun (string) {
        let searchedGuns; 

        if (string === "") {
            searchedGuns = gunsFound
        }
        else {
            searchedGuns = gunsFound.filter((gun) => {
                return gun.name.match(string)
            })
        }

        setGuns(searchedGuns)
    }


  return (
    <>
      <Search SearchForGun={SearchForGun}/>
    </>
  )
}

export default Home
