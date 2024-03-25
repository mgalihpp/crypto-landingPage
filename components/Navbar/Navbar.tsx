"use client";

import { Disclosure } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Drawer from "./Drawer";
import DrawerData from "./DrawerData";

interface NavItems {
  name: string;
  href: string;
  current: boolean;
}

const navigationItem: NavItems[] = [
  { name: "Home", href: "#home-section", current: false },
  { name: "Exchange", href: "#exchange-section", current: false },
  { name: "Features", href: "#features-section", current: false },
  { name: "FAQ", href: "#faq-section", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Disclosure as="nav" className="navbar">
      <>
        <div className="mx-auto max-w-screen-xl p-3 md:p-4 lg:px-8">
          <div className="relative flex h-12 sm:h-20 items-center">
            <div className="flex flex-1 items-center sm:justify-between">
              {/* LOGO */}
              <div className="flex flex-shrink-0 items-center">
                <div className="relative h-10 w-32 lg:hidden">
                  <Image src="/images/Logo/logo.svg" alt="crypto logo" fill />
                </div>
                <div className="relative hidden h-48 w-48 lg:block">
                  <Image src="/images/Logo/logo.svg" alt="crypto logo" fill />
                </div>
              </div>
              {/* END LOGO */}
              
              {/* LINKS */}
              <div className="hidden lg:flex items-center border-right">
                <div className="flex justify-end space-x-4">
                  {navigationItem.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900"
                          : "navLinks hover-underline",
                        "px-3 py-4 rounded-md text-lg font-normal"
                      )}
                      aria-current={item.href ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              {/* END LINKS */}

              {/* BUTTON */}
              <button
                className="hidden lg:flex justify-end text-xl font-semibold 
              py-4 px-6 lg:px-12 navbutton text-white
              "
              >
                Connect Wallet
              </button>
              {/* END BUTTON */}
            </div>

            {/* DRAWER FOR MOBILE VIEW */}

            {/* DRAWER ICONS */}

            <div className="block lg:hidden">
              <Bars3Icon
                className="block size-6 text-white"
                aria-hidden="true"
                onClick={() => setIsOpen(true)}
              />
            </div>

            {/* DRAWER */}
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <DrawerData />
            </Drawer>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;
