"use client";

import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
import Link from "next/link";
import { useState } from "react";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-[#E4E4E7] shadow-sm max-w-lg w-full">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-medium text-[#09090B] mb-1">
          Welcome to Azan Wholesale
        </h1>
        <p className="text-[#3F3F46]">Please sign-in to your account</p>
      </div>

      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone">Phone Number</label>
          <input
            name="phone"
            id="phone"
            placeholder="01435 560 346"
            className="bg-[#F4F4F5] py-2 px-3 w-full rounded-xl focus:outline-none border-0 focus:ring-2 focus:ring-[#F03C7D]"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="password">Password</label>
          <div className="bg-[#F4F4F5] focus-within:ring-2 focus-within:ring-[#F03C7D] rounded-xl overflow-hidden relative">
            <input
              type={showPassword ? "text" : "password"}
              name="phone"
              id="password"
              placeholder="Enter your password"
              className="py-2 pl-3 pr-8 w-full focus:outline-none border-0 focus:ring-0 bg-[#F4F4F5]"
            />
            <button
              onClick={handleShowPassword}
              type="button"
              className="absolute top-1/2 -translate-y-1/2 right-3 text-gray-400"
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <input
            type="checkbox"
            name="rememberMe"
            id="rememberMe"
            className="text-[#F03C7D] size-4 rounded-md focus:ring-[#F03C7D]/50 border-[#D4D4D8]"
          />
          <label htmlFor="rememberMe" className="text-[#52525B]">
            Remember me
          </label>
        </div>

        <button
          type="submit"
          className="py-2 px-4 w-full bg-[#F03C7D] text-white rounded-xl font-medium hover:bg-[#F03C7D]/85"
        >
          Sign In
        </button>
      </form>

      <p className="text-[#737373] mt-9 text-center">
        Already have an account?
        <Link href="#" className=" text-[#F03C7D]">
          Login
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
