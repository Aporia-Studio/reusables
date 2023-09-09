'use client';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="flex justify-between items-center text-sm lg:p-4 lg:pl-16 lg:pr-16 md:p-3 md:pl-5 md:pr-5 p-3 pl-5 pr-5 bg-white ">
    <div>
        <Image src="/sample-logo.svg" width={150} height={32} alt="logo"/>
    </div>
    <div>
      <NavigationMenu>
        <NavigationMenuList className="gap-4">
          <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink>
              ABOUT
            </NavigationMenuLink>
          </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink>
              CONTACT
            </NavigationMenuLink>
          </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink>
              MENU
            </NavigationMenuLink>
          </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink>
            <Button variant="default">Book Now</Button>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
    </div>
  );
}
