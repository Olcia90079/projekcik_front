import React, { useState, useContext } from "react";
import { PhotoContext } from "../PhotoContext";

const PhotoForm = () => {
  const [photos, setPhotos] = useContext(PhotoContext);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };

  const updateUrl = (e) => {
    setUrl(e.target.value);
  };

  const addPhoto = (e) => {
    e.preventDefault();
    setPhotos(
      [...photos, { id: Date.now(), title: title, url: url }]
    );
  };

  return (
    <form onSubmit={addPhoto}>
      <input type="text" name="title" placeholder="Dodaj tytuł..." value={title} onChange={updateTitle} />
      <input type="text" name="url" placeholder="Dodaj url..." value={url} onChange={updateUrl} />
      <button>Add photo</button>
    </form>
  );
};

export default PhotoForm;
