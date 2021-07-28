import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({good,neutral,bad}) =>{
  const total = good + neutral + bad;
  const average = (good * 1 + -1 * bad) / total;
  const percent = (good * 100) / total;

  if (good === 0 && neutral === 0 && bad === 0) {
    return <div>No feedback given</div>;
  } else {
    return (
      <table>
        <tbody>
          <tr>
            <td>Good: </td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>Neutral: </td>
            <td> {neutral}</td>
          </tr>
          <tr>
            <td>Bad: </td>
            <td> {bad}</td>
          </tr>
          <tr>
            <td>All: </td>
            <td> {total}</td>
          </tr>
          <tr>
            <td>Average: </td>
            <td> {average}</td>
          </tr>
          <tr>
            <td>Positive: </td>
            <td> {percent} %</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

const Buttons = ({props,name}) => <button onClick={props}>{name} </button>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

const Good = () => setGood(good+1);
const Bad =() => setBad(bad+1);
const Neutral = () => setNeutral(neutral+1);

  return (
    <div>
      <h1>Give feedback</h1>
      <br></br>
      <Buttons props={Good} name="good"/>
      <Buttons props={Neutral}name="neutral"/>
      <Buttons props={Bad}name="bad"/>
      <br></br>
      <strong>
      <h1>Statistics</h1>
      <div><Statistics good={good} bad={bad} neutral={neutral} /></div>  
      </strong>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)