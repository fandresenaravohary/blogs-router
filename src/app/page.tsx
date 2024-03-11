'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Home from "@/app/home/home";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/home');
  }, []);

  return <div>
    <Home/>
  </div>;
}