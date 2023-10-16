// src/components/Login.js
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { login } from "../../../redux/userSlice";
import toast from 'react-hot-toast';
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log("trying...")
    
    toast.loading('Logging In');
        setTimeout(() => {
            toast.dismiss();
            navigate('/');
            dispatch(login({ email, password }))
            toast.success("Logged In")
        }, 3000);
   
  };

  return (
    <div className='min-h-screen grid lg:grid-cols-2 bg-lightTheme-secondary dark:bg-darkTheme-secondary dark:text-darkTheme-text'>
      
      <div className='hidden lg:flex px-20'>
        <img className='' src="/svg/login.svg" alt="Logo" />
      </div>

      <div className=" w-3/4 h-full mx-auto flex flex-col justify-center lg:justify-start lg:pt-40">
        <h2 className="text-4xl font-semibold mb-4">Login</h2>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="text-black w-full border rounded px-3 py-2 outline-none focus:border-blue-500"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="text-black w-full border rounded px-3 py-2 outline-none focus:border-blue-500"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <button
          className="bg-blue-500 text-white hover:bg-blue-700 font-bold py-2 px-4 rounded"
          onClick={handleLogin}
        >
          Login
        </button>
        <p className='mt-3'>New to Prayog? <Link to='/auth/register'>Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
