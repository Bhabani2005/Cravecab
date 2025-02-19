import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets/assets'
import { StoreContext } from '../context/StoreContext'
import axios from "axios"
function LoginPopup({ setShowLogin }) {
  const { url, setToken } = useContext(StoreContext)
  const [currState, setCurrState] = useState("Login")
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }
  const onLogin = async (event) => {
    event.preventDefault();
    try {
      let newUrl = url + (currState === "Login" ? "/api/user/login" : "/api/user/register");
      const response = await axios.post(newUrl, data);

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className=' absolute z-20 w-full h-screen grid' style={{ backgroundColor: '#00000090' }}>
      <form onSubmit={onLogin} className='place-self-center bg-white flex flex-col gap-6 rounded-lg text-sm ' style={{ width: 'max(23vw,330px)', color: '#808080', padding: '25px 30px', animation: 'fadeIn 0.5s' }}>
        <div className='flex justify-between items-center text-black text-xl font-semibold mb-3 '>
          <h2>{currState}</h2>
          <img className='w-4 cursor-pointer' onClick={() => setShowLogin(false)} src={assets.cross_icon} />
        </div>
        <div className="flex flex-col gap-4">
          {currState === "Login" ? <></> : <input name='name' onChange={onChangeHandler} value={data.name} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text' placeholder='Your Name' required />}

          <input name='email' onChange={onChangeHandler}
            value={data.email} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='email' placeholder='Your email' required />
          <input name='password' onChange={onChangeHandler} value={data.password} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='password' placeholder='Password' required />
        </div>
        <button type='submit' className='border-none p-1 rounded-md text-white bg-orange-500 text-lg cursor-pointer w-full mt-3' >{currState==="Sign up"? "Create account":"Login"}</button> 

        <div className="flex items-start gap-2 mt-3">
          <input className='mt-1' type='checkbox' required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? <p>Create a new account? <span className='text-orange-500 font-medium cursor-pointer' onClick={() => setCurrState("Sign up")}>Click here</span></p> : <p>ALready have an account? <span className='text-orange-500 font-medium cursor-pointer' onClick={() => setCurrState("Login")}>Login here</span></p>}


      </form>
    </div>
  )
}

export default LoginPopup
