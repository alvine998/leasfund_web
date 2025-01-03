import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Layout({ children }: any) {
  const pathname = usePathname();
  const tabs = [
    {
      name: "Dashboard",
      href: "/admin/dashboard",
      current: pathname === "/admin/dashboard",
    },
    {
      name: "Artikel",
      href: "/admin/article",
      current: pathname === "/admin/article",
    },
    {
      name: "Nasabah",
      href: "/admin/customer",
      current: pathname === "/admin/customer",
    },
    {
      name: "Produk",
      href: "/admin/product",
      current: pathname === "/admin/product",
    },
  ];
  return (
    <div className="min-h-screen w-full bg-white flex lg:flex-row flex-col gap-2">
      <div className="bg-white shadow lg:flex flex-col justify-start items-center w-1/4">
        <img src="/images/logo_full2.png" alt="logo" className="w-40 h-auto" />
        <div className="px-4 w-full">
          {tabs.map((v: any, i: number) => (
            <Link href={v.href} key={i}>
              <button
                className={`${
                  v.current ? "bg-green-700" : "bg-white text-gray-800"
                } w-full py-2 text-center cursor-pointer hover:bg-green-700 hover:text-white duration-300 rounded border-b`}
              >
                {v.name}
              </button>
            </Link>
          ))}
          <div
            className={`bg-white text-gray-800 w-full py-2 text-center cursor-pointer rounded hover:bg-red-700 hover:text-white duration-300`}
          >
            <Link
              href={"/login"}
              onClick={() => localStorage.removeItem("token")}
            >
              Logout
            </Link>
          </div>
        </div>
      </div>
      <main className="w-full overflow-auto">
        <div className="bg-white w-full min-h-screen mt-10 p-4">{children}</div>
      </main>
    </div>
  );
}
