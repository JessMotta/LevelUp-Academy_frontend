"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import EduIcon from "/public/assets/edu-icon.svg";

type MenuItem = {
  label: string;
  path: string;
};

interface NavbarProps {
  menuItems: MenuItem[];
}

export function Navbar({ menuItems }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const router = useRouter();

  return (
    <div className="relative w-full">
      <nav className="px-4 py-2 w-full h-12 bg-brand-800 flex justify-between items-center">
        <button onClick={() => router.push("/")}>
          <Image src={EduIcon} alt="EduIcon" width={32} />
        </button>
        <button onClick={() => setIsMenuOpen(!setIsMenuOpen)}>
          <IoMenu className="h-8 w-8 fill-green-12 color-white text-brand-50" />
        </button>
      </nav>
      {isMenuOpen && (
        <div className="pt-1 py-0.5 px-2">
          {menuItems.map((item) => {
            return (
              <div key={item.path} onClick={() => router.push(item.path)}>
                {item.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
