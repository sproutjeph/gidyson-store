import React from "react";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
type IProps = {
  setShowProfile: any;
};
const SmallProfile = ({ setShowProfile }: IProps) => {
  const { data, status } = useSession();
  return (
    <div className="absolute bg-white w-72  top-[75px] shadow-lg z-50 right-14 rounded-md">
      <div className="bg-gray-300 h-20 p-4 rounded-t-md" />
      <div className="h-20 w-20 rounded-full bg-slate-100 mx-auto -mt-10 z-50">
        <Image
          width={200}
          height={200}
          src={data?.user?.image as string}
          alt="profile Photo"
          className="h-full w-full rounded-full object-contain"
        />
      </div>
      <div className="text-center">
        <h4 className="text-lg tracking-wider mt-2">{data?.user?.name}</h4>
        <h4 className="text-sm">{data?.user?.email}</h4>
      </div>
      <button
        onClick={() => {
          signOut({ redirect: false });
          setShowProfile(false);
        }}
        className="bg-blue-500 text-white py-1 px-4 rounded-b-md mx-auto block w-full mt-8 "
      >
        Sign Out
      </button>
    </div>
  );
};

export default SmallProfile;
