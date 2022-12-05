import Image from "next/image";
import { useState } from "react";
import { FaCartPlus, FaStar } from "react-icons/fa";
import { IProduct } from "../../utils/types";
interface IProps {
  product: IProduct;
}
const ProductItem = ({ product }: IProps) => {
  const MAX_RATING = 5;
  const MIN_RATING = 1;

  const [rating, setRating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING)
  );
  return (
    <div className="px-4 mx-auto shadow-md cursor-pointer ">
      <Image
        src={product.img}
        width={1000}
        height={1000}
        alt="product"
        className="object-contain w-full"
      />
      <hr />
      <h4 className="my-3 text-sm">{product.title}</h4>
      <div className="flex gap-1 mb-3">
        {Array(rating)
          .fill(0)
          .map((_, i) => (
            <FaStar key={i} className="h-5 text-yellow-500" />
          ))}
      </div>
      <div className="mb-3 font-bold tracking-wider">₦ {product.price}</div>

      <button className=" btn-primary">ADD TO CART</button>
    </div>
  );
};

export default ProductItem;
