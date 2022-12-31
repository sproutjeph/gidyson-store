import Image from "next/image";
import { toast } from "react-toastify";
import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import {
  FaCircle,
  FaStar,
  FaCheckCircle,
  FaMinus,
  FaPlus,
} from "react-icons/fa";
import {
  decreaseItem,
  increaseItem,
  calculateTotals,
  addToCart,
} from "../../featuers/cart/cartSlice";

type IProps = {
  id: string;
};
const ProductDetails = ({ id }: IProps) => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.products);
  const product = products.find((item) => item.id === id);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [dispatch]);

  if (!product) {
    return <h1>product not found</h1>;
  }
  return (
    <>
      <h1 className="pt-4 text-xl font-bold tracking-widest">
        Product Details
      </h1>
      <h1 className="my-4 text-sm tracking-widest text-gray-400 uppercase">
        {product.title}
      </h1>
      <main className="p-4 md:p-0 w-[90%] grid md:grid-cols-2 gap-x-10 justify-center">
        <div className="mx-auto">
          <Image
            src={product?.img!}
            width={500}
            height={500}
            alt="photo of product"
            className="object-contain w-full rounded-md "
            loading="lazy"
          />
        </div>

        <div className="">
          <div className="my-4 text-sm font-bold tracking-wider text-red-600 uppercase w-fit">
            <h4 className="px-3 py-1 mb-4 bg-red-100 rounded-md">In stock</h4>
            <h4>sale</h4>
          </div>

          <div className="pb-2 font-bold tracking-widest uppercase border-b-2 border-dotted">
            <h4>{product?.title}</h4>
            <div className="flex gap-1 my-3">
              {Array(product?.rating)
                .fill(0)
                .map((_, i) => (
                  <FaStar key={i} className="h-5 text-yellow-500" />
                ))}
            </div>
            <h4 className="text-lg">₦{product?.price.toLocaleString()}</h4>
          </div>
          <div className="my-4 capitalize">
            <div className="flex justify-between">
              <h4>color</h4>
              <div className="flex gap-3">
                <FaCheckCircle className="text-xl text-blue-800" />
                <FaCircle className="text-xl text-red-700" />
              </div>
            </div>
            <div className="flex justify-between my-4">
              <h4>Modal</h4>
              <select name="" id="" className="py-1 rounded-md">
                <option value="">CB110</option>
                <option value="">CB125</option>
              </select>
            </div>

            <div className="flex justify-between pb-4 mt-8 border-b-2">
              <h4>Quantity</h4>
              <div className="flex items-center gap-3 px-4 py-1 border-2 rounded-md">
                <FaMinus
                  className="cursor-pointer"
                  onClick={() => {
                    dispatch(decreaseItem({ id: id }));
                    dispatch(calculateTotals());
                  }}
                />
                <span>{product?.amount}</span>
                <FaPlus
                  className="cursor-pointer"
                  onClick={() => {
                    dispatch(increaseItem({ id: id }));
                    dispatch(calculateTotals());
                    console.log("jeph");
                  }}
                />
              </div>
            </div>
            <div className="flex gap-4 my-6">
              <button
                className="btn-primary"
                onClick={() => {
                  dispatch(addToCart({ cartItem: product! }));
                  dispatch(calculateTotals());
                  toast(`${product?.title} Added to cart`);
                }}
              >
                Add To Cart
              </button>
              <button className="btn-secondary">Buy Now</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductDetails;
