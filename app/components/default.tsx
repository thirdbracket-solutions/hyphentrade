"use client";
import { on } from "events";
import { Button, DarkThemeToggle, Navbar } from "flowbite-react";
import Image from "next/image";
import type { FC } from "react";

const DefaultHeaderNavigation: FC = function () {
  return (
    <header>
      <Navbar sticky-top fluid className="bg-white dark:bg-gray-900 ">
        <Navbar.Brand href="https://flowbite.com">
          <Image
            src="./logo.svg"
            width={32}
            height={32}
            className="mr-3 h-6 sm:h-9"
            alt="Hyphen Trade Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Hyphentrade
          </span>
        </Navbar.Brand>
        <div className="flex items-center gap-3 md:gap-2 lg:order-2 md:order-2">
          <DarkThemeToggle />
          <Button color="blue" href="#">
            Get started
          </Button>

          <Navbar.Toggle
            theme={{
              // icon: "h-5 w-5 shrink-0",
              base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
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
