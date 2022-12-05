import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { IProduct } from "../../utils/types";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useAppDispatch } from "../../store/hooks";
import {
  calculateTotals,
  decreaseItem,
  increaseItem,
} from "../../featuers/cart/cartSlice";

interface IProps {
  item: IProduct;
}

const CartItem = ({ item }: IProps) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="grid max-w-2xl p-4 bg-white rounded-md shadow-md md:grid-cols-2">
        <div className="h-48 max-w-lg mx-auto mb-2 md:mx-0 md:w-60">
          <Image
            src={item.img}
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
              {item.title}
            </h2>
            <p className="mt-2 text-sm line-clamp-2">{item.description}</p>
          </div>

          <h2 className="my-3 text-xl font-bold tracking-widest text-center">
            Price : ₦{item.price}
          </h2>
        </div>

        <div className="flex justify-between pt-4 border-t-2 md:col-span-2">
          <button className="px-3 py-1 rounded-md bg-primary300">Remove</button>
          <div className="flex gap-x-4">
            <button
              className="w-10 btn-primary"
              onClick={() => {
                dispatch(decreaseItem({ id: item.id }));
                dispatch(calculateTotals());
              }}
            >
              <FaMinus className="w-5" />
            </button>
            <span className="text-lg font-bold text-green-700">
              {item.amount}
            </span>
            <button
              className="w-10 btn-primary"
              onClick={() => {
                dispatch(increaseItem({ id: item.id }));
                dispatch(calculateTotals());
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
