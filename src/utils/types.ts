import { StaticImageData } from "next/image";
import { IconType } from "react-icons";
export interface PageMeta {
  title: string;
  description: string;
  // cardImage: string;
}

export interface IAccount {
  icon: IconType;
  text: string;
}

export interface IProduct {
  id: string;
  title: string;
  slug: string;
  category: string;
  price: number;
  img: StaticImageData;
  amount: number;
  brand: string;
  rating: number;
  numReviews: number;
  countInStock: number;
  description: string;
}

export interface IState {
  allProducts: IProduct[];
  allCategories: string[];
  cart: any[];
  totalPrice: number;
  nuOfItemsInCart: number;
  isCartOpen: boolean;
  isLoading: boolean;
  isSidebarOpen: boolean;
  user: null;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
}
