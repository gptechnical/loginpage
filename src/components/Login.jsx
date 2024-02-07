import React, { useState } from 'react';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { BsEyeSlash } from "react-icons/bs";
import { BsEyeFill } from "react-icons/bs";
import styles from "./Login.module.css";

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
        validateEmail();
    validatePassword();
        setUpdate(data);
        // console.log(data)
        alert("Form submittted successfully")
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
        <div className={styles.container_box}>
        <div className={styles.form_box}>
            <h2 className={styles.head2}>Login Page....</h2>
            <form autoComplete="off">
                <ul className={styles.ul_list}>
                    <li><MdEmail className={styles.icon_email}/>
                    <input
                    type="email"
                    id='email'
                    name='email'
                    placeholder='Enter the email'
                    value={data.email}
                    onChange={handleChange}
                  
                />{emailError && <p className={styles.para_text}>{emailError}</p>}
                </li>
                <span onClick={toggle}>
                    { isVisible?  <BsEyeFill className={styles.eye_show}/> : <BsEyeSlash className={styles.eye_show}/> }
                
                </span>
                    <li><RiLockPasswordLine className={styles.icon_password}/>
                  
                    <input
                    type={isVisible ? "text" : "password"}
                    id='password'
                    name='password'
                    placeholder='Enter the password'
                    value={data.password}
                    onChange={handleChange}
           
                />{passwordError && <p className={styles.para_text}>{passwordError}</p>}
                    </li>
                   
                <li>
                <button className={styles.btn_text} onClick={handleSubmit}>Login</button>
                </li>
                </ul>
            </form>
         
            <h3 className={styles.head3}>Email Field Data: <span style={{ color: "rgb(101 52 217)" }}>{update.email}</span></h3>
            {/* <h3 className={styles.head3}>Password Field Data: <span style={{ color: "red" }}>{update.password}</span></h3> */}
        </div>
        </div>
        </>
  )
}

export default Login
