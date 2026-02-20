"use client";

import type { Metadata } from "next";
import AppSidebar from "@/components/app-sidebar";
import AppHeader from "@/components/app-header";
import Footer from "@/components/footer";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    if (!accessToken) {
      router.push("/login");
    } else if (!user.isOnboarded) {
      router.push("/onboarding");
    }
  }, [router]);
  return (
    <div className="h-screen grid grid-rows-[auto_1fr_auto]">
      <AppHeader />
      <div className="max-w-[1400px] w-full mx-auto grid lg:grid-cols-[250px_1fr] md:grid-cols-[220px_1fr] grid-cols-1  items-start  ">
        <div className=" ">
          <AppSidebar />
        </div>
        <div className=" bg-white">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

/*


<main className="grid lg:grid-cols-[436px_1fr] md:grid-cols-[220px_1fr] grid-cols-1 md:px-[24px] px-[5px] h-screen items-start ">
        <AppSidebar />
        {children}
      </main>

      

*/
