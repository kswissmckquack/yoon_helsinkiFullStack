import React from 'react'

const Success = ({message}) => {
  if(message === null  || message === ''){
    return null
  }
  return(<p className='success'>{message}</p>)
}

export default Success
