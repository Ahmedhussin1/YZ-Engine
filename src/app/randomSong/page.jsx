// pages/randomSong.js
'use client'
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const RandomSong = () => {
  const [song, setSong] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchRandomSong = async () => {
      try {
        const response = await fetch("/api/randomSong");
        if (!response.ok) {
          throw new Error("Failed to fetch random song");
        }
        const data = await response.json();
        setSong(data.song);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching random song:", error);
        setLoading(false);
      }
    };
    fetchRandomSong();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold mb-4">Random Song</h1>
      <p className="text-xl">{song}</p>
      <button
        onClick={() => router.push("/")}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Back to Home
      </button>
    </div>
  );
};

export default RandomSong;
