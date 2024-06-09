import React, { useEffect, useState } from "react";
import "./App.css";
import Imagecard from "./Imagecard";
import 'aos/dist/aos.css'; 
import AOS from 'aos';

const App = () => {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  const searchImage = async (query) => {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${query}&per_page=30&page=+&client_id=BIuquMALEZk40BV3IOvH04GW6-JkUdfBPkrqjHoYkRo`
    );
    const data = await response.json();

    setImages(data.results);
    console.log(data.results);
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 120,
    });
    searchImage("nature");
  }, []);

  return (
    <>
      <div className="app">
        <h1 data-aos="fade-up">SEEKPIX</h1>

        <div data-aos="fade-up" className="search">
          <input
            placeholder="Search images here"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />

          <button
            onClick={() => {
              searchImage(searchTerm);
            }}
          >
            Search
          </button>
        </div>

        <div className="imgCollection">
          {images.map((image) => {
            return <Imagecard image={image} key={image.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default App;
