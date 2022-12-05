import Image from "next/image";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { IProduct } from "../../utils/types";
import { FaCartPlus, FaStar } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addToCart, calculateTotals } from "../../featuers/cart/cartSlice";
import { useRouter } from "next/router";
interface IProps {
  product: IProduct;
}
const ProductItem = ({ product }: IProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector((state) => state.cart);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  return (
    <div className="px-4 mx-auto shadow-md ">
      <Image
        src={product.img}
        width={750}
        height={750}
        alt="product"
        className="object-contain w-full cursor-pointer"
        onClick={() => router.push(`/product-details/${product.id}`)}
      />
      <hr />
      <h4 className="my-3 text-sm">{product.title.toUpperCase()}</h4>
      <div className="flex gap-1 mb-3">
        {Array(product.rating)
          .fill(0)
          .map((_, i) => (
            <FaStar key={i} className="h-5 text-yellow-500" />
          ))}
      </div>
      <div className="mb-3 font-bold tracking-wider">₦ {product.price}</div>

      <button
        className=" btn-primary"
        onClick={() => {
          dispatch(addToCart({ cartItem: product }));
          toast(`${product.title} added to cart`);
        }}
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default ProductItem;
