"use client";

import Image from "next/image";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const Banner = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="mx-auto max-w-screen-xl relative" id="home-section">
      <div className="arrowOne"></div>
      <div className="radial-banner hidden lg:block"></div>
      <ModalVideo
        channel="youtube"
        videoId="1YyAzVmP9xQ"
        isOpen={isOpen}
        onClose={() => setOpen(false)}
      />

      <div className="mx-auto pt-16 lg:pt-40 sm:pb-24 px-6">
        <div className="height-work">
          <div className="grid grid-cols-1 lg:grid-cols-12 my-16">
            <div className="arrowTwo"></div>
            <div className="col-span-7">
              <h1 className="text-4xl lg:text-7xl font-bold mb-5 text-white md:px-4 md:text-start text-center">
                Buy, Sell & Accept <br /> Digital Assets
              </h1>
              <p className="text-white md:text-lg font-normal mb-10 md:text-start text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
                ea, laboriosam, rem incidunt nihil exercitationem libero.
              </p>
              <div className="flex align-middle justify-center md:justify-start">
                <button className="text-xl font-semibold text-white py-4 px-6 lg:px-12 navbutton mr-6">
                  Get Started
                </button>
                <button
                  onClick={() => setOpen(true)}
                  className="bg-transparent flex justify-center items-center text-white"
                >
                  <Image
                    src="/images/Banner/playbutton.svg"
                    alt="button-image"
                    className="mr-3"
                    width={47}
                    height={47}
                  />
                  How it work
                </button>
              </div>
            </div>
            <div className="col-span-4 lg:-m-10">
              <div className="arrowThree"></div>
              <div className="arrowFour"></div>
              <div className="arrowFive"></div>
              <Image
                src="/images/Banner/banner.png"
                alt="nothing"
                width={500}
                height={500}
              />
              <div className="arrowSix"></div>
              <div className="arrowSeven"></div>
              <div className="arrowEight"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
