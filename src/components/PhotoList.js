import React, { useContext } from "react";
import { PhotoContext } from "../PhotoContext";
import PhotoItem from "./PhotoItem";

const PhotoList = () => {
  const [photos, setPhotos] = useContext(PhotoContext);

  return (
    <div>
      {photos.map((photo) => (
        <PhotoItem key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default PhotoList;
