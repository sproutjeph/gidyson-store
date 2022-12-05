import React from "react";
import ProductItem from "../product";
import { useAppSelector } from "../../store/hooks";
const ProductFeeds = () => {
  const { products } = useAppSelector((state) => state.products);
  return (
    <div className="grid grid-flow-row-dense gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductFeeds;
