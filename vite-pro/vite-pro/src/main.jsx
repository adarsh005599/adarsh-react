// filepath: c:\Users\Hp\Downloads\adarsh-react\vite-pro\vite-pro\src\main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const Myveriable = (
  <a href="https://www.google.com" target ='_blank'>
    visit google
  </a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Myveriable/>
  </React.StrictMode>
  
)