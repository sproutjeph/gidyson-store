import { calculateTotals } from "../featuers/cart/cartSlice";
import { Banner, ProductFeeds } from "../components";
import { useAppDispatch } from "../store/hooks";
import { useEffect } from "react";

export default function GidysonStore() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [dispatch]);

  return (
    <div className="">
      <Banner />
      <ProductFeeds />
    </div>
  );
}

// export async function getServerSideProps(context: any) {
//   const res = await fetch("https://fakestoreapi.com/products");

//   const products = await res.json();

//   return {
//     props: {
//       products,
//     },
//   };
// }
