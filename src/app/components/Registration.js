"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    // Replace these values with your desired email and password
    const correctEmail = "user@gmail.com";
    const correctPassword = "123";

    if (email === correctEmail && password === correctPassword) {
      // Redirect to the form page upon successful login
      router.push("/dashboard");
    } else {
      // Handle login failure, show an error message or something else
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="container mx-auto mt-16 px-4">
  <title>Login</title>
  <div className="flex items-center justify-center">
    <div className="flex flex-col md:flex-row w-full md:w-10/12 lg:w-8/12">
      {/* Left column - Image (Hidden on medium screens) */}
      <div className="hidden md:w-1/2 md:block mb-6 md:mb-0">
        <img
          className="max-w-full mx-auto"
          src="https://s3-alpha-sig.figma.com/img/5a30/b360/1eb9f6c9fb512e633d50113c5998e1e4?Expires=1691366400&Signature=RQigEmYYtAbQl0YOpC21WXzmJsj8vGMjXsUS~BXYYebE~HziVxzIda9c6CH-uNAcsHwYkdWfIlUWuNl5oCLPFvfvSQff-nt91Sr~t06KvR3JbQvksRCrhI3N9IzfrSVBTChEoAw65jZj8ZLdNHb1dQF0sDg0Eq8bQi8zW6mLI3Qcg0wrvso-sEy100IZj51izNtt9UlQ3fYp-Pjegh5518tGE5AbE36qYmqCkMVbG6v4lby-t9Js0kvPtUBLF3wnerhBS88fsMa~MjgauA9fUSq1VAJaSgOmsz7VPFg5BGca-VjheO2Msk9I5NgvrEGwdP3yt4JLCcRXSj77AJAnaw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="img"
        />
      </div>

      {/* Right column - Login Form */}
      <div className="bg-white text-black shadow-md rounded px-8 py-4 md:w-1/2">
            <h2 className="text-3xl font-bold">Login</h2>
            <p className="text-gray-600 mb-6">
              Donec tortor quam at duis tortor.
            </p>
            <div className="mb-4">
              <label className="block text-black text-sm mb-2">Email:</label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-black text-sm mb-2">Password:</label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>
            <p className="text-right mb-6">Forget Password?</p>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              onClick={handleLogin}
            >
              Login
            </button>

        {/* Centered line with "or" text on left and right */}
        <div className="text-center my-6">
          <div className="flex items-center">
            <hr className="flex-1 border-gray-300" />
            <span className="mx-4 text-gray-400">or</span>
            <hr className="flex-1 border-gray-300" />
          </div>
        </div>

        <button
          className="bg-transparent border border-black hover:bg-blue-600 text-black hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Register
        </button>

        <p>email:user@gmail.com</p>
        <p>password:123</p>
      </div>
    </div>
  </div>
</div>

  );
};

export default Registration;
