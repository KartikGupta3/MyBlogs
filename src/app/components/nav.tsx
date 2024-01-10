import React, { ReactNode } from "react";

interface NavItemProps {
  children: ReactNode;
}

export default function Nav() {
  return (
    <nav className="flex justify-between items-center bg-white p-4 shadow-md">
      <div className="text-2xl font-bold text-gray-800">MyUniverse</div>

      <ul className="flex gap-8">
        <NavItem>Home</NavItem>
        <NavItem>Blogs</NavItem>
        <NavItem>Write</NavItem>
        <NavItem>Login</NavItem>
      </ul>
    </nav>
  );
}

const NavItem: React.FC<NavItemProps> = ({ children }) => (
  <li>
    <button className="text-gray-600 hover:text-gray-800 transition duration-300 focus:outline-none">
      {children}
    </button>
  </li>
);
