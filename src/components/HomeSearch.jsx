"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
function HomeSearch() {
  const [input, setInput] = useState("");
  const [randomSongSearchLoading, setRandomSongSearchLoading] = useState(false)
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`search/web?searchTerm=${input}`);
  };
  // fetch an random song name from genius api

    const  randomSearch = async (e) => {
      setRandomSongSearchLoading(true);
      try {
        const response = await fetch("/api/randomSong");
        if (!response.ok) {
          throw new Error("Failed to fetch random song");
        }
        const data = await response.json();
        router.push(`search/web?searchTerm=${data.song}`)
        setRandomSongSearchLoading(false);
      } catch (error) {
        console.error("Error fetching random song:", error);
      }
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
        disabled={randomSongSearchLoading}
          className="bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover-shadow-md w-40 h-10 transition-shadow"
          onClick={randomSearch}
        >
          {randomSongSearchLoading ? <div>Loading...</div> : "LET YZ DO IT FOR ME"}
        </button>
      </div>
    </>
  );
}

export default HomeSearch;
