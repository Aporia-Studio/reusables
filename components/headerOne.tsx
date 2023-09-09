"use client";
import React, { useState } from "react";

export default function HeaderOne() {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(!show);
    console.log('Click happened');
  }

  return (
    <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline">
  <div className="mb-2 sm:mb-0">
    <a href="/" className="text-2xl no-underline text-gray-darkest">Home</a>
  </div>
  <div>
    <a href="/1" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">One</a>
    <a href="/2" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Two</a>
    <a href="/3" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Three</a>
  </div>
</nav>
  );
}
