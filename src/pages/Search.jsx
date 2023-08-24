import { Divider } from "antd"
import { useState } from "react"

function Search () {

    const [searchInput, setSearchInput] = useState("")

    function submitSearch(event) {
        event.preventDefault()
        setSearchInput(event.target.value) 

        props.searchForGun(event.target.value)
    }


    return (
        <Divider>
            <input placeholder="Search" value={searchInput} onChange={(event) => submitSearch(event)}/>
        </Divider>
    )
}

export default Search 