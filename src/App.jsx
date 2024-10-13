import { useEffect, useState } from 'react'
import './main.scss'


const Button = ({ handleClick, text }) => {

  return <button onClick={handleClick}>{text}</button>
}

const Col1 = ({ text }) => {
  return <td>{text}</td>
}

const Col2 = ({ value }) => {
  return <td>{value}</td>
}

const StatisticLine = (props) => {
  const { text, value } = props


  switch (text) {
    case "good":
      return <>
        <Col1 text={text} />
        <Col2 value={value} />
      </>

      break;
    case "neutral":
      return <>
        <Col1 text={text} />
        <Col2 value={value} />
      </>
      break;
    case "bad":
      return <>
        <Col1 text={text} />
        <Col2 value={value} />
      </>
      break;
    case "all":
      return <>
        <Col1 text={text} />
        <Col2 value={value} />
      </>
      break;
    case "average":
      return <>
        <Col1 text={text} />
        <Col2 value={value} />
      </>
      break;
    case "positive":
      return <>
        <Col1 text={text} />
        <Col2 value={value} />
      </>
      break;
    default:
      return <></>
      break;
  }





}

const Statistics = (props) => {
  const { good, bad, neutral, total, setTotal } = props
  const values = { good, bad, neutral }
  const all = Object.values(values).reduce((acc, val) => acc + (typeof val === 'number' ? val : 0), 0);

  useEffect(() => {
    setTotal(all)
  })

  if (good || bad || neutral > 0) {
    return <table className="statistics">

      <tbody>
        <tr>
          <StatisticLine text="good" value={good} />
        </tr>
        <tr>
          <StatisticLine text="neutral" value={neutral} />
        </tr>
        <tr>
          <StatisticLine text="bad" value={bad} />
        </tr>
        <tr>
          <StatisticLine text="all" value={all} />
        </tr>
        <tr>
          <StatisticLine text="average" value={total > 0 ? (good - bad) / total : 0} />
        </tr>
        <tr>
          <StatisticLine text="positive" value={total > 0 ? (good / total) * 100 : 0} />
        </tr>
      </tbody>




    </table>





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
      <h2>statistics</h2>
      <Statistics good={good} bad={bad} neutral={neutral} total={total} setTotal={setTotal} />
    </main>
  )
}

export default App