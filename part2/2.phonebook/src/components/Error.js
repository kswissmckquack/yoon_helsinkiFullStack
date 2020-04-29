import React from 'react'

const Error = ({error}) => {
  if(error === null  || error === ''){
    return null
  }
  return(<p className='error'>{error}</p>)
}

export default Error
