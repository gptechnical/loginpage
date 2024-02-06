import React, { useState } from 'react';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { BsEyeSlash } from "react-icons/bs";
import { BsEyeFill } from "react-icons/bs";

const Home = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const [update, setUpdate] = useState('')
    const [error, setError] = useState({});
    const [isVisible, setVisible] = useState(false);

    var name;
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
        setError({...error, [name]: undefined})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setUpdate(data);
        console.log(data)
        setData({
            email: "",
            password: ""
        });
        const validationError = validateForm(data);
        if(Object.keys(validationError).length === 0 ) {
            // console.log('Form submittted successfully:', data)
            alert("Form submittted successfully")
        } else {
            setError(validationError);
        }
    }
    //email validation
    const validateForm = (item) =>{
        const error = {}
        if(!item.email.trim()){
            error.email ='Email is required';
        } else if (!isValidEmail(item.email)){
            error.email = 'Invalid email address';
        }
          //password validation
    if (!item.password.trim()){
        error.password = 'Password is required';
    } else if (item.password.length < 8) {
        error.password = 'Password must be at least 8 characters';
    } else if (item.password.length > 20){
        error.password = 'Password cannot exceed 20 characters';
    }
    return error;
    };
  
    const isValidEmail = (email) => {
        // basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
            setError('Email is required');
          } else {
            setError('Invalid email address');
          }
    }
    const toggle =()=>{
        setVisible(!isVisible);
    }
    return (
        <>
        <div className='container_box'>
        <div className='form_box'>
            <h2 className='head2'>Login Page....</h2>
            <form autoComplete="off" className='form_input'>
            <MdEmail className='icon_email'/>
                <input
                    type="email"
                    id='email'
                    name='email'
                    placeholder='Enter the email'
                    value={data.email}
                    onChange={handleChange}
                /><br />
                {error.email && <p>{error.email}</p>}
                <RiLockPasswordLine className='icon_password'/>
                 <input
                    type={isVisible ? "text" : "password"}
                    id='password'
                    name='password'
                    placeholder='Enter the password'
                    value={data.password}
                    onChange={handleChange}

                />
                
                <span onClick={toggle}>
                    { isVisible?  <BsEyeFill className='eye_show'/> : <BsEyeSlash className='eye_show'/> }
                
                </span>
                
                <br />
                 {error.password && <p>{error.password}</p>}
                <button className='btn_text' onClick={handleSubmit}>Login</button>
            </form>
            {/* <div>
        {update && (
            <h2>Username Field Data: {update.username} and Email Field Data: {update.email}</h2>
       
        )}
     </div> */}
            <h3 className='head3'>Email Field Data: <span style={{ color: "rgb(101 52 217)" }}>{update.email}</span></h3>
            <h3 className='head3'>Password Field Data: <span style={{ color: "red" }}>{update.password}</span></h3>
        </div>
        </div>
        </>
    )
}

export default Home
