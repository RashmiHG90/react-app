import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter.jsx';
import { useSelector } from 'react-redux';
import CounterIncrement from './CounterIncrement.jsx';
import CounterDecrement from './CounterDecrement.jsx';
import DynamicCounterIncrement from './DynamicCounterIncrement.jsx';
import DynamicCounterDecrement from './DynamicCounterDecrement.jsx';

function App() {

  let gsname = useSelector(gs=>gs.simpleReducer.name)

  return (
    <>
      <h2>RTK simple example done by {gsname}</h2>
      <Counter></Counter>
      <CounterIncrement></CounterIncrement>
      <CounterDecrement></CounterDecrement>
      <DynamicCounterIncrement></DynamicCounterIncrement>
      <DynamicCounterDecrement></DynamicCounterDecrement>
    </>
  )
}

export default App
