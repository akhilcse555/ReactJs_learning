import { useState } from 'react' // hook property usestate
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {

  const [counter, setcounter] = useState(15) // hooks how to use declare it and able to use as per requirement.

  //let counter=5;

  const addvalue = () => {
    console.log("Added value is",Math.random());
    //return Math.random();
    setcounter(counter + 1);
  }

  return (
    <>
    <h1> Akhil Shahni</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={addvalue}>Add value</button>
    <br />
    <button>Remove value {counter}</button>
    <p>{counter}</p>

    </>
  )
}

export default App
