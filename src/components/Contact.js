import people from '../contacts.json'
import { useState } from 'react'

function Contact(props) {
	const [allContacts, setContact] = useState(people.slice(0, 6))

	function handleAdd() {
		let randomPerson = people[Math.floor(Math.random() * people.length)]
		let newArray = [randomPerson, ...allContacts]
		setContact(newArray)
	}

	function handleSortName() {
		let clone = JSON.parse(JSON.stringify(allContacts))
		clone.sort((first, second) => {
			if (first.name > second.name) {
				return 1
			} else if (first.name < second.name) {
				return -1
			} else {
				return 0
			}
		})

		setContact(clone)
	}
	function handleSortPopularity() {
		let clone = JSON.parse(JSON.stringify(allContacts))
		clone.sort((first, second) => {
			if (first.popularity > second.popularity) {
				return -1
			} else if (first.popularity < second.popularity) {
				return 1
			} else {
				return 0
			}
		})

		setContact(clone)
	}

	function handleDelete(id) {
		let filteredContacts = allContacts.filter((elem) => {
			return elem.id !== id
		})
		setContact(filteredContacts)
	}

	return (
		<div>
			<button onClick={handleAdd}>Add new</button>
			<button onClick={handleSortName}>Sort by Name</button>
			<button onClick={handleSortPopularity}>Sort by Popularity</button>
			<table class="actor">
				<tr>
					<td class="data">Picture</td>
					<td class="data">Name</td>
					<td class="data">Popularity</td>
					<td class="data">Won Oscar</td>
					<td class="data">Won Emmy</td>
				</tr>
			</table>
			<ul>
				{allContacts.map((elem) => {
					return (
						<table class="actor">
							<tr>
								<td>
									<img src={elem.pictureUrl} alt="" />
								</td>

								<td key={elem.id}>{elem.name}</td>
								<td>{elem.popularity.toFixed(2)}</td>
								<td>{elem.wonOscar && '🏆'}</td>
								<td>{elem.wonEmmy && '😊'}</td>
								<td>
									<button
										onClick={() => {
											handleDelete(elem.id)
										}}
									>
										Delete
									</button>
								</td>
							</tr>
						</table>
					)
				})}
			</ul>
		</div>
	)
}

export default Contact
