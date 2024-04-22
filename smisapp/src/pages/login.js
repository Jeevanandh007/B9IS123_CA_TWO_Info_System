import React from "react";
 
//import './Login.css'
import user_icon from './Assets/person.png'
//import email_icon from '../Assets/email.png'
import password_icon from './Assets/password.png'
//import Dashboard from "./pages/dashboard";

const Login =() => {
    return (
        <div className="container">
            <h2>
                LOGISTICS TEAM USER LOGIN
            </h2>
            <div className="header">
                <div className="text">Login</div>
            </div>

            <div className="inputs">
                <div className="input">
                    <img src={user_icon} alt=""/>
                    <input type="text" placeholder="Name"/>
                </div>

                <div className="input">
                    <img src={password_icon} alt=""/>
                    <input type="text" placeholder="Password"/>
                </div>
            </div>
        
            <div className="submit-container">
                <div className="submit">Login</div>
            </div>
        </div>
    )
}

export default Login