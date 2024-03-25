"use client";

import Image from "next/image";
import React from "react";

interface Table {
  index: number;
  name: string;
  price: number;
  change: number;
  cap: number;
  action: string;
  imgSrc: string;
}

const tableData: Table[] = [
  {
    index: 1,
    name: "Bitcoin(BTC)",
    imgSrc: "/images/Table/bitcoin.svg",
    price: 16458.23,
    change: 3.96,
    cap: 16828.25,
    action: "Buy",
  },
  {
    index: 2,
    name: "Ethereum(ETH)",
    imgSrc: "/images/Table/cryptoone.svg",
    price: 16458.23,
    change: 3.96,
    cap: 16828.8,
    action: "Buy",
  },
  {
    index: 3,
    name: "Tether(USDT)",
    imgSrc: "/images/Table/cryptothree.svg",
    price: 16458.23,
    change: -3.96,
    cap: 16828.3,
    action: "Sell",
  },
  {
    index: 4,
    name: "Binance Coin(BNB)",
    imgSrc: "/images/Table/cryptotwo.svg",
    price: 16458.23,
    change: -3.96,
    cap: 16828.42,
    action: "Sell",
  },
];

const Table = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-40 px-6" id="exchange-section">
        <div className="table-b bg-navyblue p-8 overflow-x-auto">
          <h3 className="text-offwhite text-2xl">Market Trend Live Stream</h3>
          <table className="table-auto w-full mt-10">
            <thead>
              <tr className="text-white bg-darkblue rounded-lg">
                <th className="p-4 font-normal">#</th>
                <th className="p-4 font-normal">NAME</th>
                <th className="p-4 font-normal">PRICE</th>
                <th className="p-4 font-normal">CHANGE 24H</th>
                <th className="p-4 font-normal">MARKET CAP</th>
                <th className="p-4 font-normal">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr key={index} className="border-b border-b-darkblue">
                  <td className="px-4 py-6 text-center text-white">
                    {item.index}
                  </td>
                  <td className="px-4 py-6 text-center text-white flex items-center justify-center gap-5">
                    <Image
                      src={item.imgSrc}
                      alt={item.name}
                      height={50}
                      width={50}
                    />
                    {item.name}
                  </td>
                  <td className="px-4 py-6 text-center text-white">
                    ${item.price.toLocaleString()}
                  </td>
                  <td
                    className={`px-4 py-6 text-center text-white ${
                      item.change < 0 ? "text-red" : "text-green"
                    }`}
                  >
                    ${item.change}%
                  </td>
                  <td className="px-4 py-6 text-center text-white">
                    ${item.cap.toLocaleString()}
                  </td>
                  <td
                    className={`px-4 py-6 text-center ${
                      item.action === "Buy" ? "text-green" : "text-red"
                    }`}
                  >
                    {item.action}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Image 
      src='/images/Table/Untitled.svg'
      alt="ellipse"
      width={2460}
      height={102}
      className="md:mb-40 md:-mt-6 mx-auto"
      />
    </>
  );
};

export default Table;
