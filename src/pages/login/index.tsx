import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";

/**
 * Admin login page
 *
 * This page is accessible via /admin/login
 *
 * @returns {JSX.Element}
 */

export default function LoginPage() {
  const [info, setInfo] = useState<any>({
    loading: false,
    message: "",
    error_message: "",
  });
  const router = useRouter();
  const login = async (e: any) => {
    e.preventDefault();
    setInfo({ ...info, loading: true });
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);
    const payloads = {
      email: payload.email,
      password: payload.password,
    };
    try {
      if(payloads?.email !== "admin@leasfund.com"){
        return setInfo({ ...info, loading: false, error_message: "Email tidak terdaftar" });
      }
      if(payloads?.password !== "admin.leasfund.com"){
        return setInfo({ ...info, loading: false, error_message: "Password salah" });
      }
      setInfo({ ...info, loading: false, error_message: "" });
      Swal.fire({
        icon: "success",
        title: "Login berhasil",
        showConfirmButton: false,
        timer: 1500,
      })
      localStorage.setItem("token", "admin.leasfund.com");
      router.push("/admin/dashboard")
    } catch (error) {
      console.log(error);
      setInfo({ ...info, loading: false, error_message: "Login gagal" });
    }
  };
  return (
    <div className="bg-white min-h-screen w-full flex justify-center items-center flex-col">
      <img src="/images/logo_full2.png" alt="logo" className="w-1/5 h-auto" />
      <h1 className="text-3xl font-bold text-gray-800">Admin Login</h1>
      <form onSubmit={login} className="bg-white shadow p-3 w-1/4">
        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-500">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 text-gray-800"
            name="email"
            autoFocus
            placeholder="Masukan email"
            required
          />
        </div>
        <div className="flex flex-col mt-2">
          <label htmlFor="password" className="text-gray-500">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 text-gray-800"
            name="password"
            placeholder="********"
            required
          />
        </div>
        {info?.error_message && (
          <p className="text-red-500">{info?.error_message}</p>
        )}
        <button
          type="submit"
          disabled={info?.loading}
          className="bg-green-600 text-white p-2 w-full mt-4 rounded hover:bg-green-700 duration-300"
        >
          {info?.loading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
}
