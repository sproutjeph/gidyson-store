import { images } from "../constants";
import {
  FaAirbnb,
  FaElementor,
  FaEnvelope,
  FaFirstOrder,
  FaHeart,
  FaStar,
  FaMotorcycle,
} from "react-icons/fa";

import { MdToys } from "react-icons/md";
import { IAccount, IProduct } from "./types";

export const myAccountData: IAccount[] = [
  { icon: FaFirstOrder, text: "Orders" },
  { icon: FaEnvelope, text: "Inbox" },
  { icon: FaAirbnb, text: "Pending Orders" },
  { icon: FaAirbnb, text: "Gidyson Coupon" },
  { icon: FaHeart, text: "Saved Items" },
];
export const ourServicesData: IAccount[] = [
  { icon: FaStar, text: "Gidyson Prime" },
  { icon: FaStar, text: "Pay For Way Bill" },
  { icon: FaStar, text: "Pay For Loading" },
];
export const ourCategoriesData: IAccount[] = [
  { icon: FaFirstOrder, text: "Trycycles" },
  { icon: FaMotorcycle, text: "Motocycle" },
  { icon: FaAirbnb, text: "Phone & Tablet " },
  { icon: FaElementor, text: "Electronics" },
  { icon: FaElementor, text: "Spare Parts" },
  { icon: MdToys, text: "Automobile" },
];

interface IData {
  products: IProduct[];
}

const data: IData = {
  products: [
    {
      id: "0",
      title: "CB125",
      slug: "honda-cb125",
      category: "motorcycle",
      price: 2900,
      img: images.honda1,
      amount: 1,
      brand: "honda",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Honda CB125 Blue",
    },
    {
      id: "1",
      title: "TVS tricycle",
      slug: "tvs-tricycle",
      category: "tricycle",
      price: 7000,
      img: images.tvstricycle,
      amount: 1,
      brand: "TVS",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "TVS Tricycle",
    },

    {
      id: "4",
      title: "daylong tricycle",
      slug: "daylog-tricycle",

      category: "tricycle",
      price: 6500,
      img: images.daylongtri,
      amount: 1,
      brand: "daylong",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "daylong tircycle",
    },
    {
      id: "5",
      title: "haojue elegant",
      slug: "haojue-elegant",
      category: "motorcycle",
      price: 350000,
      img: images.elegent,
      amount: 1,
      brand: "hoajue",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "hoajue elegent eg125",
    },
    {
      id: "6",
      title: "haoujue lucky",
      slug: "haojue-lucky",
      category: "motorcycle",
      price: 500000,
      img: images.lucky,
      amount: 1,
      brand: "hoajue",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "hoajue lucky cd110",
    },
    {
      id: "7",
      title: "american power bike",
      slug: "american-power-bike",
      category: "motorcycle",
      price: 10000,
      img: images.power1,
      amount: 1,
      brand: "power bike",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "american power bike",
    },
    {
      id: "8",
      title: "american power bike",
      slug: "american-power-bike-2",
      category: "motorcycle",
      price: 10000,
      img: images.power2,
      amount: 1,
      brand: "power bike",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "american power bike",
    },
    {
      id: "9",
      title: "american power bike",
      slug: "american-power-bike-2",
      category: "motorcycle",
      price: 10000,
      img: images.power3,
      amount: 1,
      brand: "power bike",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "american power bike",
    },
    {
      id: "10",
      title: "Bearing",
      slug: "Bearing",
      category: "spare-parts",
      price: 300,
      img: images.Bearing,
      amount: 1,
      brand: "orange",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "bearing 6302 orange",
    },

    {
      id: "12",
      title: "backDanger",
      slug: "backDanger",
      category: "spare-parts",
      price: 300,
      img: images.backDanger,
      amount: 1,
      brand: "orange",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "backDanger boxer orange",
    },
    {
      id: "13",
      title: "battery",
      slug: "battery",
      category: "spare-parts",
      price: 300,
      img: images.battery,
      amount: 1,
      brand: "avata",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "avata battery",
    },
    {
      id: "14",
      title: "Back shock",
      slug: "Back shock",
      category: "spare-parts",
      price: 500,
      img: images.bkshock,
      amount: 1,
      brand: "orange",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "back shock absover",
    },

    {
      id: "16",
      title: "back Tire",
      slug: "back Tire",
      category: "spare-parts",
      price: 3000,
      img: images.tire,
      amount: 1,
      brand: "CST",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "back Tire 300/18",
    },
    {
      id: "17",
      title: "cilenser",
      slug: "cilenser",
      category: "spare-parts",
      price: 200,
      img: images.cilenser,
      amount: 1,
      brand: "fire bird",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "cilenser fire bird cilenser",
    },
  ],
};
export default data;
