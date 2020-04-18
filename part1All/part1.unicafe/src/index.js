import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({header}) =>  <h1>{header}</h1>

const Button = ({handleClick, label}) => {
  return(
    <button onClick={handleClick}>{label}</button>
  )
}

const Statistic = ({label, value}) => {
  return(
    <>
    <tr><td><strong>{label}</strong> :</td><td>{value}</td></tr>
    </>
  )
}

const Statistics = ({header,labels,values}) => {
  console.log(values[4] <= 0)
  {/*values[4]=total I would normally do this as a dictionary*/}
      if(values[4] <= 0){
        return(
          <>
          <Header header={header} />
          <p>No Feedback Given</p>
          </>
        )
      }
      {/*for looping through dictionary was confusing assume it will be covered later on*/}
      return(
        <>
          <Header header={header} />
          <table>
          <tbody>
            <Statistic label={labels[0]} value={values[0]} />
            <Statistic label={labels[1]} value={values[1]} />
            <Statistic label={labels[2]} value={values[2]} />
            <Statistic label={labels[3]} value={values[3]} />
            <Statistic label={labels[4]} value={values[4]} />
            <Statistic label={labels[5]} value={values[5]+' %'} />
          </tbody>
          </table>
        </>
      )
}

const App = () => {

  const header = 'Feedback Form'

  const [clicks, setClicks] = useState({
    good:0,
    percentGood:0,
    neutral: 0,
    percentNeutral: 0,
    bad:0,
    percentBad:0,
    total:0,
    average:0,

  })

  const handleGoodClick = () => {
    const newClicks = {
      ...clicks,
      good: clicks.good + 1,
      percentGood: (clicks.good +1)/(clicks.total + 1)*100,
      percentNeutral: (clicks.neutral)/(clicks.total + 1)*100,
      percentbad: (clicks.bad)/(clicks.total + 1)*100,
      total: clicks.total + 1,
      average: (clicks.total + 1)/3
    }
    setClicks(newClicks)
  }

  const handleNeutralClick = () => {
    const newClicks = {
      ...clicks,
      neutral: clicks.neutral + 1,
      percentGood: (clicks.good)/(clicks.total + 1)*100,
      percentNeutral: (clicks.neutral +1 )/(clicks.total + 1)*100,
      percentbad: (clicks.bad)/(clicks.total + 1)*100,
      total: clicks.total + 1,
      average: (clicks.total + 1)/3
    }
    setClicks(newClicks)
  }

  const handleBadClick = () => {
    const newClicks = {
      ...clicks,
      bad: clicks.bad + 1,
      percentGood: (clicks.good)/(clicks.total + 1)*100,
      percentNeutral: (clicks.neutral)/(clicks.total + 1)*100,
      percentbad: (clicks.bad + 1)/(clicks.total + 1)*100,
      total: clicks.total + 1,
      average: (clicks.total + 1)/3
    }
    setClicks(newClicks)
  }

  return (
    <div>
      <Header header={header} />
      <Button handleClick={handleGoodClick} label="Good" />
      <Button handleClick={handleNeutralClick} label="Neutral" />
      <Button handleClick={handleBadClick} label="Bad" />
      {/*Should be a [{label:,value}] but map() and for() is not working correctly for me*/}
      <Statistics
        header="Statistics"
        labels={["Good","Neutral","Bad","Total","Average","Positive"]}
        values={[clicks.good,clicks.neutral,clicks.bad,clicks.total,clicks.average,clicks.percentGood]}
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
