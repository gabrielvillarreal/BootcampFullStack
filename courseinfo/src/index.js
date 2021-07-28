import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) => <h1>{course}</h1>
const Content = (props) => <p><strong>Parte:</strong> {props.parte1 }  <strong>   Nº ejercicio:</strong> {props.exercises1} </p>
const Total = (props) => {
  let suma = props.nro1 + props.nro2 + props.nro3;
  return (
    <p>
      <strong>Nro of Exercises: </strong>
      {props.nro1} + {props.nro2} + {props.nro3} = {suma}
    </p>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
}

return (
    <div>
      <Header course={course.name} />
      <p>
        <Content parte1={course.parts[0].name} exercises1={course.parts[0].exercises}/>
      </p>
      <p>
        <Content parte1={course.parts[1].name} exercises1={course.parts[1].exercises}/>
      </p>
      <p>
        <Content parte1={course.parts[2].name} exercises1={course.parts[2].exercises}/>
      </p>
      <p><Total nro1={course.parts[0].exercises}  nro2={course.parts[1].exercises}  nro3={course.parts[2].exercises}/></p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
