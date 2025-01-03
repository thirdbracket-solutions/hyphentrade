import Image from "next/image";

export function LogoCTALinksImageFeatureListContentSection() {
  return (
    <section className="bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 lg:py-24">
        <div className="text-center">
          <Image
            alt="Hyphen Trade Logo"
            src="/logo.svg"
            width={47}
            height={47}
            className="mx-auto w-auto object-contain"
          />

          <div className="mt-4">
            <h2 className=" text-3xl font-bold leading-tight  text-gray-900 dark:text-white md:text-4xl lg:text-5xl capitalize">
              About Hyphen Trade
            </h2>
          </div>
        </div>
        {/* <div className="mx-auto mt-8 max-w-5xl lg:mt-16">
          <Image
            alt=""
            src="/cover-3.png"
            width={1024}
            height={694}
            className="w-full rounded-lg shadow-lg"
          />
        </div> */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:mt-16 lg:grid-cols-2 lg:gap-16">
          <div>
            <div>
              <h3 className="text-2xl leading-tight tracking-tight font-semibold text-gray-900 dark:text-white">
                Overview
              </h3>
              <p className="mt-4    text-gray-500 leading-6 dark:text-gray-400">
                The lineage of Hyphen Trade dates back to the 1950s when M. M.
                Agha Ltd. pioneered into commercial poultry farming followed by
                feed meal manufacturing. The company was a market leader in the
                field of poultry farming in the domiciled city. In the 1960s,
                the business further ventured into clearing and forwarding (C&F)
                services for serving clients in the port city of Chattogram. Key
                specialization areas of Hyphen Trade include the following:
              </p>
            </div>
            <ul className="mt-8 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2">
              <li className="flex items-center gap-2.5">
                <GreenCheckIconSVG />
                <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Supply Chain Management
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <GreenCheckIconSVG />
                <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Market development
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <GreenCheckIconSVG />
                <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Sales
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <GreenCheckIconSVG />
                <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Relationship Management
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <GreenCheckIconSVG />
                <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Support in Lightering
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <GreenCheckIconSVG />
                <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Quality Controle
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <GreenCheckIconSVG />
                <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Full Stack Sourcing
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <GreenCheckIconSVG />
                <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Support in Stevedoring Solutions
                </span>
              </li>
            </ul>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white leading-tight tracking-tight">
                Background
              </h3>
              <p className="mt-4 leading-6 text-gray-500 dark:text-gray-400">
                Come 2021, Hyphen Trade is a specialized company in Bangladesh
                that provides a bridge to the international commodity sellers to
                enter and serve the Bangladesh market. The company is well
                connected to the major commodity buyers in Bangladesh with a
                relationship spanning more than 14 years. Hyphen Trade offers a
                professional client relationship management model, one that is
                hardly practiced in market.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white leading-tight tracking-tight">
                Core Values
              </h3>
              <p className="mt-4 text-gray-500 dark:text-gray-400 leading-6">
                The company works by integrating itself with the commodity
                seller as a marketing, sales and support provider including
                packaging logistical solutions (lightering and stevedoring).
                Hyphen Trade works more like an arm of the commodity seller. Our
                offering presents substantial benefits to sellers who have the
                strategy to enter the Bangladesh market and serve it on a
                long-term basis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const GreenCheckIconSVG = () => (
  <svg
    className="h-5 w-5 text-primary-500"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);
