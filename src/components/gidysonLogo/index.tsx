import Link from "next/link";
import React from "react";
import { BsCart4 } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa";

const GidysonLogo = () => {
  return (
    <Link href="/">
      <div className="flex cursor-pointer bg-primary100 py-2 px-3 rounded-md hover:bg-primary200">
        <span className="uppercase tracking-wider font-medium mr-1">
          Gidyson
        </span>
        <div className="relative">
          <BsCart4 className="text-2xl" />
          <span className="absolute top-[-6px] right-[-6px] z-10 flex h-4 w-4 items-center justify-center rounded-full bg-primary800  text-sm text-white">
            <FaDollarSign className="text-xs" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default GidysonLogo;
