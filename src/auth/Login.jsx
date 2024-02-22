import React, { useState } from 'react';
import LoginFormBgImg from '../images/LoginFormBgImg.svg';
import LoginFormImg1 from '../images/LoginFormImg1.svg';
import LoginFormImg2 from '../images/LoginFormImg2.svg';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validatePassword = (password) => {
    const minLength = 8;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /[0-9]/;
    const specialCharacterRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;

    if (password.length < minLength) {
      return 'Password must be at least 8 characters long.';
    }

    if (!uppercaseRegex.test(password)) {
      return 'Password must contain at least one uppercase letter.';
    }

    if (!lowercaseRegex.test(password)) {
      return 'Password must contain at least one lowercase letter.';
    }

    if (!numberRegex.test(password)) {
      return 'Password must contain at least one number.';
    }

    if (!specialCharacterRegex.test(password)) {
      return 'Password must contain at least one special character.';
    }

    return ''; // Empty string indicates no validation errors
  };

  const handleLogin = () => {
    // Check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    const passwordError = validatePassword(password);
    if (passwordError) {
      setErrorMessage(passwordError);
      return;
    }
  };

  return (
    <div className="relative flex w-full h-screen items-center justify-center">
      {/* Image positioned at the bottom-left corner */}
      <img
        src={LoginFormBgImg}
        className="absolute bottom-0 left-0 lg:h-[80%]"
        alt="Background"
      />
      <div className="w-full flex justify-center">
        <img
          src={LoginFormImg1}
          className="absolute lg:bottom-[180px] lg:right-[120px] md:bottom-[160px] md:right-[160px] sm:bottom-[160px] sm:right-[0px]"
          alt="Background"
        />
        <img
          src={LoginFormImg2}
          className="absolute lg:top-[100px] lg:left-[500px] md:top-[120px] md:left-[160px] sm:top-[120px] sm:left-[0px]"
          alt="Background"
        />
        <div
          className="lg:w-[560px] lg:h-[580px] px-10 py-20 rounded-3xl bg-white border border-gray-100 relative
          lg:ml-[380px] lg:mb-20"
        >
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
            <div className="text-red-500 mt-2">{errorMessage}</div>
            <div className="mt-8 flex justify-between items-center">
              <div>
                <input type="checkbox" id="remember" />
                <label
                  className="ml-2 font-medium text-base"
                  htmlFor="remember"
                >
                  Remember Me
                </label>
              </div>
            </div>
            <div className="mt-8 flex flex-col items-center justify-center gap-y-4">
              <button
                onClick={handleLogin}
                className=" hover:bg-[#296d9a] w-40 py-2 bg-[#215E88] rounded-full text-white font-bold text-lg"
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
