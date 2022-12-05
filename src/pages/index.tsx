import { Sidebar, Portal, Overlay, Banner, ProductFeeds } from "../components";
import styles from "../styles/Home.module.css";
import { useAppSelector } from "../store/hooks";

export default function GidysonStore({ products }: any) {
  const { isSidebarOpen } = useAppSelector((state) => state.sidebar);

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
