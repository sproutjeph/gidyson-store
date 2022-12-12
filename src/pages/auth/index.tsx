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
      <div className="block grid-cols-2 xl:grid gap-x-4">
        {/* BEGIN: Login Info */}
        <div className="flex-col hidden min-h-screen xl:flex">
          <div className="mt-20">
            <Image alt="" className="w-1/2 -mt-16" src={illustrationUrl} />
            <div className="mt-10 text-4xl font-medium leading-tight ">
              A few more clicks to <br />
              sign in to your account.
            </div>
            <div className="mt-5 text-lg text-opacity-70 dark:text-slate-400">
              Manage your account.
            </div>
            <div className="mt-3 text-md text-opacity-70 dark:text-slate-400">
              Dont have an account?{" "}
              <a
                onClick={() => setHasAccount(!hasAccount)}
                className="text-lg text-white cursor-pointer"
              >
                Click here
              </a>
            </div>
          </div>
        </div>
        {/* END: Login Info */}
        {/* BEGIN: Login Form */}
        <div className="flex h-screen mt-8 xl:h-auto">
          <div className="w-full px-4 mx-auto bg-white rounded-md xl:p-0 sm:w-3/4 lg:w-2/4 xl:w-auto">
            <h2 className="mt-3 text-2xl font-bold text-center xl:text-3xl xl:text-left">
              {hasAccount ? "Sign In" : "Register"}
            </h2>
            <div className="mt-2 text-center text-slate-500 xl:hidden">
              Sign in to your account. Manage your account.
            </div>
            <div className="mt-2 text-center text-slate-500 xl:hidden">
              {hasAccount ? "Don't have account?" : "Have account"}{" "}
              <a
                onClick={() => setHasAccount(!hasAccount)}
                className="cursor-pointer text-slate-600"
              >
                Click here
              </a>
            </div>
            {hasAccount ? (
              <LoginForm setIsLoading={setIsLoading} />
            ) : (
              <RegisterForm setIsLoading={setIsLoading} />
            )}

            <div className="mt-4 text-center text-slate-600">
              <a
                className="cursor-pointer text-primary"
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
