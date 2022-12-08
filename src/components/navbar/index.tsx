import Image from "next/image";
import { useRouter } from "next/router";
import { BsCart4 } from "react-icons/bs";
import GidysonLogo from "../gidysonLogo";
import { FaBars, FaSearch } from "react-icons/fa";
import { useSession, signIn, signOut } from "next-auth/react";
import { openSidebar } from "../../featuers/sidebar/sidebarSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import { useState } from "react";
import SmallProfile from "../smallProfile";
const Navbar = () => {
  const router = useRouter();
  const { data, status } = useSession();
  const userImage = data?.user?.image;
  console.log(data?.user);
  const [showProfile, setShowProfile] = useState(false);

  const dispatch = useAppDispatch();
  const { totalCartItems } = useAppSelector((state) => state.cart);

  return (
    <>
      <nav className="w-full shadow-sm fixed top-0 z-50 bg-white ">
        <div className="flex items-center justify-between max-w-6xl p-4 mx-auto md:py-6 md:px-0 relative">
          <ul className="flex items-center gap-4">
            <FaBars
              className="text-xl cursor-pointer md:text-2xl"
              onClick={() => dispatch(openSidebar())}
            />
            <GidysonLogo />
          </ul>
          <div className="items-center flex-1 hidden gap-2 p-1 px-3 ml-10 border rounded-md md:flex ">
            <FaSearch className="text-xl cursor-pointer" />
            <input
              type="text"
              className="w-full border-none appearance-none outline-transparent"
              placeholder="Search Products, Brands and Category"
            ></input>
          </div>
          <button className="hidden px-3 py-2 ml-2 mr-10 tracking-wider text-white rounded-md md:block bg-primary900 hover:bg-primary800 text-md">
            Search
          </button>
          <ul className="flex items-center gap-5 ">
            <FaSearch className="text-xl cursor-pointer md:hidden" />
            {status === "authenticated" ? (
              <div
                onClick={() => setShowProfile(!showProfile)}
                className="flex flex-shrink-0 cursor-pointer flex-col items-center"
              >
                <Image
                  width={100}
                  height={100}
                  className="rounded-full w-10 h-10 object-contain"
                  src={data.user?.image as string}
                  alt="profile photo"
                />
                {showProfile ? (
                  <SmallProfile setShowProfile={setShowProfile} />
                ) : null}
              </div>
            ) : (
              <button
                onClick={() => router.push("/auth")}
                className="capitalize"
              >
                sign in
              </button>
            )}

            <div
              className="relative cursor-pointer"
              onClick={() => router.push("/cart")}
            >
              <BsCart4 className="text-2xl md:text-3xl" />
              <span className="absolute top-[-6px] right-[-6px] z-10 flex h-4 w-4 items-center justify-center rounded-full bg-primary900  text-sm text-white">
                {totalCartItems}
              </span>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
