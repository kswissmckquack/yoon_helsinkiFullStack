import React, { useState, useEffect } from 'react'
import '../app.css'
import axios from 'axios'
import Filter from './Filter'
import Form from './Form'
import Numbers from './Numbers'
import Success from './Success'
import Error from './Error'
import personService from '../services/persons'


const App = () => {
  const [ persons, setPersons ] = useState([])

  useEffect(() => {
    personService.getAll().then(persons => setPersons(persons))
  }, [])

  const [ newName, setNewName ] = useState('')
  const [ newPhoneNumber, setNewPhoneNumber] = useState('')
  const [ showAll, setShowAll] = useState(true)
  const [ searchText, setSearchText] = useState('')
  const [ message, setMessage] = useState('')
  const [ error, setError] = useState('')

  const handleNewName = (event) => setNewName(event.target.value)
  const handleNewPhoneNumber =(event) => setNewPhoneNumber(event.target.value)
  const handleSearchText = (event) => {
    setSearchText(event.target.value)
    console.log(persons.filter(person => person.name.includes(searchText) ))
    searchText !== null || searchText !== '' ? setShowAll(false) : setShowAll(true)
  }

  const personsToShow = showAll
    ? persons
    : persons.filter(person => person.name.toUpperCase().includes(searchText.toUpperCase() ))

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      phoneNumber: newPhoneNumber
    }
    if(persons.filter(p => p.name === newName).length > 0){
        const oldPerson = persons.filter(p => p.name === newName)[0]
        const updatePerson = {...oldPerson, phoneNumber:newPhoneNumber}
        console.log(updatePerson,updatePerson.id)
        window.alert(`${newName} is already added to phone book, replace the old number with a new one?`)

        personService.update(updatePerson.id,updatePerson).then(returnedPerson => {
          setPersons(persons.map(p => p.id === returnedPerson.id ? returnedPerson : p))
          setNewName('')
          setNewPhoneNumber('')
          setMessage(`${returnedPerson.name} number updated successfully!`)
          setTimeout(() => {setMessage('')},5000)
        }).catch(error => setError(`${personObject.name} was already removed from the server`))
    } else {
      personService.create(personObject)
      .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewPhoneNumber('')
          setMessage(`${returnedPerson.name} added successfully!`)
          setTimeout(() => {setMessage('')},5000)
      })
      .catch(error => {
        console.log(error.response.data)
        setError(error.response.data)
      })
    }
  }

  const removePerson = (id) => {
    personService.remove(id).then(returnedPerson => {
      setPersons(persons.filter(p => p.id !== id))
    })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchText={searchText} handleSearchText={handleSearchText} />
      <Success message={message} />
      <Error error={error} />
      <Form
        addPerson={addPerson}
        newName={newName}
        handleNewName={handleNewName}
        newPhoneNumber={newPhoneNumber}
        handleNewPhoneNumber={handleNewPhoneNumber}
      />
      <Numbers persons={personsToShow} removePerson={removePerson}/>
    </div>
  )
}

export default App
