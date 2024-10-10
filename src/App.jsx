import { useEffect, useState } from 'react'
import './main.scss'

const All = (props) => {

}

const Average = (props) => {
  const { good, bad, total } = props
  return <p>Average {total > 0 ? (good - bad) / total : 0}</p>
}

const Positive = (props) => {
  const { good, total } = props
  return <p>Positive {total > 0 ? (good / total) * 100 : 0}</p>
}

const Button = ({ handleClick, text }) => {
  console.log("click")
  return <button onClick={handleClick}>{text}</button>
}

const StatisticLine = (props) => {
  const {text, value} = props

switch (text) {
  case "good":
    return <p>good {value}</p>
    break;
  case "neutral":
    return <p>neutral {value}</p>
    break;
  case "bad":
    return <p>bad {value}</p>
    break;
  case "all":
    return <p>all {value}</p>
    break;  
  case "average":
    return <p>average {value}</p>
    break;  
  case "positive":
    return <p>positive {value}</p>
    break;  
  default:
    return <></>
    break;
}
}

const Statistics = (props) => {
  const { good, bad, neutral, total, setTotal } = props
  const values = {good, bad, neutral}
  const all = Object.values(values).reduce((acc, val) => acc + (typeof val === 'number' ? val : 0), 0);

  useEffect(() => {
     setTotal(all)
  })
  
  if (good || bad || neutral > 0) {
    return  <div className="statistics">
              <h2>statistics</h2>
              <StatisticLine text="good" value={good}/>
              <StatisticLine text="neutral" value={neutral}/>
              <StatisticLine text="bad" value={bad}/>
              <StatisticLine text="all" value={all}/>
              <StatisticLine text="average" value={total > 0 ? (good - bad) / total : 0}/>
              <StatisticLine text="positive" value={total > 0 ? (good / total) * 100 : 0}/>

            </div>
  }
  else {
    return "No feedback given"
  }

}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)

  return (
    <main>
      <h1>give feedback</h1>

      <div className='grid'>

        <Button text="good" handleClick={() => setGood(good + 1)} />
        <Button text="neutral" handleClick={() => setNeutral(neutral + 1)} />
        <Button text="bad" handleClick={() => setBad(bad + 1)} />
      </div>

      <Statistics good={good} bad={bad} neutral={neutral} total={total} setTotal={setTotal} />
    </main>
  )
}

export default App