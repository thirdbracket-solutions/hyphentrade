import {
  Badge,
  Card,
  List,
  ListItem,
  Table,
  TableBody,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
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
                Hyphen Trade is a specialized company in Bangladesh that
                provides a bridge to the international commodity sellers to
                enter and serve the Bangladesh market. The company is well
                connected to all the major commodity buyers in Bangladesh – our
                relationships with the buyers span more than 14 years. Hyphen
                Trade offers a professional client relationship management
                model, one that is unique to the market. The company works by
                integrating itself with the commodity sellers as a marketing,
                sales and support provider including packaging logistical
                solutions (lightering and stevedoring). Hyphen Trade works more
                like an arm of the commodity seller. Our offering presents
                substantial benefits to sellers who have the strategy to enter
                the Bangladesh market and serve it on a long-term basis.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl leading-tight tracking-tight font-semibold text-gray-900 dark:text-white mt-4">
                Background
              </h3>
              <p className="mt-4    text-gray-500 leading-6 dark:text-gray-400">
                Hyphen Trade’s works with sovereigns and international commodity
                sellers located outside Bangladesh. The lineage of Hyphen Trade
                dates back to the 1950s when M. M. Agha Ltd. pioneered into
                commercial poultry farming followed by feed meal manufacturing.
                The company was a market leader in the field of poultry farming
                in the domiciled city. In the 1960s, the business further
                ventured into clearing and forwarding (C&F) services for serving
                clients in the port city of Chattogram.
              </p>
            </div>

            {/* <ul className="mt-8 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2">
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
            </ul> */}
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white leading-tight tracking-tight">
                Key Areas
              </h3>
              <p className="mt-4 leading-6 text-gray-500 dark:text-gray-400">
                Key specialization areas of Hyphen Trade include the following:
              </p>
              <List ordered className="space-y-4 mt-4">
                <ListItem>
                  <span className="text-base font-semibold text-gray-500 dark:text-gray-400">
                    GTG Contracts / International Tenders
                  </span>
                  <List nested>
                    {/* <Badge
                      size="sm"
                      color="gray"
                      className="text-base font-normal text-gray-500 dark:text-gray-400 rounded-md"
                    >
                      Expertise in working as an agent for the entire end-to-end
                      process for supply of commodities to the Government of
                      Bangladesh under GTG contracts/international tenders.
                    </Badge> */}
                    <li className="flex items-center gap-2.5">
                      <GreenCheckIconSVG />
                      <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Expertise in working as an agent for the entire
                        end-to-end process for supply of commodities to the
                        Government of Bangladesh under GTG
                        contracts/international tenders.
                      </span>
                    </li>
                  </List>
                </ListItem>
                <ListItem>
                  <span className="text-base font-semibold text-gray-500 dark:text-gray-400">
                    Private Sector Sales
                  </span>
                  <List nested>
                    <li className="flex items-center gap-2.5">
                      <GreenCheckIconSVG />
                      <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Generate sales leads
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <GreenCheckIconSVG />
                      <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Convert leads
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <GreenCheckIconSVG />
                      <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Provide critical support services to the buyers
                        (essential for sustenance)
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <GreenCheckIconSVG />
                      <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Provide market updates on price, competition,
                        opportunities etc. regularly
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <GreenCheckIconSVG />
                      <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Rollout a “Relationship Management” model (as opposed to
                        working on deal basis)
                      </span>
                    </li>
                  </List>
                </ListItem>
                <ListItem>
                  <span className="text-base font-semibold text-gray-500 dark:text-gray-400">
                    Support Services
                  </span>
                  <List nested>
                    <li className="flex items-center gap-2.5">
                      <GreenCheckIconSVG />
                      <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Packaging lightering and stevedoring solutions to the
                        international commodity sellers under GTG, international
                        tenders and private sales
                      </span>
                    </li>
                  </List>
                </ListItem>
              </List>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white leading-tight tracking-tight mt-8 lg:mt-16 text-center">
            Our Promoters
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 lg:mt-16">
            <Card className="shadow-sm">
              <Image
                className="w-8 h-auto rounded-lg"
                src="/sabbir.jpg"
                alt="Sabbir Ahmed"
                width={300}
                height={346}
              />

              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Shabbir Hossain
              </h3>
              <span className="-mt-3 text-gray-500">CEO &amp; Co Founder</span>
              <p className="text-gray-500 dark:text-gray-400">
                Mr. Hossain is the Chief Executive Officer of Hyphen Trade who
                brings in more than 14 years of expertise in international trade
                finance having worked across multiple geographies in Asia.
                <br />
                <br /> International trade finance and corporate banking were
                his forte in his 20 years of banking career. Prior to Hyphen
                Trade, Mr. Hossain was heading a leading international
                commercial bank in Bangladesh as it’s Chief Representative
                running a trade book size of USD 01 (one) billion. Mr. Hossain
                had earlier also worked for Asian Development Bank’s Trade
                Finance Program, TFP (through BFC). <br />
                <br />
                Mr. Hossain completed his Credit Skills Assessment (CSA) program
                (by Omega) and Financial Institutions Risk Management (FIRM)
                program (by Fitch).
              </p>
              <ul className="flex space-x-4 sm:mt-0">
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </Card>
            <Card className="shadow-sm flex flex-col justify-stretch">
              <Image
                className="w-8 h-auto rounded-lg"
                src="/asgar.jpg"
                alt="Sabbir Ahmed"
                width={300}
                height={346}
              />

              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Mohammed Asgar Dada
              </h3>
              <span className="-mt-3 text-gray-500">Promoter</span>
              <p className="text-gray-500 dark:text-gray-400">
                Mr. Dada has hands-on experience leading a broiler parent
                poultry farm and steering it to register a production volume of
                more than 12 million day-old chicks annually. Mr. Dada has also
                successfully managed a poultry and fish feed manufacturing
                business.
                <br />
                <br />
                Mr. Dada obtained BA in Economics from the University of
                Nottingham in the UK in the year 1999.
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </p>
              <ul className="flex space-x-4 sm:mt-0">
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

const GreenCheckIconSVG = () => (
  <svg
    className="h-5 w-5 text-primary-500 shrink-0"
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
