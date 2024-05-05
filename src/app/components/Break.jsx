import Image from "next/image";
import React from "react";
import { images } from "../constants/images";
import icons from "../constants/icons";
import { Button } from "primereact/button";
const Break = () => {
  return (
    <main
      style={{ maxHeight: 500, height: 500 }}
      className="w-11 border-1 mx-auto h-auto overflow-hidden flex flex-row justify-content-around  bg-gray-900 border-round-xl"
    >
      <div className="text-white gap-1 p-5 mt-6 h-30rem w-5 flex flex-column justify-content-start">
        <h1 className="text-7xl">Iphone 12</h1>
        <p className="text-gray-500 text-lg">
          iPhone 12 Redefines Mobile Technology with Innovative Design and
          Powerful Performance
        </p>
        <ul className="mt-4 flex flex-row gap-2 text-xl align-items-end text-gray-500">
            <li>Sleek</li>
            <li className="text-2xl text-gray-100 font-semibold">Powerfull</li>
            <li>Innovative</li>
        </ul>
        <p className="mt-2 text-medium flex flex-row align-items-end gap-2">
        <span>*Only limited in stock </span>
        <icons.FaApple size={22}></icons.FaApple>
        </p>
        <p className="mt-5 text-gray-500">
            Created by Apple , <a href='#' className="text-white underline">visit now</a>
        </p>
        <Button className="p-2 mt-4 w-4 flex flex-row justify-content-center align-items-center">
            Buy now
        </Button>
      </div>
      <Image
        alt="iphone12"
        src={images.iphone}
        height={600}
        className="mt-8"
      ></Image>
    </main>
  );
};

export default Break;
