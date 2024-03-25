import Image from "next/image";
import Link from "next/link";
import React from "react";

// MIDDLE LINKS DATA
interface ProductType {
  id: number;
  section: string;
  link: string[];
}

interface Social {
  imgsrc: string;
  href: string;
}

const products: ProductType[] = [
  {
    id: 1,
    section: "Useful Links",
    link: ["Home", "Exchange", "Features", "FAQ"],
  },
];

const socialLinks: Social[] = [
  { imgsrc: "/images/Footer/insta.svg", href: "https://instagram.com/" },
  { imgsrc: "/images/Footer/dribble.svg", href: "https://dribble.com/" },
  { imgsrc: "/images/Footer/twitter.svg", href: "https://twitter.com/" },
  { imgsrc: "/images/Footer/youtube.svg", href: "https://youtube.com/" },
];

const Footer = () => {
  return (
    <div className="relative">
      <div className="radial-bg hidden lg:block">
        <div className="mx-auto max-w-2xl mt-64 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-10 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
            {/* COLUMN 1 */}

            <div className="col-span-6">
              <div className="relative size-28">
                <Image
                  className="block h-12 w-20px"
                  src="/images/Logo/logo.svg"
                  alt="logo image"
                  fill
                />
              </div>
              <h3 className="text-lightblue text-sm font-normal leading-9 mb-4 lg:mb-16">
                Cryptocurrency is a type of virtual currency that uses
                cryptography to secure transactions that are digitally recorded
                on a distributed ledger, such as a blockchain.
              </h3>
              <div className="flex gap-4 mb-4">
                {socialLinks.map((item, index) => (
                  <Link href={item.href} key={index}>
                    <img
                      src={item.imgsrc}
                      alt={item.imgsrc}
                      className="footer-icons"
                    />
                  </Link>
                ))}
              </div>
            </div>
            {/* COLUMN 2/3 */}
            {products.map((product, index) => (
              <div key={product.id} className="group relative col-span-2">
                <p className="text-white text-xl font-medium mb-9">
                  {product.section}
                </p>
                <ul className="">
                  {product.link.map((link, index) => (
                    <li key={index} className="mb-5">
                      <Link
                        href="/"
                        className="text-offwhite text-sm font-normal space-links mb-6"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="col-span-4">
              <h3 className="text-white text-xl font-medium mb-9">
                Contact Us
              </h3>
              <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2">
                <Image
                  src={"/images/Footer/number.svg"}
                  alt="number-icon"
                  width={20}
                  height={20}
                />
                (406) 555-012
              </h4>
              <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2">
                <Image
                  src={"/images/Footer/email.svg"}
                  alt="email-icon"
                  width={20}
                  height={20}
                />
                tim@example.com
              </h4>
              <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2">
                <Image
                  src={"/images/Footer/address.svg"}
                  alt="address-icon"
                  width={20}
                  height={20}
                />
                Elgin St. Celina, Delaware 10299
              </h4>
            </div>
          </div>
          {/* ALL RIGHT REVERSED */}
          <div className="py-8 border-t border-t-lightblue">
            <h3 className="text-center text-offwhite">
              &copy;2024 - All Rights Reversed by{" "}
              <Link href="https://mgalihpp.site" target="_blank">
                mgalihpp
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
