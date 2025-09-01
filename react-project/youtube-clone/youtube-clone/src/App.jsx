import React from 'react'
import Navbar from './Componants/Navbar/Navbar'
import { Routes , Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import video from './Pages/Video/Video'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path ='/' element = {<Home/>} />
        <Route path ='/video/:categoryId/:videoId' element = {<video/>} />

      </Routes>
    </div>
  )
}

export default App