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
      await signIn("google", { callbackUrl: "http://localhost:3000" });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }
  async function handleFacebookSignin() {
    setIsLoading(true);
    try {
      await signIn("facebook", {
        callbackUrl:
          (process.env.NEXTAUTH_URL as string) || "http://localhost:3000",
      });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }

  return (
    <main className="">
      <button
        className="px-4 w-full flex justify-center gap-6 border-2 py-2 rounded-md mb-3 mt-4 bg-slate-800 text-white items-center"
        onClick={() => handleGoogleSignin()}
      >
        <span>Sign In With Google</span>
        <FaGoogle className="text-3xl text-red-500" />
      </button>
      <button
        className="px-4 flex justify-center gap-6 border-2 py-2 rounded-md mb-3 w-full bg-blue-600 text-white items-center"
        onClick={() => handleFacebookSignin()}
      >
        <span>Sing In with Facebook</span>
        <FaFacebook className="text-3xl text-white" />
      </button>
      <h4 className="text-center text-sm">OR With Email </h4>
      <div className="mt-2">
        <input
          type="email"
          className="form-control mb-4"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <input
          type="password"
          className="form-control"
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

      <div className="flex px-4 text-xs  text-slate-600">
        <button onClick={forgetPasswordHandler}>Forgot Password?</button>
      </div>
    </main>
  );
};

export default LoginForm;
