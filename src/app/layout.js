import { Inter } from "next/font/google";
import { IoGlassesOutline } from "react-icons/io5";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const Header = () => {
  return (
    <header className="text-white py-0 m-0">
      <div className="bg-cyan-700 max-h-28 max-w-56 md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg mx-auto text-center  flex-col md:flex-row  font-bold flex md:justify-between p-1">
        <span className="sm:my-auto my-1 text-4xl sm:text-4xl md:text-5xl lg:text-6xl">Mario's Test</span>
        <IoGlassesOutline className=" md:my-auto mx-auto md:mx-1 text-amber-400" size={80} />
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
