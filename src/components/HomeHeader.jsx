import React from "react";
import Link from "next/link";
import { TbGridDots } from "react-icons/tb";
function HomeHeader() {
  return (
    <header className="max-w-6xl mx-auto">
      <div className="flex items-center gap-5 float-right pt-7">
        <Link href="https://mail.google.com/" className="hover:underline">
          Gmail
        </Link>
        <Link href="https://mail.google.com/" className="hover:underline">
          Images
        </Link>
        <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2" />
        <button className="py-2 px-5 bg-blue-500 rounded-md text-white font-medium hover:brightness-105 hover:shadow-md transition-shadow">
          Sign In
        </button>
      </div>
    </header>
  );
}

export default HomeHeader;
