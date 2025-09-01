import React, { useState } from 'react';
import Card from './componants/Card.jsx'
import './index.css';

 
function App() {
  const [name, setName] = useState('');
  return (
    <div>
      <Card title='Card 1' name={name} setName={setName} />
      <Card title ='Card 2'name={name} setName={setName} />
      

      {/* <p>I am inside the COmponent and value of name is{name}</p> */}
    </div>
  )
}

export default App
