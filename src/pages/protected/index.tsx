import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { LoadingIcon } from "../../components";

const Protected = () => {
  const router = useRouter();
  const { data, status } = useSession();
  console.log(status);

  useEffect(() => {
    if (status !== "authenticated") {
      router.push("/auth");
    }
  }, [status]);

  return <div>This page is Protected</div>;
};

export default Protected;
