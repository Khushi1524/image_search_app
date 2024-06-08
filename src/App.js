import React, { useEffect, useState } from "react";
import "./App.css";
import Imagecard from "./Imagecard";

//  const API_URL = 'https://api.unsplash.com/photos/?client_id=BIuquMALEZk40BV3IOvH04GW6-JkUdfBPkrqjHoYkRo'

const App = () => {
  const [images, setImages] = useState([]);

  const searchImage = async () => {
    const response = await fetch(
      `https://api.unsplash.com/photos/?client_id=BIuquMALEZk40BV3IOvH04GW6-JkUdfBPkrqjHoYkRo`
    );
    const data = await response.json();

    setImages(data);
    console.log(data);
  };

  useEffect(() => {
    searchImage();
  }, []);

  return (
    <>
      <div className="app">
        <h1>Image Search</h1>
        

        <div className="search">
          <input placeholder="Search images here"
           onChange={() => {}} />
        </div>

        <div className="button">
          <button onClick={searchImage} >Search</button>
        </div>
          
        {images?.length > 0 ? (
        <div className="imagestructure">
          {images.map((image) => (
            <Imagecard images={images} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Image found</h2>
        </div>
      )}
       
      </div>
    </>
  );
};

export default App;
