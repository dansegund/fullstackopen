import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  console.log('Header props:', props)
  return <h1>{props.course}</h1>
 }

const Part = (props) => {
  console.log('Part props:', props)
  return (
    <div>
      <p>{props.part} {props.ex}</p>
    </div>
  )
}

const Content = (props) => {
  console.log('Content props:', props)
  return (
    <div>
    <Part part={props.part1} ex={props.ex1} />
    <Part part={props.part2} ex={props.ex2} />
    <Part part={props.part3} ex={props.ex3} />
   
    </div>
  )
}

const Total = (props) => {
  console.log('Total props:', props)
  return (
    <div>
    <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <Header course={course} />
      <Content part1={parts[0].name} ex1={parts[0].exercises} part2={parts[1].name} ex2={parts[1].exercises} part3={parts[2].name} ex3={parts[2].exercises} />
      <Total ex1={parts[0].exercises} ex2={parts[1].exercises} ex3={parts[2].exercises} />
    </div>
  )

}


ReactDOM.render(<App />, document.getElementById('root'));

