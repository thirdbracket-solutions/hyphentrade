"use client";
import { on } from "events";
import { Button, DarkThemeToggle, Flowbite, Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import { MdMenu } from "react-icons/md";
import logo from "../../public/logo.svg";

const DefaultHeaderNavigation: FC = function () {
  return (
    <header className="sticky top-0 z-50">
      <Navbar
        fluid
        border
        theme={{
          root: {
            base: "bg-slate-50 px-2 py-2.5 border-slate-200/60 dark:border-gray-700/40 dark:bg-gray-800 sm:px-4 ",
          },
        }}
      >
        <Navbar.Brand href="https://flowbite.com" className="">
          <Image
            src={logo}
            width={47}
            height={47}
            className="mr-1 h-6 sm:h-9"
            alt="Hyphen Trade Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Hyphentrade
          </span>
        </Navbar.Brand>
        <div className="flex items-center gap-3 md:gap-2 lg:order-2 md:order-2">
          <Flowbite>
            <DarkThemeToggle
              theme={{
                root: {
                  base: "flex items-center justify-center rounded-md  p-2 text-sm text-gray-500 hover:bg-slate-200 focus:outline-none dark:text-slate-400 dark:hover:bg-gray-700 dark:focus:ring-gray-800",
                  icon: "h-4 w-4 sm:h-5 sm:w-5",
                },
              }}
            />
          </Flowbite>

          <Button
            gradientDuoTone="cyanToBlue"
            size="md"
            theme={{
              size: {
                md: "!rounded-sm px-2 py-1.5 text-xs sm:text-sm sm:px-4 sm:py-2",
              },
              gradientDuoTone: {
                cyanToBlue:
                  "bg-gradient-to-r from-sky-600 to-primary-700 text-white focus:ring-2 focus:ring-primary-300 enabled:hover:bg-gradient-to-bl dark:focus:ring-primary-800",
              },
            }}
          >
            Get Started
          </Button>

          <Navbar.Toggle
            barIcon={MdMenu}
            theme={{
              icon: "h-6 w-6 shrink-0",
              base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none  dark:text-gray-400 dark:hover:bg-gray-700  md:hidden",
            }}
          />
        </div>
        <Navbar.Collapse
          theme={{
            list: "mt-4 flex flex-col lg:mt-0 lg:flex-row md:flex-row md:mt-0 md:space-x-4 lg:space-x-8 lg:text-base lg:font-medium md:text-[14px] md:font-normal",
            // base: "w-full md:block md:w-auto ",
          }}
          className="lg:order-1 md:order-1"
        >
          <Navbar.Link
            theme={{
              active: {
                on: "bg-primary-700 text-white dark:text-white md:bg-transparent md:text-primary-700",
                off: "border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-primary-700 md:dark:hover:bg-transparent md:dark:hover:text-white",
              },
            }}
            active
            href="#"
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            href="#"
            theme={{
              active: {
                on: "bg-primary-700 text-white dark:text-white md:bg-transparent md:text-primary-700",
                off: "border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-primary-700 md:dark:hover:bg-transparent md:dark:hover:text-white",
              },
            }}
          >
            Features
          </Navbar.Link>
          <Navbar.Link
            href="#"
            theme={{
              active: {
                on: "bg-primary-700 text-white dark:text-white md:bg-transparent md:text-primary-700",
                off: "border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-primary-700 md:dark:hover:bg-transparent md:dark:hover:text-white",
              },
            }}
          >
            Products
          </Navbar.Link>
          <Navbar.Link
            href="#"
            theme={{
              active: {
                on: "bg-primary-700 text-white dark:text-white md:bg-transparent md:text-primary-700",
                off: "border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-primary-700 md:dark:hover:bg-transparent md:dark:hover:text-white",
              },
            }}
          >
            About Us
          </Navbar.Link>

          <Navbar.Link
            href="#"
            theme={{
              active: {
                on: "bg-primary-700 text-white dark:text-white md:bg-transparent md:text-primary-700",
                off: "border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-primary-700 md:dark:hover:bg-transparent md:dark:hover:text-white",
              },
            }}
          >
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default DefaultHeaderNavigation;