import './index.css'
import React from 'react'

function App() {
    const [count, increaseCount] = React.useState(0);

  return (

     <div className='counter-container'>
      <p id='para'>You have Clicked {count} times</p>
      <button id='btn' onClick={() => {increaseCount(count+1)}}>Click Me</button>
    
     </div>
  )
}

export default App;
