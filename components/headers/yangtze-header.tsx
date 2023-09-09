"use client";
import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle ,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { MenuOriginalIcon, MenuCloseIcon } from "@/lib/icons";

export default function YangtzeHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto flex md:flex-col md:items-center sm:items-start justify-between">
        <Link href="#">
          <div className="flex gap-1 py-3">
            <Image src="/100.svg" width={32} height={32} alt="logo" />
            <Image src="/logo.svg" width={150} height={32} alt="logo" />
          </div>
        </Link>
        <div className="sm:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            {menuOpen ? (
              <MenuOriginalIcon fill="#000" height={24} width={24} className="mt-1"/>
              ) : (
                <MenuCloseIcon fill="#000" height={24} width={24} className="mt-1"/>
                )}
          </button>
        </div>

        {/* Menu links (visible on medium and large screens) */}
        <nav className="hidden sm:flex space-x-4">
            <NavigationMenu>
              <NavigationMenuList className="gap-4">
                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink>ABOUT</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink>CONTACT</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink>SERVICES</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    MENU
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="flex gap-5 p-3 hover:cursor-pointer">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Takeaway</NavigationMenuLink>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Dine in</NavigationMenuLink>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Booking</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
        </nav>
      </div>

      {/* Mobile menu (hidden by default) */}
      {menuOpen && (
        <div className="lg:hidden flex pt-5 justify-center bg-zinc-100">
          <div>
          <NavigationMenu>
              <NavigationMenuList className="flex flex-col gap-4 ">
                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink className="hover:text-zinc-500">ABOUT</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink className="hover:text-zinc-500">CONTACT</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-zinc-100 hover:bg-zinc-100 ">
                    MENU
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="flex flex-col p-3 hover:cursor-pointer">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Takeaway</NavigationMenuLink>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Dine in</NavigationMenuLink>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Booking</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      )}
    </div>
  );
}
