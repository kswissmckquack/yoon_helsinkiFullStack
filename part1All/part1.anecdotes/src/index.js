import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, label}) => {
  return(
    <button onClick={handleClick}>{label}</button>
  )
}

const Votes = (props) => {
    console.log(props)
    if(props.selected === 0){
      return(
        <>
        <p> has {props.votes[props.selected]} votes </p>
        <Button handleClick={props.handleZeroVote} label="Vote" />
        </>
      )
    }
    if(props.selected === 1){
      return(
        <>
        <p> has {props.votes[props.selected]} votes </p>
        <Button handleClick={props.handleFirstVote} label="Vote" />
        </>
      )
    }
    if(props.selected === 2){
      return(
        <>
        <p> has {props.votes[props.selected]} votes </p>
        <Button handleClick={props.handleSecondVote} label="Vote" />
        </>
      )
    }
    if(props.selected === 3){
      return(
        <>
        <p> has {props.votes[props.selected]} votes </p>
        <Button handleClick={props.handleThirdVote} label="Vote" />
        </>
      )
    }
    if(props.selected === 4){
      return(
        <>
        <p> has {props.votes[props.selected]} votes </p>
        <Button handleClick={props.handleFourthVote} label="Vote" />
        </>
      )
    }
    return(
      <>
        <p> has {props.votes[props.selected]} votes </p>
        <Button handleClick={props.handleFifthVote} label="Vote" />
      </>
    )
}

const MaxVote = (props) => {
  const max = Math.max(...props.votes)
  const maxIndex = props.votes.indexOf(max)
  return(
    <>
      <h1>Anecdote with most votes</h1>
      <p>
        {props.anecdotes[maxIndex]}
      </p>
      <p>
        Has {max} votes
      </p>
    </>
  )
}



const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(
    Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0)
  )

  const handleRandomAnecdotes = () => {
      setSelected(Math.floor(Math.random()*anecdotes.length))
  }
{/* A lot of repetetive code here should pass in index to handleFunction and increase array at that index*/}
  const handleZeroVote = () => {
    const newVotes = [...votes]
    newVotes[0]+=1
    setVotes(newVotes)
  }
  const handleFirstVote = () => {
    const newVotes = [...votes]
    newVotes[1]+=1
    setVotes(newVotes)
  }
  const handleSecondVote = () => {
    const newVotes = [...votes]
    newVotes[2]+=1
    setVotes(newVotes)
  }
  const handleThirdVote = () => {
    const newVotes = [...votes]
    newVotes[3]+=1
    setVotes(newVotes)
  }
  const handleFourthVote = () => {
    const newVotes = [...votes]
    newVotes[4]+=1
    setVotes(newVotes)
  }
  const handleFifthVote = () => {
    const newVotes = [...votes]
    newVotes[5]+=1
    setVotes(newVotes)
  }


  return (
    <div>
      <h1>Anecdote of the Day</h1>
      {anecdotes[selected]}<br></br>
      <Votes
        votes={votes}
        selected={selected}
        handleZeroVote={handleZeroVote}
        handleFirstVote={handleFirstVote}
        handleSecondVote={handleSecondVote}
        handleThirdVote={handleThirdVote}
        handleFourthVote={handleFourthVote}
        handleFifthVote={handleFifthVote}
      />
      <Button handleClick={handleRandomAnecdotes} label="Random Anecdote" />
      <MaxVote votes={votes} anecdotes={anecdotes} selected={selected} />
    </div>
  )
}

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
