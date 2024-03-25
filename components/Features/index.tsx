import Image from "next/image";
import React from "react";

interface featuresdata {
  imgSrc: string;
  heading: string;
  subheading: string;
}

const featuresdata: featuresdata[] = [
  {
    imgSrc: "/images/Features/featureOne.svg",
    heading: "Secure storage",
    subheading: "We lake data security and privacy very seriously",
  },
  {
    imgSrc: "/images/Features/featureTwo.svg",
    heading: "Free to use",
    subheading: "Top notch crypto portfolio traking at no cost",
  },
  {
    imgSrc: "/images/Features/featureThree.svg",
    heading: "Real-time price data",
    subheading: "Updating 24/7 using price data form the biggest exchanges",
  },
];

const Features = () => {
  return (
    <div
      className="mx-auto max-w-7xl my-0 md:my-40 pt-36 px-6 relative"
      id="features-section"
    >
      <div className="radial-bg hidden lg:block"></div>
      <div className="flex flex-col gap-x-4 gap-y-4">
        {/* COLUMN 1 */}
        <div>
          <h3 className="feature-font text-lg font-semibold mb-4 text-center md:text-start">
            FEATURES
          </h3>
          <h2 className="text-offwhite text-3xl lg:text-5xl font-semibold leading-snug mb-6 text-center md:text-start">
            The most trusted cryptocurrency platform
          </h2>
          <p className="lg:text-lg font-normal text-bluish text-center md:text-start">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s.
          </p>
        </div>
        {/* COLUMN 2 */}
        <div>
          <div className="grid grid-cols-3 gap-x-4 gap-y-4">
            {featuresdata.map((item, index) => (
              <div
                className="bg-blue transform transition-transform hover:border border-[#bd24df] hover:scale-105 py-10 pr-12 pl-6 rounded-lg"
                key={index}
              >
                <div className="rounded-full gg h-16 w-16 flex items-center justify-center mb-10">
                  <Image
                    src={item.imgSrc}
                    alt={item.imgSrc}
                    width={24}
                    height={30}
                  />
                </div>
                <h5 className="text-offwhite text-lg font-medium mb-4">
                  {item.heading}
                </h5>
                <p className="text-lightblue text-sm font-normal">
                  {item.subheading}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
