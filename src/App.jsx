import { useState } from 'react'
import './main.scss'

const All = (props) => {
  const {setTotal} = props
  const value = Object.values(props).reduce((acc, val) => acc + (typeof val === 'number' ? val : 0), 0);
  setTotal(value)
  return <p>All {value}</p>
}

const Average = (props) => {
  const {good, bad, total} = props
  return <p>Average {total > 0 ? (good - bad) / total : 0}</p>
}

const Positive = (props) => {
  const {good, total} = props
  return <p>Positive {total > 0 ? (good / total) * 100 : 0}</p>
}

const Button = ({handleClick, text}) => {
  return <button onClick={handleClick}>{text}</button>
}

const Statistics = (props) => {
  const {good, bad, total} = props
  return <div className="statistics">
  <p>Average {total > 0 ? (good - bad) / total : 0}</p>
  <p>Positive {total > 0 ? (good / total) * 100 : 0}</p>
  </div>

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

      <Button text="good" handleClick={() => setGood(good + 1)}/>
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)}/>
      <Button text="bad" handleClick={() => setBad(bad + 1)}/>
      </div>


      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <All good={good} bad={bad} neutral={neutral}
      
      
      setTotal={setTotal}/> 
      <Statistics good={good} bad={bad} total={total}/>
    </main>
  )
}

export default App