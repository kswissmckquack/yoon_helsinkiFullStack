import React, { useState } from 'react'
import Person from './Person'

const Numbers = ({persons,removePerson}) => {
  return(
    <>
      <h2>Numbers</h2>
      {persons.map(person => <Person key={person.name} person={person} removePerson={() => removePerson(person.id)}/>)}
    </>
  )
}

export default Numbers
