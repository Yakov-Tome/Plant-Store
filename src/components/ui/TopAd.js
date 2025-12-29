import Link from "next/link";
import React from "react";
import { PiMapPinAreaFill } from "react-icons/pi";
import { RiCustomerService2Fill } from "react-icons/ri";

function TopAd() {
  return (
    <div className="bg-background text-(--leaf-new) backdrop-blur-2xl h-10.5 lg:flex justify-between items-center w-full px-10 font-mono hidden">
      <Link href="tel:0549807373" className="flex items-center gap-1">
        <RiCustomerService2Fill size={28} />
        <p>054-9807373</p>
      </Link>
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <h1 className="text-2xl">המשתלה בנווה צדק</h1>
      </div>
      <div>
        <div className="">
          <a
            href="https://ul.waze.com/ul?place=ChIJbctFr5lMHRURXeDJyMUZjqk&ll=32.05917650%2C34.76539420&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            <PiMapPinAreaFill size={28} />{" "}
            <p>
              סמטת אהרון שלוש 23 <span className="font-bold">תל אביב</span>
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default TopAd;
