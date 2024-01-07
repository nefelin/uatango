"use client";
import Link from "next/link";
import React, { useState } from "react";
import classes from "@/classes";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  const NavLinks = () => (
    <>
      <li>
        <Link
          href="/"
          className={classes(
            "px-3 py-2 rounded-md text-sm hover:text-blue-800",
            path === "/" ? "font-bold" : "font-medium",
          )}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/schedule"
          className={classes(
            "px-3 py-2 rounded-md text-sm hover:text-blue-800",
            path === "/schedule" ? "font-bold" : "font-medium",
          )}
        >
          Schedule
        </Link>
      </li>
      <li>
        <Link
          href="/staff"
          className={classes(
            "px-3 py-2 rounded-md text-sm hover:text-blue-800",
            path === "/staff" ? "font-bold" : "font-medium",
          )}
        >
          Who Are We
        </Link>
      </li>
      {/*<li>*/}
      {/*  <Link*/}
      {/*    href="/faq"*/}
      {/*    className="px-3 py-2 rounded-md text-sm font-medium hover:text-blue-800"*/}
      {/*  >*/}
      {/*    FAQ*/}
      {/*  </Link>*/}
      {/*</li>*/}
      <li className="lg:mt-0 mt-8">
        <Link
          href="/learn-tango"
          className="px-3 py-2 text-white rounded-md text-sm font-medium hover:bg-amber-400 bg-amber-500"
        >
          Take a Class
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
        className="dark:text-white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 6L6 18"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6 6L18 18"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  );

  return (
    <>
      <nav className="text-blue-950 dark:text-purple-100 p-4 px-8 flex flex-row justify-between items-center w-full bg-blue-50 dark:bg-blue-900">
        <span className="lg:inline hidden font-bold">
          Argentine Tango at University of Arizona
        </span>
        <span className="lg:hidden inline font-bold">U of A Tango</span>

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

      {(
        <div
          className={classes(
            "absolute dark:bg-black top-0 z-20 right-0 h-full w-2/5 bg-white shadow-2xl text-lg flex flex-col items-end text-right gap-4 py-4 px-4 space-y-4 lg:opacity-0 lg:pointer-events-none transition-opacity",
            isOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0",
          )}
        >
          <div className="w-full flex justify-end pr-2">{closeButton}</div>
          <ul onClick={() => setIsOpen(false)}>
            <NavLinks />
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
