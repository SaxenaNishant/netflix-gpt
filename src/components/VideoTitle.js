import React from "react";

export const VideoTitle = ({ overview, title }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black ">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block p-6 text-lg w-1/4">{overview}</p>
      <div className="flex">
        <button className=" m-2 md:m-0 bg-white text-black py-1 md:py-4 md:px-12 px-2 text-base md:text-lg rounded-lg hover:bg-opacity-70 ">
          ▷ Play
        </button>
        <button className="hidden md:inline-block bg-gray-500 text-white py-2 md:py-4 md:px-12 px-4 mx-2 text-base md:text-lg bg-opacity-80 rounded-lg hover:bg-opacity-70 ">
          More Info
        </button>
      </div>
    </div>
  );
};
