import { Items, Orders, Payments, Settings } from "../../components";

import PlaceHolderImage from "../../assets/images/no-photo.jpg";
import { profileLinkData } from "../../utils/data";
import { IAccount } from "../../utils/types";
import React, { useState } from "react";
import Image from "next/image";

const CustomerProfile = () => {
  const [profileLinks, setProfileLinks] = useState<IAccount[]>(profileLinkData);

  function navProfileItems(id: number) {
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
    <div className="mx-4 pt-8 md:pt-0 max-w-4xl md:mx-auto">
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
      <div className="h-12 border-gray-100 border rounded-b-2xl flex justify-center sm:gap-2 gap-4 w-full text-sm md:gap-8 md:text-lg">
        {profileLinks.map(({ active, id, Icon, text }) => (
          <div
            className={`cursor-pointer flex items-center gap-2 capitalize  ${
              active && "border-b-2 border-green-500"
            }`}
            key={id}
            onClick={() => navProfileItems(id!)}
          >
            <Icon className="text-lg" />
            <h4>{text}</h4>
          </div>
        ))}
      </div>
      <div className="w-4xl w-full">
        {profileLinks[0].active && <Orders />}
        {profileLinks[1].active && <Payments />}
        {profileLinks[2].active && <Items />}
        {profileLinks[3].active && <Settings />}
      </div>
    </div>
  );
};

export default CustomerProfile;
