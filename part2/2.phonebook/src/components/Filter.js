import React, { useState } from 'react'

const Filter = ({searchText,handleSearchText}) => {
  return(
    <div>
      filter shown with: <input value={searchText} onChange={handleSearchText}/>
    </div>
  )
}

export default Filter
