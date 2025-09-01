import { useState } from 'react'
import Logout from './components/Login';
import Login from './components/Logout';
import './index.css'




function App() {
  const [IsLoggedIn ,  setLoggedIn] = useState(true);
  //Early return
  // if(IsLoggedIn){return(<Logout/>)}

  //TERNERY OPERATOR
  // return(
  // <div>
  //   {IsLoggedIn ? <Logout/> : <Login/>}
  // </div>
  // )

// IF-ELSE
//   if(IsLoggedIn){
//     return(<Logout/>)
//   }
//   else{
//     return(<Login/>)
//   }

 
 }

export default App;
