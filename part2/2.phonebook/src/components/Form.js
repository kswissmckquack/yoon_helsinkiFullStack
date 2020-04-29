import React, { useState } from 'react'

const Form = ({addPerson,newName,handleNewName,newPhoneNumber,handleNewPhoneNumber}) => {
  return(
    <form onSubmit={addPerson}>
      <div>
      <h2>Add New Entry</h2>
        name: <input value={newName} onChange={handleNewName} /><br></br>
        phoneNumber: <input value={newPhoneNumber} onChange={handleNewPhoneNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default Form
