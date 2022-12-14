import {
  myAccountData,
  ourCategoriesData,
  ourServicesData,
} from "../../utils/data";
import { MdChevronRight, MdOutlineCommentBank } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { closeSidebar } from "../../featuers/sidebar/sidebarSlice";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import GidysonLogo from "../gidysonLogo";
import SidebarItem from "./SidebarItem";
import Link from "next/link";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const { isSidebarOpen } = useAppSelector((state) => state.sidebar);

  return (
    <>
      <aside
        className={`shadow-md scrollbar-hide absolute top-0 z-50 h-screen w-[80vw] md:w-[30vw] transform overflow-y-scroll bg-white py-4 transition-all duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-[101%]"
        }`}
      >
        <div className="flex justify-between gap-2 pl-3">
          <GidysonLogo />
          <FaTimes
            className="mr-4 text-2xl text-red-300 cursor-pointer"
            onClick={() => {
              dispatch(closeSidebar());
            }}
          />
        </div>
        <hr className="my-4" />
        <Link href="/">
          <div className="flex gap-2 ml-4 cursor-pointer">
            <MdOutlineCommentBank className="text-2xl" />
            <span>Live Chat</span>
          </div>
        </Link>
        <hr className="my-4" />
        <div className="">
          <Link
            href="/customer"
            onClick={() => {
              dispatch(closeSidebar());
            }}
          >
            <div className="flex items-center justify-between gap-2 ml-4 uppercase cursor-pointer">
              <span className="text-mainColor">my gidyson account</span>
              <MdChevronRight className="mr-2 text-2xl" />
            </div>
          </Link>
          <ul className="flex flex-col gap-8 mt-4 ml-4">
            {myAccountData.map((item, i) => (
              <SidebarItem Icon={item.Icon} text={item.text} key={i} />
            ))}
          </ul>
        </div>
        <hr className="my-4" />
        <div className="">
          <Link href="/customer">
            <div className="flex items-center justify-between gap-2 ml-4 uppercase cursor-pointer">
              <span className="text-mainColor">our categories</span>
              <span className="mr-4 text-xs underline capitalize">
                {" "}
                see All
              </span>
            </div>
          </Link>
          <ul className="flex flex-col gap-8 mt-4 ml-4">
            {ourCategoriesData.map((item, i) => (
              <SidebarItem Icon={item.Icon} text={item.text} key={i} />
            ))}
          </ul>
        </div>
        <hr className="my-4" />
        <div className="">
          <Link href="/customer">
            <div className="flex items-center justify-between gap-2 ml-4 uppercase cursor-pointer">
              <span className="text-mainColor">our services</span>
              <span className="mr-4 text-xs underline capitalize">
                {" "}
                see All
              </span>
            </div>
          </Link>
          <ul className="flex flex-col gap-8 mt-4 ml-4">
            {ourServicesData.map((item, i) => (
              <SidebarItem Icon={item.Icon} text={item.text} key={i} />
            ))}
          </ul>
        </div>
        <hr className="my-4" />
        <div className="flex flex-col gap-8 ml-4">
          <Link href="/">
            <h4 className="cursor-pointer">Sell on Gidyson Trust Links</h4>
          </Link>
          <Link
            href="/contact"
            onClick={() => {
              dispatch(closeSidebar());
            }}
          >
            <h4 className="cursor-pointer">Contact us</h4>
          </Link>
          <Link
            href="/"
            onClick={() => {
              dispatch(closeSidebar());
            }}
          >
            <h4 className="cursor-pointer">Help Center</h4>
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
