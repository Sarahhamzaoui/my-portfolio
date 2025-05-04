import React, { createContext, useState } from "react";

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [likes, setLikes] = useState(0);

  const incrementLikes = () => setLikes((prev) => prev + 1);

  return (
    <VideoContext.Provider value={{ likes, incrementLikes }}>
      {children}
    </VideoContext.Provider>
  );
};
