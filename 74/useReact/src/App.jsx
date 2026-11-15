import Welcome from './Welcome'
import './App.css'
import WelcomeC from './WelcomeC.jsx'
import Clock from './Clock.jsx'

const potus = {
  first:'Donald',
  last:'Trump',
}
function formatName(person) {
  // return `${person.first} ${person.last}`;
  return <span>{person.first} {person.last}</span>
}

function App() {
  return (
    <>
    //<h1>Hello {potus.first} {potus.last}</h1>
    <h1>Hello {formatName(potus)}</h1>

      <Welcome first={potus.first} last={potus.last} />
      <WelcomeC first="Donald" last="Trump" />
      <Clock />
    </>
  )
}

export default App
