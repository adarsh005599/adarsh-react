import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const Myveriable = (
  <a href="https://www.google.com" target ='_blank'>
    visit google
  </a>
)

const reactElement = React.createElement(
  'a',
  {href: 'https://www.google.com', target: '_blank'},
  'Please Explore--Me--Google'
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {Myveriable}
    <br />
    {reactElement}
  </StrictMode>,
)
