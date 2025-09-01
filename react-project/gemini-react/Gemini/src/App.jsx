import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/main'

export const App = () => {
  return (
    <ContextProvider>

    <Sidebar />
    <Main />
    
    
    </ContextProvider>
    
  )
}
export default App
