import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { ReactNode } from "react";

interface DrawerProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Drawer: React.FC<DrawerProps> = ({ children, isOpen, setIsOpen }) => {
  return (
    <main
      className={
        "fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out" +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0"
          : " transition-all delay-500 opacity-0 -translate-x-full")
      }
    >
      <section
        className={
          "w-[340px] max-w-sm left-0 gg h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform" +
          (isOpen ? " translate-x-0" : " -translate-x-full")
        }
      >
        <article className="relative w-[340px] max-w-lg pb-10 flex flex-col space-y-6 h-full">
          <header className="p-4 flex items-center justify-between">
            <div className="flex flex-shrink-0 items-center">
              <div className="relative h-10 w-32 lg:hidden">
                <Image src="/images/Logo/logo.svg" alt="crypto logo" fill />
              </div>
            </div>

            <XMarkIcon
              className="block size-6 text-white cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </header>
          <div onClick={() => setIsOpen(false)}>{children}</div>
        </article>
      </section>
      <section
        className="w-screen h-full cursor-pointer"
        onClick={() => setIsOpen(false)}
      ></section>
    </main>
  );
};

export default Drawer;
