import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function Hello(props) {
  return <p>Hello, {props.name} {props.age}!</p>;
}

const el = <Hello name="David"  age="43"/>; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);