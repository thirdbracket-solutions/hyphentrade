import { Button } from "flowbite-react";
import type { FC } from "react";
import { blue } from "tailwindcss/colors";
import Image from "next/image";

const AppScreenshotWithCTAsHero: FC = function () {
  return (
    <section className="bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-screen-xl px-4  text-center lg:px-12     py-8 sm:py-16 lg:py-24">
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white md:text-4xl lg:text-5xl capitalize max-w-screen-lg mx-auto">
          We establish markets for international commodity sellers in Bangladesh
        </h1>
        <p className="mb-8    sm:px-16  xl:px-48 text-lg  font-normal text-gray-500 dark:text-gray-400 leading-7 ">
          Hyphen Trade works to create a profitable and a sustainable business
          model for sovereigns and large international commodity sellers to
          serve the Bangladesh market – our business model is structured basis
          "one supplier–one product" approach
        </p>
        <div className="mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0 lg:mb-16">
          <Button
            href="/#about"
            gradientDuoTone="cyanToBlue"
            size="lg"
            theme={{
              gradientDuoTone: {
                cyanToBlue:
                  "bg-gradient-to-r from-sky-600 to-primary-700 text-white focus:ring-2 focus:ring-primary-300 enabled:hover:bg-gradient-to-bl dark:focus:ring-primary-800",
              },
            }}
          >
            About Us
          </Button>
          <Button
            href="/#products"
            color="gray"
            size="lg"
            className="[&>span]:items-center"
          >
            Our Products
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </div>
        <Image
          className="z-1 mx-auto rounded-lg border border-gray-200 dark:bg-gray-800  dark:border-gray-700  shadow-xl bg-slate-50     "
          src="/covernew.svg"
          alt="dashboard overview"
          width={1010}
          height={666}
        />
        {/* <Image
          className="z-1 mx-auto  hidden rounded-lg border  shadow-xl dark:block dark:border-gray-700   dark:bg-gray-800"
          src="/covernew.svg"
          width={1010}
          height={666}
          alt="dashboard overview dark"
        /> */}
      </div>
      {/* <div className="z-2 -mt-48 bg-gray-50 pb-8 pt-48 dark:bg-gray-800 sm:-mt-80 sm:pt-80 lg:pb-16">
        <div className="mx-auto px-4 text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
          <div className="mt-8 flex flex-wrap items-center justify-center text-gray-500 sm:justify-between">
            <a
              href="#"
              className="mb-5 mr-5 hover:text-gray-900 dark:hover:text-gray-400 lg:mb-0 flex items-center justify-center gap-2 text-lg font-bold"
            >
              <Image
                src="/bd.svg"
                alt=""
                width={100}
                height={100}
                className="h-10 w-auto "
              />
              <span>Republic Bangladesh</span>
            </a>
            <a
              href="#"
              className="mb-5 mr-5 hover:text-gray-900 dark:hover:text-gray-400 lg:mb-0 flex items-center justify-center gap-2 text-lg font-bold"
            >
              <Image
                src="/globe.svg"
                alt=""
                width={100}
                height={100}
                className="h-10 w-auto fill-blue-100"
              />
              <span>GTG</span>
            </a>
            <a
              href="#"
              className="mb-5 mr-5 hover:text-gray-900 dark:hover:text-gray-400 lg:mb-0 flex items-center justify-center gap-2 text-lg font-bold"
            >
              <Image
                src="/productboard.svg"
                alt=""
                width={100}
                height={100}
                className="h-10 w-auto "
              />
              <span>Product board</span>
            </a>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default AppScreenshotWithCTAsHero;
