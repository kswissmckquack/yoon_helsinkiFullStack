import React from 'react';

const Total = ({ course }) => {
  const sum = course.parts.reduce((s, p) => {
    return s + p.exercises
  },0)
  return(
    <p><strong>Number of exercises {sum}</strong></p>
  )
}

export default Total
