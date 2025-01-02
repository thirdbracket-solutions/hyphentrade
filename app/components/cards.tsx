import { Card } from "flowbite-react";
import Image from "next/image";
import {
  ComputerSpeaker,
  DesktopPc,
  Fingerprint,
  Headphones,
  Keyboard,
  Printer,
  Tablet,
  Tag,
} from "flowbite-react-icons/outline";
import { FaBowlRice, FaPlateWheat } from "react-icons/fa6";
import { GiBeanstalk, GiPeas, GiSugarCane } from "react-icons/gi";

export default function ProductCategoriesWithCards() {
  return (
    <section className="bg-gray-50 py-8 antialiased md:py-16 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl lg:text-5xl capitalize text-center mb-4">
          Products
        </h2>
        <div className="sm:flex sm:items-center sm:justify-between sm:gap-4">
          <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400 leading-7">
            We are specialized to develop and create a market for sovereigns and
            international commodity sellers in Bangladesh. Hyphen Trade’s focus
            on the following product categories:
          </p>
          {/* <a
            href="#"
            title=""
            className="hover:text-primary-700 mt-4 hidden rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 sm:mt-0 lg:inline-block dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            role="button"
          >
            See all categories
          </a> */}
        </div>
        <div className="mb-4 mt-6 grid grid-cols-1 gap-4 text-center sm:mt-8 sm:grid-cols-2 lg:mb-0 lg:grid-cols-4 xl:gap-8">
          <Card className="grid place-content-center space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <FaPlateWheat className="mx-auto h-14 w-14 text-gray-400 dark:text-gray-500" />

            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              Wheat
            </p>
          </Card>
          <Card className="grid place-content-center space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <FaBowlRice className="mx-auto h-14 w-14 text-gray-400 dark:text-gray-500" />
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              Rice
            </p>
          </Card>
          <Card className="grid place-content-center space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <GiPeas className="mx-auto h-14 w-14 text-gray-400 dark:text-gray-500" />
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              Yellow Peas
            </p>
          </Card>
          <Card className="grid place-content-center space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <GiSugarCane className="mx-auto h-14 w-14 text-gray-400 dark:text-gray-500" />
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              Sugar
            </p>
          </Card>
          <Card className="grid place-content-center space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <GiBeanstalk className="mx-auto h-14 w-14 text-gray-400 dark:text-gray-500" />
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              Crude Soybean Oil
            </p>
          </Card>
        </div>
        {/* <a
          href="#"
          title=""
          className="hover:text-primary-700 mt-4 block w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 sm:mt-0 lg:hidden dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
          role="button"
        >
          See all categories
        </a> */}
      </div>
    </section>
  );
}
