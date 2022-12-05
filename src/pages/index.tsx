import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import { useAppSelector } from "../store/hooks";
import { useAppDispatch } from "../store/hooks";
import { Sidebar, Portal, Overlay, Banner, ProductFeeds } from "../components";
import { calculateTotals } from "../featuers/cart/cartSlice";

export default function GidysonStore() {
  const dispatch = useAppDispatch();
  const { isSidebarOpen } = useAppSelector((state) => state.sidebar);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [dispatch]);

  return (
    <div className="">
      <Banner />
      <ProductFeeds />

      <Portal>
        <Sidebar />
        {isSidebarOpen ? <Overlay /> : null}
      </Portal>
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
