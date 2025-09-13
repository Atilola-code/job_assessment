"use client";
import "./globals.css";
import NavBar from "./components/NavBar";
import { useState } from "react";
import HeroSwiper from "./components/HeroSwiper";
import Generator from "./components/Generator";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <html lang="en">
      <body className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"}>
        <NavBar darkMode= {darkMode} toggleTheme={() => setDarkMode(!darkMode)}/>
          <HeroSwiper />
          <Generator />
        <main className="h-screen transition-colors">{children}</main>
      </body>
    </html>
  );
}
