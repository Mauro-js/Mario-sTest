import { Inter } from "next/font/google";
import { IoGlassesOutline } from "react-icons/io5";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const Header = () => {
  return (
    <header>
      <div>
        <h1>Mario's Test</h1>
        <IoGlassesOutline className="headerIcon" size={80} />
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
