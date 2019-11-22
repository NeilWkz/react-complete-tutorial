import React, { useState } from 'react'
import './App.css'
import Person from './Person/Person'

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { id: '0', name: 'Neil', age: '35' },
      { id: '1', name: 'Frankie', age: '25' },
      { id: '2', name: 'Steve', age: '45' },
    ],
    otherState: 'some Other Value',
    showPersons: false,
  })

  const [otherState, setOtherState] = useState('some Other Value')

  const nameChangedHandler = (event, id) => {
    const personIndex = personsState.persons.findIndex(p => {
      return p.id === id
    })
    const person = {
      ...personsState[personIndex]
    }

    person.name = event.target.value

    persons = [...personsState]
    persons[personIndex] = person

    setPersonsState({
      persons: persons
    })
  }

  const deletePersonsHandler = personIndex => {
    // const persons = personsState.persons.slice()
    const person = [...personsState.persons]
    persons.splice(personIndex, 1)
    setPersonsState({ ...personsState, persons: persons })
  }

  const togglePersonsHandler = () => {
    const doesShow = personsState.showPersons
    setPersonsState({
      ...personsState,
      showPersons: !doesShow,
    })
  }

  const btnStyle = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
  }
  let persons = null
  if (personsState.showPersons) {
    persons = personsState.persons.map((person, index) => {
      return (
        <Person
          click={() => deletePersonsHandler(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => nameChangedHandler (event, person.id)}
        />
      )
    })
  }

  return (
    <div className="App">
      <h1>Hi I'm a React App</h1>
      <p>this is really working</p>
      <button style={btnStyle} onClick={togglePersonsHandler}>
        Toggle People
      </button>
      {persons}
    </div>
  )
  //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m a React APP Baybee!!!'));
}

export default app
