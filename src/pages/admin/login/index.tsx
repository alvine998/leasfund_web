import axios from "axios";
import React from "react";

/**
 * Admin login page
 *
 * This page is accessible via /admin/login
 *
 * @returns {JSX.Element}
 */

export default function LoginPage() {
  const login = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);
    const payloads = {
      email: payload.email,
      password: payload.password,
    };
    try {
      const result = await axios.post("/api/admin/login", payloads);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-white min-h-screen w-full flex justify-center items-center flex-col">
        <img src="/images/logo_full2.png" alt="logo" className="w-1/5 h-auto" />
      <h1 className="text-3xl font-bold text-gray-800">Admin Login</h1>
      <form onSubmit={login} className="bg-white shadow p-3 w-1/4">
        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-500">Email</label>
          <input type="email" id="email" className="w-full p-2" name="email" autoFocus placeholder="Masukan email" required />
        </div>
        <div className="flex flex-col mt-2">
          <label htmlFor="password" className="text-gray-500">Password</label>
          <input
            type="password"
            id="password"
            className="w-full p-2"
            name="password"
            placeholder="********"
            required
          />
        </div>
        <button className="bg-green-600 text-white p-2 w-full mt-4 rounded hover:bg-green-700 duration-300">Login</button>
      </form>
    </div>
  );
}
