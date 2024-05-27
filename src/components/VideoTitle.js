import React from "react";

export const VideoTitle = ({ overview, title }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black ">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="p-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className=" bg-white text-black p-4 px-12 text-lg rounded-lg hover:bg-opacity-70 ">
          ▷ Play
        </button>
        <button className="bg-gray-500 text-white p-4 px-12 mx-2 text-lg bg-opacity-80 rounded-lg hover:bg-opacity-70 ">
          More Info
        </button>
      </div>
    </div>
  );
};
