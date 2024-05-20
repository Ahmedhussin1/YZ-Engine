"use client";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
function HomeSearch() {
  const [input, setInput] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`search/web?searchTerm=${input}`);
  };
  // fetch an random song name from genius api
  
    const randomSearch = (e) => {
      e.preventDefault();
      router.push("/randomSong");
    };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 
      px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md 
      transition-shadow sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="flex-grow focus:outline-none"
        />
        <BsFillMicFill className="text-lg " />
      </form>
      <div className=" flex flex-col space-y-2 sm:space-y-0 justify-center sm:flex-row mt-8 sm:space-x-4">
        <button
          className="bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover-shadow-md w-36 h-10 transition-shadow"
          onClick={handleSubmit}
        >
          YZ search
        </button>
        {/* this button will search an random song name */}
        <button
          className="bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover-shadow-md w-40 h-10 transition-shadow"
          onClick={randomSearch}
        >
          LET YZ DO IT FOR ME
        </button>
      </div>
    </>
  );
}

export default HomeSearch;
