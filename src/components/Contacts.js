import React from 'react'
import contacts from '../contacts.json'
import { useState } from 'react'


function Contacts() {
    const [newContacts, setContacts] = useState(contacts.slice(0,6))

    function handleAdd(){
        let randomContact = contacts[Math.floor(Math.random() * contacts.length)]
        let newArray = [randomContact, ...newContacts]
        setContacts(newArray)
    }

    function handleSortName() {
        let clone = JSON.parse(JSON.stringify(newContacts))
        clone.sort((first, second) => {
            if (first.name > second.name) {
                return 1
            }
            else if (first.name < second.name) {
                return -1
            }
            else {
                return 0
            }
        })

        // Updating the state 'allPeople' with the sorted list
        setContacts(clone)

    }

    function handleSortPopu(){
        let clone2 = JSON.parse(JSON.stringify(newContacts))
        clone2.sort((first, second) => {
            if (first.popularity > second.popularity) {
                return 1
            }
            else if (first.popularity < second.popularity) {
                return -1
            }
            else {
                return 0
            }
        })

        // Updating the state 'allPeople' with the sorted list
        setContacts(clone2)
    }

    function handleDelte(id) {
        let filteredHumans = newContacts.filter((elem) => {
            return elem.id !== id
        })
        // Updating the state 'allPeople' with the filtered list
        setContacts(filteredHumans)
    }


    console.log(contacts)
    return (
        <div className="table">
            <h1>IronContacts</h1>
            <button onClick={handleAdd}>Add random contact</button>
            <button onClick={handleSortName}>sort by name</button>
            <button onClick={handleSortPopu}>sort by Popularity</button>
        {
            newContacts.map((elem, index) => {

            return (
                <table key={`${elem.id}${index}`}>
                    <tr>
                        <th>
                            Picture
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Popularity
                        </th>
                        <th>
                            Won
                        </th>
                        <th>
                            Oscar
                        </th>
                        <th>
                            Actions
                        </th>
                    </tr>
                    <tr className="info">
                        <td>
                            <img src={elem.pictureUrl} alt="pic" height="100px"></img>
                        </td>
                        <td> 
                            {elem.name} 
                        </td>
                        <td>
                            {elem.popularity}
                        </td>  
                        <td>
                            {elem.wonOscar === true && "🏆"}
                        </td>
                        <td>
                            {elem.wonEmmy === true && "🏆"}
                        </td>
                        <td>
                            <button onClick={() => {handleDelte(elem.id)}}>Delete</button>
                        </td>
                    </tr>
                </table>   
            )
        })
    }
    </div>
    )
}

export default Contacts