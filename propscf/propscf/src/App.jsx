
import './App.css'
import React, { useState } from 'react'
import Button from './compo/Button.jsx'

function App() {
  const[count, setCount] = useState(0);

  function handClick(){
    setCount(count+1);
  }

  return (
    <div>
      <Button handClick={handClick} text="click me">
          <h1>{count}</h1>
      </Button>

      <Button handClick={() => setCount(0)} text="Reset Count">
          <p>Click to reset</p>
      </Button>

    </div>
    
  )
}

export default App
