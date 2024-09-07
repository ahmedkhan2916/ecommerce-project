import React, { useState } from 'react'
import "../assets/Style/signup.css"

function Signup() {


  const [firstname,setFirstName]=useState('');
  const [lastname,setLastName]=useState('');
  const [email,setEmail]=useState('');
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const [contact,setContact]=useState('');
  const [confirmpass,setConfirmPass]=useState('');

  const handleSignup=(e)=>{

    e.preventDefault();
     
    if(password!==confirmpass)
      {

        return alert("Password is not Matching..!!!")
   
      }


      



  }

  return (

    <div className='signupConatainer w-full h-full'>
      <div className='childSignupCont flex justify-center bg-purple-800 h-screen'>
        <div className='signFormContainer w-96 text-center '>
        <h1 className='signupHeading text-4xl text-white mt-10'>SIGNUP FORM </h1>
       
    <form className='signupForm  pt-2' onSubmit={handleSignup}>

    <input className="inp w-8/12 h-10 rounded-md placeholder-neutral-800 " placeholder='firstname' type='text' onChange={(e)=>setFirstName(e.target.value)} value={firstname} required></input>
    <input className="inp w-8/12 h-10 rounded-md placeholder-neutral-800 " placeholder='lastname' type='text' onChange={(e)=>setLastName(e.target.value)} value={lastname} required></input>
    <input className="inp w-8/12 h-10 rounded-md placeholder-neutral-800 " placeholder='email' type='text' onChange={(e)=>setEmail(e.target.value)} value={email} required></input>
    <input className="inp w-8/12 h-10 rounded-md placeholder-neutral-800 " placeholder='username' type='text'onChange={(e)=>setUsername(e.target.value)} value={username} required></input>
    <input className="inp w-8/12 h-10 rounded-md placeholder-neutral-800 " placeholder='password' type='text'onChange={(e)=>setPassword(e.target.value)} value={password} required></input>
    <input className="inp w-8/12 h-10 rounded-md placeholder-neutral-800 " placeholder='confirmPassword' type='text' onChange={(e)=>setConfirmPass(e.target.value)} value={confirmpass} required></input>
    <input className="inp w-8/12 h-10 rounded-md placeholder-neutral-800 " placeholder='contact no' type='text' onChange={(e)=>setContact(e.target.value)} value={contact} required></input>

    <button type="submit" className="btnSignup w-8/12 h-10 rounded-md bg-yellow-500 mt-2 text-xl" >Signup</button>

<span className='flex underline text-red-600 justify-center mt-10 cursor-pointer'>Back to Login Page</span>
    </form>


        </div>




      </div>
    </div>

  )
}

export default Signup