import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const LoginForm = ({ setIsLoading }: { setIsLoading: any }) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginClickHandler = async () => {
    if (email.trim().length === 0 || password.trim().length === 0) {
      toast.error("Please provide you Email and password");
      return;
    }

    await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });

    router.push("/protected");

    console.log(email, password);
  };
  const forgetPasswordHandler = () => {};

  async function handleGoogleSignin() {
    setIsLoading(true);
    try {
      await signIn("google", {
        callbackUrl: "http://localhost:3000/",
      });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }
  async function handleFacebookSignin() {
    setIsLoading(true);
    try {
      await signIn("facebook", {
        callbackUrl: "https://gidyson-store.vercel.app/",
      });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }

  return (
    <main className="">
      <button
        className="flex items-center justify-center w-full gap-6 px-4 py-2 mt-4 mb-3 text-white border-2 rounded-md bg-slate-800"
        onClick={() => handleGoogleSignin()}
      >
        <span>Sign In With Google</span>
        <FaGoogle className="text-3xl text-red-500" />
      </button>
      <button
        className="flex items-center justify-center w-full gap-6 px-4 py-2 mb-3 text-white bg-blue-600 border-2 rounded-md"
        onClick={() => handleFacebookSignin()}
      >
        <span>Sing In with Facebook</span>
        <FaFacebook className="text-3xl text-white" />
      </button>
      <h4 className="text-sm text-center">OR With Email </h4>
      <div className="mt-2">
        <input
          type="email"
          className="mb-4 rounded-md form-control"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <input
          type="password"
          className="rounded-md form-control"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
      </div>

      <div className="py-3">
        <button
          type="submit"
          className="text-xl font-bold tracking-widest btn-primary"
          onClick={loginClickHandler}
        >
          Login
        </button>
      </div>

      <div className="flex px-4 text-xs text-slate-600">
        <button onClick={forgetPasswordHandler}>Forgot Password?</button>
      </div>
    </main>
  );
};

export default LoginForm;
