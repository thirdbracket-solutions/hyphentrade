import Image from "next/image";
import {
  MdEmail,
  MdFacebook,
  MdLocationPin,
  MdMyLocation,
  MdPhone,
  MdPhoneIphone,
} from "react-icons/md";
import Contact from "../contact";
import { IoMdHeart } from "react-icons/io";
import {
  Facebook,
  Instagram,
  Linkedin,
  Whatsapp,
} from "flowbite-react-icons/solid";
export function SocialMediaIconsFooterSection() {
  return (
    <footer
      id="contact"
      className="rounded-none bg-slate-50 p-4 py-8 dark:bg-gray-800 md:p-8 lg:p-10"
    >
      <div className="mx-auto max-w-screen-xl text-center">
        <div className="grid lg:grid-cols-2">
          <div className="mb-4 lg:mb-0 ">
            <a
              href="/"
              className=" flex items-center text-2xl font-semibold text-gray-900 dark:text-white "
            >
              <Image
                className="mr-2 h-8"
                width={47}
                height={47}
                src="/logo.svg"
                alt="logo"
              />
              Hyphen Trade
            </a>
            <span className="flex items-center justify-start gap-2 mt-4 text-sm text-gray-500 dark:text-gray-400 text-left px-2">
              <MdLocationPin className="w-4 h-4" />
              A1, House 17, Road 128, Gulshan 01, Dhaka 1212, Bangladesh
            </span>
            <span className="flex items-center justify-start gap-2 mt-4 text-sm text-gray-500 dark:text-gray-400 text-left px-2">
              <MdPhoneIphone className="w-4 h-4" />
              +8801713145313
            </span>
            <span className="flex items-center justify-start gap-2 mt-4 text-sm text-gray-500 dark:text-gray-400 text-left px-2">
              <MdEmail className="w-4 h-4" />
              info@hyphentrade.org
            </span>
          </div>
          <div className="flex  items-center lg:justify-end">
            <Contact />
          </div>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="block text-sm text-gray-500 dark:text-gray-400">
            © 2024-2025&nbsp;
            <a href="/" className="hover:underline">
              Hyphen Trade ™
            </a>
            . All Rights Reserved.
          </span>

          <div className="mt-4 flex justify-center space-x-6 sm:mt-0">
            <a
              href="#"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <Linkedin className="h-5 w-5 fill-current" />
            </a>
            <a
              // href="https://wa.me/+8801765692886"
              href="https://wa.me/+8801912003355"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <Whatsapp className="h-5 w-5 fill-current" />
            </a>
            <a
              href="#"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <Facebook className="h-5 w-5 fill-current" />
            </a>
            <a
              href="#"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <Instagram className="h-5 w-5 fill-current" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
