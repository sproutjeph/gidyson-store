import { GetStaticPaths, GetStaticProps } from "next";
import { ProductDetails } from "../../components";

type IProps = {
  id: string;
};

const ProductDetailsPage = ({ id }: IProps) => {
  return <ProductDetails id={id} />;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;

  return {
    props: {
      id,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default ProductDetailsPage;
