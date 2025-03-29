import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {

  let arr = "Akhil"

  return (
    <>
    <div className="text-center text-3xl text-blue-500 mb-4" >
      Hello Tailwind!
    </div>
    <Card username={arr} age="24"/>
    <Card />
    </>
  )
}

export default App
