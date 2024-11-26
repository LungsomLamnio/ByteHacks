import React, { useState } from "react";

const BuyerLogin = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleContainer = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-200 to-indigo-200`}
    >
      <div
        className={`bg-white rounded-3xl shadow-lg relative overflow-hidden w-full max-w-[768px] min-h-[480px] ${
          isActive ? "active" : ""
        }`}
      >
        {/* Sign Up Form */}
        <div
          className={`form-container sign-up absolute top-0 h-full transition-all ease-in-out duration-600 ${
            isActive ? "transform translate-x-[100%] opacity-100 z-5" : ""
          }`}
        >
          <form className="flex flex-col items-center justify-center h-full px-10 py-5">
            <h1 className="text-2xl text-[#065f46] mb-2">Create Account</h1>
            <div className="social-icons flex space-x-3 mb-5">
              <a
                href="#"
                className="icon border border-gray-300 rounded-full w-10 h-10 flex justify-center items-center"
              >
                <i className="fa-brands fa-google-plus-g"></i>
              </a>
              <a
                href="#"
                className="icon border border-gray-300 rounded-full w-10 h-10 flex justify-center items-center"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </div>
            <span className="text-sm text-gray-600 mb-5">
              or use your e-mail for registration
            </span>
            <input
              type="text"
              placeholder="Name"
              className="bg-gray-200 border-none p-2 mb-4 w-full rounded-lg"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="bg-gray-200 border-none p-2 mb-4 w-full rounded-lg"
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-gray-200 border-none p-2 mb-4 w-full rounded-lg"
            />
            <button className="bg-[#065f46] text-white py-3 px-7 rounded-lg text-sm font-bold uppercase mt-2">
              Sign Up
            </button>
          </form>
        </div>

        {/* Sign In Form */}
        <div
          className={`form-container sign-in absolute top-0 h-full transition-all ease-in-out duration-600 ${
            isActive ? "transform translate-x-[100%]" : "z-2"
          }`}
        >
          <form className="flex flex-col items-center justify-center h-full px-10 py-5">
            <h1 className="text-2xl text-[#065f46] mb-2">Sign In</h1>
            <div className="social-icons flex space-x-3 mb-5">
              <a
                href="#"
                className="icon border border-gray-300 rounded-full w-10 h-10 flex justify-center items-center"
              >
                <i className="fa-brands fa-google-plus-g"></i>
              </a>
              <a
                href="#"
                className="icon border border-gray-300 rounded-full w-10 h-10 flex justify-center items-center"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </div>
            <span className="text-sm text-gray-600 mb-5">
              or use your e-mail password
            </span>
            <input
              type="email"
              placeholder="E-mail"
              className="bg-gray-200 border-none p-2 mb-4 w-full rounded-lg"
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-gray-200 border-none p-2 mb-4 w-full rounded-lg"
            />
            <a href="#" className="text-[#065f46] text-sm mb-5">
              Forget Your Password?
            </a>
            <button className="bg-[#065f46] text-white py-3 px-7 rounded-lg text-sm font-bold uppercase mt-2">
              Sign In
            </button>
          </form>
        </div>

        {/* Toggle Panels */}
        <div className="toggle-container absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-all ease-in-out duration-600">
          <div className="toggle bg-[#065f46] h-full bg-gradient-to-r from-[#064e37] to-[#065f46] relative left-[-100%] h-full w-[200%] transition-all ease-in-out duration-600">
            {/* Left Panel */}
            <div
              className={`toggle-panel toggle-left absolute top-0 w-1/2 h-full flex items-center justify-center flex-col p-5 text-center transform transition-all duration-600 ${
                isActive
                  ? "transform translate-x-[0%]"
                  : "transform translate-x-[-200%]"
              }`}
            >
              <h1 className="text-white text-2xl mb-4">Welcome Back!</h1>
              <p className="text-white mb-4">
                Enter your personal details to use all of site features
              </p>
              <button
                id="login"
                onClick={toggleContainer}
                className="bg-transparent border-2 border-white text-white py-3 px-7 rounded-lg text-sm font-bold uppercase hidden"
              >
                Sign In
              </button>
            </div>

            {/* Right Panel */}
            <div
              className={`toggle-panel toggle-right absolute top-0 right-0 w-1/2 h-full flex items-center justify-center flex-col p-5 text-center transform transition-all duration-600 ${
                isActive
                  ? "transform translate-x-[200%]"
                  : "transform translate-x-[0%]"
              }`}
            >
              <h1 className="text-white text-2xl mb-4">Welcome</h1>
              <p className="text-white mb-4">
                Register with your personal details to use all of site features
              </p>
              <button
                id="register"
                onClick={toggleContainer}
                className="bg-transparent border-2 border-white text-white py-3 px-7 rounded-lg text-sm font-bold uppercase hidden"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerLogin;
