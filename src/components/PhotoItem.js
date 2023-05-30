import React, { useContext } from "react";
import { PhotoContext } from "../PhotoContext";

const PhotoItem = ({ photo }) => {
  const [photos, setPhotos] = useContext(PhotoContext);

  const deletePhoto = (id) => {
    setPhotos(photos.filter((photo) => photo.id !== id));
  };

  return (
    <div>
      <h2>{photo.title}</h2>
      <img src={photo.url} alt={photo.title} className="photo-item" />
      <button onClick={() => deletePhoto(photo.id)}>Delete</button>
    </div>
  );
};

export default PhotoItem;