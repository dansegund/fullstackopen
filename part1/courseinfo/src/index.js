import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  console.log('Header props:', props)
  return <h1>{props.course.name}</h1>
 }

const Part = (props) => {
  console.log('Part props:', props)
  return (
    <div>
      <p>{props.part.name} {props.part.exercises}</p>
    </div>
  )
}

const Content = (props) => {
  console.log('Content props:', props)
  return (
    <div>
    <Part part={props.parts.parts[0]} />
    <Part part={props.parts.parts[1]} />
    <Part part={props.parts.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  console.log('Total props:', props)
  return (
    <div>
    <p>Number of exercises {props.parts.parts[0].exercises + props.parts.parts[1].exercises + props.parts.parts[2].exercises} </p>
    </div>
  )
}

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
      <Header course={course} />
      <Content parts={course} />
      <Total parts={course} />
    </div>
  )

}


ReactDOM.render(<App />, document.getElementById('root'));

