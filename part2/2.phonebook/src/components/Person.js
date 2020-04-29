import React, { useState } from 'react'

const Person = ({person,removePerson}) => {
  return(
    <>
    <p>{person.name} {person.phoneNumber}</p>
    <button onClick={removePerson} value={person.id}>Delete</button>
    </>
  )
}

export default Person
