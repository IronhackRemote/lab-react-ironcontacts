import './App.css'
import people from './contacts.json'
import Contact from './components/Contact'

const contacts = [people[0], people[1], people[2], people[3], people[4]]

function App() {
	return (
		<div className="App">
			<h1>Ironcontacts</h1>
			<Contact />‚
		</div>
	)
}
export default App
