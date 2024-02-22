import React, { useState } from 'react';
import LoginFormBgImg from '../images/LoginFormBgImg.svg';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic
  };

  return (
    <div className="relative flex w-full h-screen">
      {/* Image positioned at the bottom-left corner */}
      <img
        src={LoginFormBgImg}
        className="absolute bottom-0 left-0"
        alt="Background"
      />
      <div className="w-full flex items-center justify-center">
        <div className="w-11/12 max-w-[500px] px-10 py-20 rounded-3xl bg-white border border-gray-100 relative">
          <h1 className="text-5xl text-center font-semibold">Admin Login</h1>
          <div className="mt-8">
            <div className="flex flex-col">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Enter Username"
                required
              />
            </div>
            <div className="flex flex-col mt-4">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Enter Password"
                required
                type={'password'}
              />
            </div>
            <div className="mt-8 flex justify-between items-center">
              <div>
                <input type="checkbox" id="remember" />
                <label className="ml-2 font-medium text-base" for="remember">
                  Remember Me
                </label>
              </div>
            </div>
            <div className="mt-8 flex flex-col items-center justify-center gap-y-4">
              <button
                onClick={handleLogin}
                className=" hover:bg-[#296d9a] w-40 py-4 bg-[#215E88] rounded-full text-white font-bold text-lg"
              >
                Login
              </button>
            </div>
            <div className="mt-8 flex justify-center items-center">
              <button className="font-medium text-base text-black">
                Forgot password ?
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
