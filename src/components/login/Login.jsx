import React, { useState } from 'react';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { BsEyeSlash } from "react-icons/bs";
import { BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import '../../assets/styles/Login.css';


const Login = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const [update, setUpdate] = useState('')
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isVisible, setVisible] = useState(false);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (data.email === '' || data.password === ''){
            alert('Please All fields are fill')
        } else {

            alert("Form submittted successfully")
        }
        validateEmail();
        validatePassword();
        setUpdate(data);
        console.log(data)
        setData({
            email: "",
            password: ""
        });
      
    }
    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!data.email.trim()) {
          setEmailError('Email is required');
        } else if (!emailRegex.test(data.email)) {
            setEmailError('Invalid email address');
        } else {
            setEmailError('')
        }
      };
      const validatePassword = () => {
        if (!data.password.trim()) {
          setPasswordError('Password is required');
        } else if (data.password.length < 6) {
            setPasswordError('Password must be at least 6 characters');
        } else if (data.password.length > 20) {
            setPasswordError('Password cannot exceed 20 characters');
        } else {
            setPasswordError('')
        }
      };
 
    const toggle =()=>{
        setVisible(!isVisible);
    }
   
    return (
        <>
        <div className="container_box">
        <div className="form_box">
            <h2><strong>Login</strong></h2>
            <form autoComplete="off">
                <ul className="ul_list">
                <MdEmail className="icon_email"/>
                    <li>
                    <input
                    type="email"
                    id='email'
                    name='email'
                    placeholder='Enter the email'
                    value={data.email}
                    onChange={handleChange}
                    onBlur={validateEmail} 
                    required
                  
                />{emailError && <p className="para_text">{emailError}</p>}
                </li>
                <span onClick={toggle}>
                    { isVisible?  <BsEyeFill className="eye_show"/> : <BsEyeSlash className="eye_show"/> }
                
                </span>
                <RiLockPasswordLine className="icon_password"/>
                    <li>
                    <input
                    type={isVisible ? "text" : "password"}
                    id='password'
                    name='password'
                    placeholder='Enter the password'
                    value={data.password}
                    onChange={handleChange}
                    onBlur={validatePassword}
                   
           
                />{passwordError && <p className="para_text">{passwordError}</p>}
                    </li>
                    
                 <li style={{marginTop: "10px"}}>
                    <strong>Forgot password?</strong>
                </li>  
                <li>
                <button className="btn_text" onClick={handleSubmit}>Login</button>
                </li>
                </ul>
            </form>
         <p style={{textAlign: "center"}}>
            <strong>Don't have an account?</strong>
             <Link to="/signup"> <strong>Signup</strong></Link>
         </p>
            <h3 className="head3">Email Field Data: <span style={{ color: "rgb(101 52 217)" }}>{update.email}</span></h3>
            {/* <h3 className={styles.head3}>Password Field Data: <span style={{ color: "red" }}>{update.password}</span></h3> */}
        </div>
        </div>
        </>
  )
}

export default Login
