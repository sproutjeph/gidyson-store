import PlaceHolderImage from "../../assets/images/no-photo.jpg";
import { IUserRegData } from "../../utils/types";
import React, { useState } from "react";
import Image from "next/image";
import { FaPhotoVideo } from "react-icons/fa";

const Settings = () => {
  const [userInput, setUserInput] = useState<IUserRegData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
  });
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="bg-white shadow-lg  rounded-lg mt-8 border border-gray-200 p-4">
        <h4 className="text-center text-green-700 text-xl uppercase tracking-wider">
          Settings
        </h4>

        <div className="">
          <div className=" w-24 h-24 relative mx-auto my-4">
            <Image
              src={PlaceHolderImage}
              width={200}
              height={200}
              alt="Customer Profile Photo"
              className="rounded-full w-full h-full"
            />
            <div className="w-full h-full top-0 absolute rounded-full bg-[rgba(0,0,0,.5)] flex items-center justify-center flex-col gap-y-1">
              <FaPhotoVideo className="text-white" />
              <span className="text-xs text-white">Updata Photo</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <input
            type="text"
            value={userInput.firstName}
            name="firstName"
            className="block px-4 py-2 rounded-md form-control"
            placeholder="First name"
            onChange={(e) => onChangeHandler(e)}
          />
          <input
            type="text"
            value={userInput.lastName}
            name="lastName"
            className="block px-4 py-2 rounded-md form-control"
            placeholder="Last name"
            onChange={(e) => onChangeHandler(e)}
          />
          <input
            type="email"
            value={userInput.email}
            name="email"
            className="block col-span-2 px-4 py-2 rounded-md form-control"
            placeholder="Email"
            onChange={(e) => onChangeHandler(e)}
          />
          <input
            type="password"
            value={userInput.password}
            name="password"
            className="block col-span-2 px-4 py-2 rounded-md form-control"
            placeholder="Password"
            onChange={(e) => onChangeHandler(e)}
          />
          <input
            type="password"
            value={userInput.password2}
            name="password2"
            className="block col-span-2 px-4 py-2 rounded-md form-control"
            placeholder="Comfirme Password"
            onChange={(e) => onChangeHandler(e)}
          />
        </div>
        <button className="bg-green-500 w-full py-2 rounded-md text-white hover:bg-green-600 mt-4">
          Save Changes
        </button>
      </div>
    </>
  );
};

export default Settings;
