"use client"
import { useState } from "react";

type MenuItem = {
  label: string;
  path: string;
};

interface NavbarProps {
  menuItems: MenuItem[];
}

export function Navbar({ menuItems }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="relative w-full">
      <nav className="px-4 py-0.5 w-full bg-brand-800 justify-between items-center">
        <div>Logo</div>
        <div onClick={() => setIsMenuOpen(!setIsMenuOpen)}>Menu icon</div>
      </nav>
      {isMenuOpen && (
        <div className="pt-1 py-0.5 px-2">
          {menuItems.map((item) => {
            return <div key={item.path}>{item.label}</div>;
          })}
        </div>
      )}
    </div>
  );
}
