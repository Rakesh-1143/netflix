import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  function handleSignin() {
    setSignIn(!signIn);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="h-screen bg-cover bg-center  bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/54d96d4e-f4b3-4855-b6a8-c5971400072e/web/IN-en-20250915-TRIFECTA-perspective_83ce0f4c-a907-44f0-9d99-07f5109b0a61_large.jpg)]">
      <Header />
      <div>
        <form
          onSubmit={handleSubmit}
          className="bg-black/80 w-4/12 mx-auto p-15 rounded-lg"
        >
          <h2 className="text-white font-bold text-3xl">
            {signIn ? "Sign In" : "Sign Up"}
          </h2>
          <input
            className="bg-gray-700 text-white mt-5 w-full h-15 p-5 rounded-xl"
            type="text"
            placeholder="Email or mobile number"
          />
          {!signIn && (
            <input
              className="bg-gray-700 text-white mt-5 w-full h-15 p-5 rounded-xl"
              type="text"
              placeholder="Full UserName"
            />
          )}
          <input
            className="bg-gray-700 text-white mt-5 w-full h-15 p-5 rounded-xl"
            type="password"
            placeholder="Password"
          />
          <button className="bg-red-600 w-full p-3 text-xl font-bold rounded-xl mt-5 text-white">
            {signIn ? "Sign In" : "Sign Up"}
          </button>
          <div className="mt-10">
            <p className="text-white/70">
              {signIn ? "New to Netflix? " : "Already registred ?"}
              <button
                onClick={handleSignin}
                className="font-bold cursor-pointer text-white"
              >
                {signIn ? "Sign Up" : "Sign In"} now.
              </button>
            </p>
          </div>
          <p className="text-white/50 mt-4 text-xs">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
