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
          <IoGlassesOutline className="tracking-in-expand headerIcon" size={80} />,
          <IoGlasses className="tracking-in-expand headerIcon" size={80} />,
          <IoGlassesSharp className="tracking-in-expand headerIcon" size={80} />,
          <FaGlasses className="tracking-in-expand headerIcon" size={80} />,
          <IoIosGlasses className="tracking-in-expand headerIcon" size={80} />,
          <IoMdGlasses className="tracking-in-expand headerIcon" size={80} />,
          <LuGlasses className="tracking-in-expand headerIcon" size={80} />,
          <Gi3dGlasses className="tracking-in-expand headerIcon" size={80} />,
          <GiSunglasses className="tracking-in-expand headerIcon" size={80} />,
          <GiProtectionGlasses className="tracking-in-expand headerIcon" size={80} />
]

const Header = () => {
  const [title, setTitle] = useState("Mario");
  const [glass, setGlass] = useState(glasses[0]);
  const [vibrate, setVibrate] = useState("");

  const toggleTitle = () => {
    if(vibrate==="vibrate") {
      setVibrate("vibrate2")
    } else {
      setVibrate("vibrate")
    }
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
      <div className={"no-select " + vibrate} onClick={toggleTitle}>
        <h1 className="tracking-in-expand">{title}'s Test</h1>
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
