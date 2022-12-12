import axios from "axios";
import { toast } from "react-toastify";
import { IUserRegData } from "../../utils/types";
import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

const RegisterForm = ({ setIsLoading }: { setIsLoading: any }) => {
  const router = useRouter();
  const { data, status } = useSession();
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

  const registerClickHandler = async () => {
    if (
      userInput.firstName.trim().length === 0 ||
      userInput.lastName.trim().length === 0 ||
      userInput.email.trim().length === 0 ||
      userInput.password.trim().length === 0
    ) {
      toast.error(`error`);
      return;
    }
    if (userInput.password !== userInput.password2) {
      toast.error(`password not match`);
    } else {
      const userData = {
        firstName: userInput.firstName,
        lastName: userInput.lastName,
        email: userInput.email,
        password: userInput.password,
      };

      try {
        await axios.post("/api/auth/signup", userData);
        const result = await signIn("credentials", {
          redirect: false,
          email: userInput.email,
          password: userInput.password,
        });
        if (result?.status) {
          router.push("/");
        }
        if (result?.error) {
          toast(result.error);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (data?.user) {
      router.push("/");
    }
  }, [router, data]);

  return (
    <>
      <div className="">
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
        <div className="mt-5 text-center intro-x xl:mt-8 xl:text-left">
          <button
            className="btn-primary"
            onClick={() => registerClickHandler()}
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
