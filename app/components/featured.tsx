import { Badge, Card } from "flowbite-react";
import {
  ArrowRight,
  Minimize,
  OrderedList,
  SalePercent,
  Tag,
} from "flowbite-react-icons/outline";
import Image from "next/image";

export default function FeaturedProductCategories() {
  return (
    <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mb-4 flex items-center justify-between gap-4 md:mb-8">
          <h2 className=" font-semibold text-gray-900 dark:text-white text-2xl">
            Featured Products Catagories
          </h2>
          <a
            href="#"
            className="text-base font-medium text-gray-900 underline hover:no-underline dark:text-white"
          >
            See all products
          </a>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-5 xl:gap-8">
          <Card>
            <a href="#">
              <Image
                width={500}
                height={500}
                className="mx-auto  h-36   dark:invert"
                src="rice.svg"
                alt="controller"
              />
            </a>
            <Badge color="gray" className=" w-fit ">
              Minimum order 20kg
            </Badge>

            <a
              href="#"
              className="block font-semibold text-3xl text-gray-900 hover:underline dark:text-white"
            >
              Rice
            </a>

            <a
              href="#"
              className="inline-flex items-center gap-1.5 font-medium text-primary-700 hover:text-primary-600 hover:underline dark:text-primary-500 dark:hover:text-primary-400"
            >
              Explore rice deals
              <ArrowRight className="h-5 w-5" />
            </a>
          </Card>
          <Card>
            <a href="#">
              <Image
                width={500}
                height={500}
                className="mx-auto  h-36 dark:invert "
                src="wheat.svg"
                alt="controller"
              />
            </a>

            <Badge color="gray" className="me-2 inline-flex w-fit ">
              Minimum order 50kg
            </Badge>
            <a
              href="#"
              className="block font-semibold text-3xl text-gray-900 hover:underline dark:text-white"
            >
              Wheat
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 font-medium text-primary-700 hover:text-primary-600 hover:underline dark:text-primary-500 dark:hover:text-primary-400"
            >
              See more deals
              <ArrowRight className="h-5 w-5" />
            </a>
          </Card>
          <Card>
            <a href="#">
              <Image
                width={500}
                height={500}
                className="mx-auto h-36 dark:invert "
                src="peas.svg"
                alt="controller"
              />
            </a>
            <Badge color="gray" className="me-2 inline-flex w-fit ">
              Minimum order 10kg
            </Badge>
            <a
              href="#"
              className="text-3xl block font-semibold text-gray-900 hover:underline dark:text-white"
            >
              Yellow Peas
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 font-medium text-primary-700 hover:text-primary-600 hover:underline dark:text-primary-500 dark:hover:text-primary-400"
            >
              See more deals
              <ArrowRight className="h-5 w-5" />
            </a>
          </Card>
          <Card>
            <a href="#">
              <Image
                width={500}
                height={500}
                className="mx-auto  h-36 dark:invert "
                src="sugar.svg"
                alt="controller"
              />
            </a>
            <Badge color="gray" className="me-2 inline-flex w-fit ">
              Minimum order 10kg
            </Badge>
            <a
              href="#"
              className="text-3xl block font-semibold text-gray-900 hover:underline dark:text-white"
            >
              Sugar
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 font-medium text-primary-700 hover:text-primary-600 hover:underline dark:text-primary-500 dark:hover:text-primary-400"
            >
              See more deals
              <ArrowRight className="h-5 w-5" />
            </a>
          </Card>
          <Card>
            <a href="#">
              <Image
                width={500}
                height={500}
                className="mx-auto h-36 dark:invert "
                src="soybean.svg"
                alt="controller"
              />
            </a>
            <Badge color="gray" className="me-2 inline-flex w-fit ">
              Minimum order 10kg
            </Badge>
            <a
              href="#"
              className="text-3xl block font-semibold text-gray-900 hover:underline dark:text-white"
            >
              Crude Soybean Oil
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 font-medium text-primary-700 hover:text-primary-600 hover:underline dark:text-primary-500 dark:hover:text-primary-400"
            >
              See more deals
              <ArrowRight className="h-5 w-5" />
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
}
