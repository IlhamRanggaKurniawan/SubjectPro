"use client"

import "./globals.css";
import { ThemeProvider } from "next-themes";
import SideBar from "@/components/myComponents/SideBar";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const hideNavbar = /^\/(login|register)$/.test(pathname);

  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {!hideNavbar && <SideBar />}
        <div className={`${hideNavbar ? "" : "pl-64 min-h-screen"}`}>
          {children}
        </div>
      </body>
    </html>
  );
}
