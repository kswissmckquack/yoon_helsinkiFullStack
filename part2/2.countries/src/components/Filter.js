import React from 'react'

const Filter = ({searchText, handleSearchText}) => {
  return(
    <div>
      find countries <input value={searchText} onChange={handleSearchText} />
    </div>
  )
}

export default Filter
