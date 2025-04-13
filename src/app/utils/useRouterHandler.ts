"use client"

import { useRouter } from "next/navigation";

const useRouterHandler = () => {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return { navigateTo };
};

export default useRouterHandler;
