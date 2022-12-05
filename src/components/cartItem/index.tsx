import React from "react";

import { FaPlus, FaMinus } from "react-icons/fa";
import { useRouter } from "next/router";
import Image from "next/image";
import cartProductImage from "../../assets/images/honda-1.png";

const CartItem = () => {
  return (
    <>
      <div className="grid max-w-2xl p-4 bg-white rounded-md shadow-md md:grid-cols-2">
        <div className="h-48 max-w-lg mx-auto mb-2 md:mx-0 md:w-60">
          <Image
            src={cartProductImage}
            alt="cart item photo"
            className="object-contain w-full h-full rounded-md "
            height={500}
            width={500}
            loading="lazy"
          />
        </div>

        <div className="">
          <div className="text-center">
            <h2 className="text-2xl tracking-wider text-blue-500 capitalize md:text-xl">
              honda125
            </h2>
            <p className="mt-2 text-sm line-clamp-2">
              {
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, fugiat. adipisicing elit. Harum, fugiat. elit. Harum, fugiat. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, fugiat. adipisicing elit. Harum, fugiat. elit. Harum, fugiat. "
              }
            </p>
          </div>

          <h2 className="my-3 text-xl font-bold tracking-widest text-center">
            Price : ${0}
          </h2>
        </div>

        <div className="flex justify-between pt-4 border-t-2 md:col-span-2">
          <button className="px-3 py-1 rounded-md bg-primary300">Remove</button>
          <div className="flex gap-x-4">
            <button
              className="w-10 btn-primary"
              onClick={() => {
                // dispath(decreaseItem({ id: item.id }));
                // dispath(calculateTotals());
              }}
            >
              <FaMinus className="w-5" />
            </button>
            <span className="text-lg font-bold text-green-700">{1}</span>
            <button
              className="w-10 btn-primary"
              onClick={() => {
                // dispath(increaseItem({ id: item.id }));
                // dispath(calculateTotals());
              }}
            >
              <FaPlus className="w-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
