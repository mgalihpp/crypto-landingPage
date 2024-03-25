"use client";

import React from "react";
import Slider from "react-slick";

// IMAGES DATA FOR CAROUSEL
interface Data {
  imgSrc: string;
}

const data: Data[] = [
  {
    imgSrc: "/images/Companies/birdseye.svg",
  },
  {
    imgSrc: "/images/Companies/break.svg",
  },
  {
    imgSrc: "/images/Companies/keddar.svg",
  },
  {
    imgSrc: "/images/Companies/shield.svg",
  },
  {
    imgSrc: "/images/Companies/tandov.svg",
  },
  {
    imgSrc: "/images/Companies/tree.svg",
  },
];

const Companies = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="text-center">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <>
          <Slider {...settings}>
            {data.map((item, index) => (
              <div key={index}>
                <img src={item.imgSrc} alt={item.imgSrc} />
              </div>
            ))}
          </Slider>
        </>
      </div>
    </div>
  );
};

export default Companies;
