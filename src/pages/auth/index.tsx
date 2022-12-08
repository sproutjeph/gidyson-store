import Image from "next/image";
import React, { useState } from "react";
import illustrationUrl from "../../assets/images/tvs_tricycle.jpg";

import { LoginForm, RegisterForm, LoadingIcon } from "../../components";

const AuthPage = () => {
  const [hasAccount, setHasAccount] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {isLoading && <LoadingIcon iconColor="white" />}
      <div className="block xl:grid grid-cols-2 gap-x-4">
        {/* BEGIN: Login Info */}
        <div className="hidden xl:flex flex-col min-h-screen">
          <div className="mt-20">
            <Image alt="" className="w-1/2 -mt-16" src={illustrationUrl} />
            <div className="  font-medium text-4xl leading-tight mt-10">
              A few more clicks to <br />
              sign in to your account.
            </div>
            <div className=" mt-5 text-lg  text-opacity-70 dark:text-slate-400">
              Manage your account.
            </div>
            <div className="mt-3 text-md  text-opacity-70 dark:text-slate-400">
              Dont have an account?{" "}
              <a
                onClick={() => setHasAccount(!hasAccount)}
                className="text-white text-lg cursor-pointer"
              >
                Click here
              </a>
            </div>
          </div>
        </div>
        {/* END: Login Info */}
        {/* BEGIN: Login Form */}
        <div className="h-screen xl:h-auto flex mt-8">
          <div className="mx-auto  bg-white  px-4 xl:p-0 rounded-md  w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
            <h2 className=" font-bold text-2xl xl:text-3xl text-center xl:text-left">
              {hasAccount ? "Sign In" : "Register"}
            </h2>
            <div className=" mt-2 text-slate-500 xl:hidden text-center">
              Sign in to your account. Manage your account.
            </div>
            <div className=" mt-2 text-slate-500 xl:hidden text-center">
              {hasAccount ? "Don't have account?" : "Have account"}{" "}
              <a
                onClick={() => setHasAccount(!hasAccount)}
                className="text-slate-600 cursor-pointer"
              >
                Click here
              </a>
            </div>
            {hasAccount ? (
              <LoginForm setIsLoading={setIsLoading} />
            ) : (
              <RegisterForm setIsLoading={setIsLoading} />
            )}

            <div className=" mt-4 text-slate-600 text-center">
              <a
                className="text-primary cursor-pointer"
                onClick={() => setHasAccount(!hasAccount)}
              >
                {hasAccount ? "Don't have an account?" : "I have an account"}
              </a>
            </div>
            <div
              className={`text-sm mt-4  ${
                !hasAccount && "xl:mt-4"
              } text-slate-600 text-center xl:text-left`}
            >
              By signin up, you agree to our <span></span>
              <a className="text-primary" href="">
                Terms and Conditions
              </a>
              <span> </span>&<span> </span>
              <a className="text-primary" href="">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
        {/* END: Login Form */}
      </div>
    </>
  );
};

export default AuthPage;
