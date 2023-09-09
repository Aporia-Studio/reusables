"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AmazonHeader() {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(!show);
    console.log("Click happened");
  }

  return (
    <nav className="shadow">
      <div className="flex flex-col max-w-7xl mx-auto text-center items-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white sm:items-center">
        <div className="flex sm:items-center justify-center">
          <div className="flex gap-1">
            <Image src="/100.svg" width={32} height={32} alt="logo" />
            <Image src="/logo.svg" width={150} height={32} alt="logo" />
          </div>
        </div>
        <div className="flex gap-4 pt-5">
          <Link
            href="#"
            className="no-underline text-grey-darkest hover:text-blue-dark ml-2 hover:text-zinc-500 text-md hover:underline hover:underline-offset-4 hover:decoration-zinc-500"
          >
            Home
          </Link>
          <Link
            href="#"
            className="no-underline text-grey-darkest hover:text-blue-dark ml-2 hover:text-zinc-500 text-md hover:underline hover:underline-offset-4 hover:decoration-zinc-500"
          >
            Contact
          </Link>
          <Link
            href="#"
            className="no-underline text-grey-darkest hover:text-blue-dark ml-2 hover:text-zinc-500 text-md hover:underline hover:underline-offset-4 hover:decoration-zinc-500"
          >
            About
          </Link>
          <Link
            href="#"
            className="no-underline text-grey-darkest hover:text-blue-dark ml-2 hover:text-zinc-500 text-md hover:underline hover:underline-offset-4 hover:decoration-zinc-500"
          >
            Support
          </Link>
          <Link
            href="#"
            className="no-underline text-grey-darkest hover:text-blue-dark ml-2 hover:text-zinc-500 text-md hover:underline hover:underline-offset-4 hover:decoration-zinc-500"
          >
            Services
          </Link>
        </div>
      </div>
    </nav>
  );
}
