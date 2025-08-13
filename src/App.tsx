import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card/card.tsx'

function App() {

  return (
    <div>
      <Card showSettings={true} />
    </div>
  )
}

export default App
