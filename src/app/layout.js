'use client'
import { Inter } from "next/font/google";
import { IoGlassesOutline, IoGlasses, IoGlassesSharp } from "react-icons/io5";
import { FaGlasses } from "react-icons/fa6";
import { IoIosGlasses, IoMdGlasses } from "react-icons/io";
import { LuGlasses } from "react-icons/lu";
import { Gi3dGlasses, GiSunglasses, GiProtectionGlasses } from "react-icons/gi";

import "./globals.css";
import { useState, useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });

const titles = ["Mario", "Mauro", "Marco", "Pablo"];

const glasses = [
          <IoGlassesOutline className="headerIcon" size={80} />,
          <IoGlasses className="headerIcon" size={80} />,
          <IoGlassesSharp className="headerIcon" size={80} />,
          <FaGlasses className="headerIcon" size={80} />,
          <IoIosGlasses className="headerIcon" size={80} />,
          <IoMdGlasses className="headerIcon" size={80} />,
          <LuGlasses className="headerIcon" size={80} />,
          <Gi3dGlasses className="headerIcon" size={80} />,
          <GiSunglasses className="headerIcon" size={80} />,
          <GiProtectionGlasses className="headerIcon" size={80} />
]

const Header = () => {
  const [title, setTitle] = useState("Mario");
  const [glass, setGlass] = useState(glasses[0]);

  const toggleTitle = () => {
    const position = titles.indexOf(title);
    if(position=== 3) {
      setTitle(titles[0])
    }
    else {
      setTitle(titles[position+1]);
    }

    const glassIndex = Math.floor(Math.random() * glasses.length);
    setGlass(glasses[glassIndex]);
  }

  useEffect(() => {
    

    const timeout = setTimeout(toggleTitle,5000);

    return () => clearTimeout(timeout);
  })

  return (
    <header>
      <div onClick={toggleTitle}>
        <h1>{title}'s Test</h1>
        {glass}
      </div>
    </header>
  );
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
