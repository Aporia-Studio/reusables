"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { MenuOpenIcon, MenuCloseIcon } from "@/lib/icons";

export default function NileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="#">
          <div className="flex gap-1 hover:cursor-pointer">
            <Image src="/100.svg" width={32} height={32} alt="logo" />
            <Image src="/logo.svg" width={150} height={32} alt="logo" />
          </div>
        </Link>
        {/* Menu icon (visible on small screens) */}
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            {menuOpen ? (
              <MenuCloseIcon
                fill="#000"
                height={24}
                width={24}
                className="mt-1"
              />
            ) : (
              <MenuOpenIcon
                fill="#000"
                height={24}
                width={24}
                className="mt-1"
              />
            )}
          </button>
        </div>

        {/* Menu links (visible on medium and large screens) */}
        <nav className="hidden sm:flex space-x-4 items-center gap-3">
          <Link href="#" className="text-black">
            Home
          </Link>
          <Link href="#" className="text-black">
            About
          </Link>
          <Link href="#" className="text-black">
            Contact
          </Link>
          <Link href="#" className="text-black">
            Menu
          </Link>
          <Button className="">Book Now</Button>
        </nav>
      </div>

      {/* Mobile menu (hidden by default) */}
      {menuOpen && (
        <div className="sm:hidden">
          <div className="bg-white py-7 px-4 mt-5 space-y-2 bg-zinc-100">
            <Link href="#" className="block">
              Home
            </Link>
            <Link href="#" className="block">
              About
            </Link>
            <Link href="#" className="block">
              Contact
            </Link>
            <Link href="#" className="block">
              Menu
            </Link>
            <Button>Book Now</Button>
          </div>
        </div>
      )}
    </div>
  );
}
