import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className=" bg-slate-100 mb-14">
      <nav className="container mx-auto p-5 flex align-middle justify-between">
        <p className="text-2xl font-bold">🐼 Logo</p>

        <ul className="flex align-middle gap-5 font-bold text-blue-400">
          <li>
            <Link href="/">🏠 Home</Link>
          </li>
          /
          <li>
            <Link href="/products">🛒 Products</Link>
          </li>
          /
          <li>
            <Link href="/login">🔐 Login</Link>
          </li>
          /
          <li>
            <Link href="/account">👤 Account</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
