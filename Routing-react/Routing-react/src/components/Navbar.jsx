import React from "react";
import {Link, NavLink} from 'react-router-dom'

const Navbar =() => {
    return(
      <div>
        <ul>
            <li>
                <NavLink to = '/home' className ={({isActive}) => isActive? "active-link": ""}> Home</NavLink>
            </li>
            <li>
                <NavLink to = '/about'className = {({isActive}) => isActive? 'active-link': ''}> About Page</NavLink>
            </li>
            
        </ul>
      </div>  
    )
}
export default Navbar; 