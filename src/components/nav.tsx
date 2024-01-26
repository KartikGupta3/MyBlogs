"use client";
import React, { ReactNode, useState, useEffect } from "react";
import Link from "next/link";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig.js";
import { useRouter } from 'next/navigation';
interface NavItemProps {
  children: ReactNode;
}

const Nav: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/LogInPage");
      console.log("Logout clicked!");
    } catch (error) {
      console.error("Logout error", error);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative">
      <nav className="flex justify-between items-center bg-white p-4">
        <div
          className={`font-bold text-gray-800 text-xs md:text-xl lg:text-2xl`}
        >
          Kartik Gupta
        </div>
        <div className="md:hidden">
          {!isMenuOpen ? (
            <button
              className="text-gray-600 hover:text-gray-800 transition duration-300 focus:outline-none"
              onClick={toggleMenu}
            >
              ☰
            </button>
          ) : null}
        </div>
        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex gap-2 text-xs md:text-base gap-8`}
        >
          <Link href="/HomePage">
            <NavItem>Home</NavItem>
          </Link>
          <Link href="/Blogs">
            <NavItem>Blogs</NavItem>
          </Link>
          <Link href="/Blogs/WriteBlog">
            <NavItem>Write</NavItem>
          </Link>
          <button onClick={handleLogout}>
            <NavItem>Logout</NavItem>
          </button>
        </ul>
        {isMenuOpen && (
          <div className="md:hidden fixed top-0 right-0 h-full w-2/3 bg-white z-[999]">
            <button
              className="text-gray-600 hover:text-gray-800 transition duration-300 focus:outline-none absolute top-4 right-4"
              onClick={closeMenu}
            >
              ✕
            </button>
            <ul className="flex flex-col items-center justify-center h-full gap-6">
              <Link href="/HomePage">
                <NavItem>Home</NavItem>
              </Link>
              <Link href="/Blogs">
                <NavItem>Blogs</NavItem>
              </Link>
              <Link href="/Blogs/WriteBlog">
                <NavItem>Write</NavItem>
              </Link>
              <button onClick={handleLogout}>
                <NavItem>Logout</NavItem>
              </button>
            </ul>
          </div>
        )}
      </nav>
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"
          onClick={closeMenu}
        ></div>
      )}
    </div>
  );
};

const NavItem: React.FC<NavItemProps> = ({ children }) => (
  <li>
    <button className="text-gray-600 hover:text-gray-800 transition duration-300 focus:outline-none">
      {children}
    </button>
  </li>
);

export default Nav;
