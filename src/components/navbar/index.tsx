import Link from "next/link";
import Image from "next/image";
import { BsCart4 } from "react-icons/bs";
import { FaBars, FaSearch } from "react-icons/fa";
import GidysonLogo from "../gidysonLogo";
import { openSidebar } from "../../featuers/sidebar/sidebarSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { totalCartItems } = useAppSelector((state) => state.cart);
  const user = {
    name: "Jephthah Mbah",
    email: "donjeph@gmail.com",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  };

  return (
    <>
      <nav className="w-full shadow-sm fixed top-0 z-50 bg-white">
        <div className="flex items-center justify-between max-w-6xl p-4 mx-auto md:py-6 md:px-0">
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
          <ul className="flex items-center gap-5">
            <FaSearch className="text-xl cursor-pointer md:hidden" />
            <Link href="/auth" className="flex flex-shrink-0 cursor-pointer">
              <Image
                width={40}
                height={40}
                className="rounded-full"
                src={user.imageUrl}
                alt="profile photo"
              />
            </Link>
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
