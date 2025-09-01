import React from 'react'
import './LoginSignup.css'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import user_icon from '../Assets/person.png'

const LoginSignup = () => {
  return (
    <div className=''container>
        <div className="heder">
            <div className="text">Sign Up</div>
            <div className="underline"></div>
        </div>

        <div className="inputs">
            <div className="input">
                <img src = {user_icon} />
                <input type = "name"/>
            </div>
            <div className="input">
                <img src = {email_icon} />
                <input type = "email"/>
            </div>
            <div className="input">
                <img src = {password_icon} />
                <input type = "password"/>
            </div>
        </div>
        <div className="fogot-pass">forgot password? <span>CLick hear</span></div>
        <div className="submit-cont">
            <div className="submit">Sing Up</div>
            <div className="submit">Login</div>
        </div>
    </div>
  )
}

export default LoginSignup