import React, { useState } from 'react';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { BsEyeSlash } from "react-icons/bs";
import { BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import '../../assets/styles/Login.css';


const SignUp = () => {
    const [data, setData] = useState({ email: "", password: "", conpassword: "" });
    const [update, setUpdate] = useState('')
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isVisible, setVisible] = useState(false);
    const [isVisibleCon, setVisibleCon] = useState(false);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (data.email === '' || data.password === '' || data.conpassword === ''){
            alert('Please All fields are fill')
        } else {
            alert("Form submittted successfully")
        }
        validateEmail();
        validatePassword();
        setUpdate(data);
        console.log(data);
        setData({
            email: "",
            password: "",
            conpassword: ""
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
    const togglecon =() => {
        setVisibleCon(!isVisibleCon);
    }
   
    return (
        <>
        <div className="container_box">
        <div className="form_box">
            <h2><strong>Signup</strong></h2>
            <form autoComplete="off">
                <ul className="ul_list">
                <MdEmail className="icon_email"/>
                    <li>
                    <input
                    type="email"
                    id='email'
                    name='email'
                    placeholder='Enter your email'
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
                    placeholder='Create a password'
                    value={data.password}
                    onChange={handleChange}
                    onBlur={validatePassword}
                />{passwordError && <p className="para_text">{passwordError}</p>}
                </li>

                <span onClick={togglecon}>
                    { isVisibleCon?  <BsEyeFill className="eye_show"/> : <BsEyeSlash className="eye_show"/> }
                
                </span>
                <RiLockPasswordLine className="icon_password"/>
                    <li>
                    <input
                    type={isVisibleCon ? "text" : "password"}
                    id='conpassword'
                    name='conpassword'
                    placeholder='Confirm a password'
                    value={data.conpassword}
                    onChange={handleChange}
                    onBlur={validatePassword}
                />{passwordError && <p className="para_text">{passwordError}</p>}
                    </li>
                    
                <li>
                <button className="btn_text" onClick={handleSubmit}>Signup</button>
                </li>
                </ul>
            </form>
         <p style={{textAlign: "center"}}>
            <strong>Already have an account?</strong>
             <Link to="/login"> <strong>Login</strong></Link>
         </p>
            <h3 className="head3">Email Field Data: <span style={{ color: "rgb(101 52 217)" }}>{update.email}</span></h3>
           
        </div>
        </div>
        </>
  )
}

export default SignUp
