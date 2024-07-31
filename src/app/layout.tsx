import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/navbar";
import classes from "@/classes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "U of A Argentine Tango",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={classes(
          inter.className,
          "dark:bg-[#10172A] dark font-serif",
        )}
      >
        <div>Classes are currently on hold</div>
{/*         <Navbar />
        <main className="flex flex-col items-center justify-between lg:p-24 p-12">
          {children}
        </main>
        <div className="w-full text-center mb-20 text-gray-300 text-sm">
          Contact us with any questions at{" "}
          <a
            href="mailto:eric@uatango.com"
            target="_blank"
            className="text-blue-600"
          >
            eric@uatango.com
          </a>
        </div>
      </body> */}
    </html>
  );
}
