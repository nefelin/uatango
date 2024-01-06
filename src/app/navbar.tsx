"use client";
import Link from "next/link";
import React, { useState } from "react";
import classes from "@/classes";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = () => (
    <>
      <li>
        <Link
          href="/"
          className="px-3 py-2 rounded-md text-sm font-medium hover:text-blue-800"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/schedule"
          className="px-3 py-2 rounded-md text-sm font-medium hover:text-blue-800"
        >
          Schedule
        </Link>
      </li>
      <li>
        <Link
          href="/staff"
          className="px-3 py-2 rounded-md text-sm font-medium hover:text-blue-800"
        >
          Who Are We
        </Link>
      </li>
      <li>
        <Link
          href="/faq"
          className="px-3 py-2 rounded-md text-sm font-medium hover:text-blue-800"
        >
          FAQ
        </Link>
      </li>
      <li>
        <Link
          href="/learn-tango"
          className="px-3 py-2 rounded-md text-sm font-medium hover:bg-amber-400 bg-amber-500"
        >
          Learn Tango
        </Link>
      </li>
    </>
  );

  const closeButton = (
    <button onClick={() => setIsOpen(false)}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 6L6 18"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6 6L18 18"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  );

  return (
    <>
      <nav className="text-blue-950 p-4 flex flex-row justify-between items-center w-full">
        <span className="lg:inline hidden">
          Argentine Tango at University of Arizona
        </span>
        <span className="lg:hidden inline">U of A Tango</span>

        <div className="hidden lg:flex space-x-4">
          <ul className="flex space-x-4 justify-center">
            <NavLinks />
          </ul>
        </div>

        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div
          className={classes(
            "absolute top-0 left-0 h-full w-full bg-white flex flex-col items-center justify-center space-y-4 lg:opacity-0 lg:pointer-events-none transition-opacity",
            isOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0",
          )}
        >
          {closeButton}
          <ul>
            <NavLinks />
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
