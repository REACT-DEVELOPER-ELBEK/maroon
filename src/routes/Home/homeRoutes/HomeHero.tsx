// import React from 'react'

import { Link } from "react-router-dom";
import { bodyCare, faceCareHomeHero } from "../../../assets/img";

const homeHero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__wrapper flex justify-between">
          <div className="face__care">
            <img src={faceCareHomeHero} alt="" />
            <Link to="/face-care" className="flex justify-between mt-3">
              <p className="font-medium">Уход для лица</p>
              <p>&#8594;</p>
            </Link>
          </div>
          <div className="hero__title flex flex-col align-center mt-8">
            <h1 className="uppercase text-4xl ml-20 font-medium">maroon</h1>
            <p className="w-80 text-xl text-center mt-6">Натуральная косметика для бережного ухода за кожей</p>
            <button className="text-sky-800 py-2 w-44 ml-20 mt-8 border-solid border-black">Подробнее</button>
          </div>
          <div className="body__care">
            <img src={bodyCare} alt="" />
            <Link to="/body-care" className="flex justify-between mt-3">
              <p className="font-medium">Уход для тела</p>
              <p>&#8594;</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default homeHero;
