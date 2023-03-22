import React, { createContext, useState } from "react";
import ColorThief from "colorthief";

export const SongContext = createContext();

const SongContextProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [background, setBackground] = useState("#2d3748");
  const [currentSongIndex, setCurrentSongIndex] = useState(null);

  const setBackgroundFromSong = (song) => {
    const colorThief = new ColorThief();
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = song.photo;
    img.addEventListener("load", () => {
      const color = colorThief.getColor(img);
      const colorString = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
      setBackground(colorString);
      console.log("this is background: " + background);
      console.log("this is colorString : " + colorString);
    });
  };

  return (
    <SongContext.Provider
      value={{
        currentSong,
        setCurrentSong,
        isPlaying,
        setIsPlaying,
        currentTime,
        setCurrentTime,
        duration,
        setDuration,
        background,
        setBackground,
        setBackgroundFromSong,
        currentSongIndex,
        setCurrentSongIndex,
      }}
    >
      {children}
    </SongContext.Provider>
  );
};

export default SongContextProvider;
