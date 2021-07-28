import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Votes = ({votes}) => <p>has {votes} votes</p>
const Button = ({action, text}) => <button onClick={action}>{text}</button>
const Title = ({text}) => <h1>{text}</h1>
const Anecdotes = ({anec})=> <p>{anec}</p>
const MaxAnecdote = ({max}) =><p>has {max} votes</p>

const App = (props) => {
  
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  
  const handleClick = ()=> {
    setSelected(Math.floor(Math.random() * (props.anecdotes.length) ));
  }
  
  const vote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  const max = Math.max(...votes);
  const maxAnecdote = anecdotes[votes.indexOf(max)];

  return (
    <div>
      <Title text="Anecdote of the day" />
      <Anecdotes anec={props.anecdotes[selected]} />
      <Votes votes = {votes[selected]}/>
      <Button action={vote} text="Vote" />
      <Button action={handleClick} text="Next Anecdote"/>
      <Title text="Anecdote with most votes" />
      <Anecdotes anec={maxAnecdote} />
      <MaxAnecdote max = {max} />
    </div>
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

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
