import React from "react";
import { PhotoProvider } from "./PhotoContext";
import PhotoList from "./components/PhotoList";
import PhotoForm from "./components/PhotoForm";

function App() {
  return (
    <PhotoProvider>
      <div className="App">
        <PhotoForm />
        <PhotoList />
      </div>
    </PhotoProvider>
  );
}

export default App;
