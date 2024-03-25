import Link from "next/link";
import React from "react";

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

const DrawerData = () => {
  return (
    <div className="rounded-md max-w-sm w-full">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pt-2 pb-3">
            {navigationItem.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-black/90 text-neutral-950"
                    : "hover:text-neutral-950 hover:bg-white/10 text-purple-300",
                  " block p-2 rounded-md text-base font-medium"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4">
              <button className="bg-navyblue w-full hover:text-white text-white border border-purple-500 font-medium py-2 px-4 rounded">
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawerData;
