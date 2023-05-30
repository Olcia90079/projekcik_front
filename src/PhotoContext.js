import React, { useState, createContext, useEffect } from "react";
import data from "./data/photos.json";

export const PhotoContext = createContext();

export const PhotoProvider = (props) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    setPhotos(data);
  }, []);

  return (
    <PhotoContext.Provider value={[photos, setPhotos]}>
      {props.children}
    </PhotoContext.Provider>
  );
};
