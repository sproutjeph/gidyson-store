import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
// import { login, reset } from "../../featuers/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const LoginForm = () => {
  const dispatch = useAppDispatch();
  // const { isLoading, isError, isSuccess, message, user } = useAppSelector(
  //   (state) => state.auth
  // );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginClickHandler = () => {
    if (email.trim().length === 0 || password.trim().length === 0) {
      toast.error("Please provide you Email and password");
      return;
    }

    const userData = {
      email,
      password,
    };

    // dispatch(login(userData));
    console.log(email, password);
  };
  const forgetPasswordHandler = () => {
    // navigateTo("/forgot-password");
  };

  // useEffect(() => {
  //   if (isError) {
  //     toast.error(`${message}`);
  //   }
  //   if (isSuccess || user) {
  //     // navigateTo("/dashboard");
  //   }
  //   if (!user) {
  //     // navigateTo("/");
  //   }
  //   dispatch(reset());
  // }, [user, isError, isSuccess, dispatch]);
  return (
    <>
      <div className="mt-8 intro-x">
        <div className="mb-4 text-2xl font-medium leading-tight text-center text-white intro-x">
          Login
        </div>
        <input
          type="email"
          className="block px-4 py-3 intro-x login__input form-control"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <input
          type="password"
          className="block px-4 py-3 mt-4 intro-x login__input form-control"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
      </div>
      <div className="flex mt-4 text-xs intro-x text-slate-600 dark:text-slate-500 sm:text-sm">
        <div className="flex items-center mr-auto">
          <input
            id="remember-me"
            type="checkbox"
            className="mr-2 border form-check-input"
          />
          <label className="cursor-pointer select-none" htmlFor="remember-me">
            Remember me
          </label>
        </div>
        <button onClick={forgetPasswordHandler}>Forgot Password?</button>
      </div>
      <div className="mt-5 text-center intro-x xl:mt-8 xl:text-left">
        <button
          type="submit"
          className="w-full px-4 py-3 align-top btn btn-primary xl:w-32 xl:mr-3"
          onClick={loginClickHandler}
        >
          Login
        </button>
      </div>
    </>
  );
};

export default LoginForm;
