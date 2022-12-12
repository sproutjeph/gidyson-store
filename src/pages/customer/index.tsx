import PlaceHolderImage from "../../assets/images/no-photo.jpg";
import { profileLinkData } from "../../utils/data";
import OrderImage2 from "../../assets/images/fuel-tank.jpg";
import OrderImage1 from "../../assets/images/honda-1.png";
import OrderImage3 from "../../assets/images/seat.jpg";
import { IAccount } from "../../utils/types";
import React, { useState } from "react";
import Image from "next/image";
const CustomerProfile = () => {
  const [profileLinks, setProfileLinks] = useState<IAccount[]>(profileLinkData);

  function navigateProfileItems(id: number) {
    setProfileLinks((prev) => {
      prev.forEach((link) => (link.active = false));
      const activeLink = prev.find((link) => link.id === id);
      if (activeLink) {
        activeLink.active = true;
      }

      return [...profileLinks];
    });
  }

  return (
    <div className="mx-4 pt-8 md:pt-0 max-w-2xl md:mx-auto">
      <div className="bg-green-700  h-60  rounded-t-2xl flex flex-col justify-center items-center">
        <div className=" w-20 h-20">
          <Image
            src={PlaceHolderImage}
            width={200}
            height={200}
            alt="Customer Profile Photo"
            className="rounded-full w-full h-full"
          />
        </div>
        <h4 className="text-white mt-1">Mbah Jephthah Chisom</h4>
        <h4 className="text-white">Dealer</h4>
      </div>
      <div className="h-12 border-gray-100 border rounded-b-2xl flex justify-center gap-8">
        {profileLinks.map((link) => (
          <div
            className={`cursor-pointer flex items-center gap-2 capitalize  ${
              link.active && "border-b-2 border-green-500"
            }`}
            key={link.id}
            onClick={() => navigateProfileItems(link.id!)}
          >
            <link.icon className="text-lg" />
            <h4>{link.text}</h4>
          </div>
        ))}
      </div>

      <div className="bg-white shadow-lg max-w-2xl rounded-lg h-72 mt-8 border border-gray-200 p-4">
        <h4 className="text-center text-green-700 text-xl uppercase tracking-wider">
          Orders
        </h4>
        <div className=" w-20 h-20">
          <Image
            src={OrderImage1}
            width={400}
            height={400}
            alt="Customer Profile Photo"
            className="rounded-full w-full h-full object-contain"
          />
        </div>
        <div className=" w-20 h-20">
          <Image
            src={OrderImage2}
            width={400}
            height={400}
            alt="Customer Profile Photo"
            className="rounded-full w-full h-full object-contain"
          />
        </div>
        <div className=" w-20 h-20">
          <Image
            src={OrderImage3}
            width={400}
            height={400}
            alt="Customer Profile Photo"
            className="rounded-full w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;
