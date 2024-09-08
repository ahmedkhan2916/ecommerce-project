import React, { useState } from 'react';
import "../assets/Style/signup.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import khareed from "../assets/SignupImage/khareed.png"; // Ensure the path is correct

function Signup() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [contact, setContact] = useState('');
  const [confirmpass, setConfirmPass] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmpass) {
      return alert("Password is not Matching..!!!");
    }

    const bodyData = {
      firstname,
      lastname,
      email,
      username,
      password,
      contact,
    };

    try {
      const apiDat = await axios.post("http://localhost:1000/users/signup", bodyData);
      console.log("signup successfully");
      navigate('/users/login');
    } catch (error) {
      console.error(error, "error in Signup");
    }
  }

  return (
    <div 
      className='signupContainer w-full h-full' 
      style={{ 
        position:'relative',
        overflow:'hidden',
        backgroundImage: `url(${khareed})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        height: '100vh', // Ensure the height is set
        width: '100vw'   // Ensure the width is set
      }}
    >
      <div className='childSignupCont flex justify-center  h-screen'>
        <div className='signFormContainer w-96 text-center '>
          <h1 className='signupHeading text-4xl text-white mt-10'>SIGNUP FORM </h1>
          <form className='signupForm pt-2' onSubmit={handleSignup}>
            <input className="inp w-8/12 h-10 rounded-md placeholder-neutral-800 " placeholder='firstname' type='text' onChange={(e) => setFirstName(e.target.value)} value={firstname} required />
            <input className="inp w-8/12 h-10 rounded-md placeholder-neutral-800 " placeholder='lastname' type='text' onChange={(e) => setLastName(e.target.value)} value={lastname} required />
            <input className="inp w-8/12 h-10 rounded-md placeholder-neutral-800 " placeholder='email' type='text' onChange={(e) => setEmail(e.target.value)} value={email} required />
            <input className="inp w-8/12 h-10 rounded-md placeholder-neutral-800 " placeholder='username' type='text' onChange={(e) => setUsername(e.target.value)} value={username} required />
            <input className="inp w-8/12 h-10 rounded-md placeholder-neutral-800 " placeholder='password' type='text' onChange={(e) => setPassword(e.target.value)} value={password} required />
            <input className="inp w-8/12 h-10 rounded-md placeholder-neutral-800 " placeholder='confirmPassword' type='text' onChange={(e) => setConfirmPass(e.target.value)} value={confirmpass} required />
            <input className="inp w-8/12 h-10 rounded-md placeholder-neutral-800 " placeholder='contact no' type='text' onChange={(e) => setContact(e.target.value)} value={contact} required />
            <button type="submit" className="btnSignup w-8/12 h-10 rounded-md bg-yellow-500 mt-2 text-xl">Signup</button>
            <span className='flex underline text-white justify-center mt-10 cursor-pointer hover:text-blue-500' onClick={() => navigate("/users/login")}>Back to Login Page</span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
