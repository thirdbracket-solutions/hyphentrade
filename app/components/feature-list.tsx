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
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "flowbite-react-icons/solid";
import Image from "next/image";
import { MdCheckCircle } from "react-icons/md";

export function LogoCTALinksImageFeatureListContentSection() {
  return (
    <section className="bg-slate-50 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl px-4   lg:px-6 py-8 sm:py-16 lg:py-24">
        <div>
          <h2 className=" text-3xl font-bold leading-tight tracking-tight  text-gray-900 dark:text-white md:text-4xl lg:text-5xl capitalize">
            About Hyphen Trade
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:mt-16 lg:grid-cols-2 lg:gap-16">
          <div>
            <div>
              <h3 className="text-2xl leading-tight tracking-tight font-semibold text-gray-900 dark:text-white">
                Overview
              </h3>
              <p className="mt-4 text-justify   text-gray-500 leading-6 dark:text-gray-400">
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
              <p className="mt-4 text-justify   text-gray-500 leading-6 dark:text-gray-400">
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
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white leading-tight tracking-tight">
                Field of Work
              </h3>
              <p className="mt-4 leading-6 text-gray-500 dark:text-gray-400 text-justify">
                Key specialization areas of Hyphen Trade include the following:
              </p>
              <List ordered className="space-y-4 mt-4">
                <ListItem>
                  <span className="text-base font-semibold text-gray-500 dark:text-gray-400">
                    GTG Contracts / International Tenders
                  </span>
                  <List nested>
                    <li className="flex items-center  gap-x-2 mt-2.5">
                      <GreenCheckIconSVG />
                      {/* <MdCheckCircle className="w-6 h-6 pt-2.5 text-primary-500 shrink-0" /> */}
                      <span className="text-base font-normal text-gray-500 dark:text-gray-400 text-justify">
                        Expertise in working as an agent for the entire
                        end-to-end process for supply of commodities to the
                        Government of Bangladesh under GTG
                        contracts/international tenders
                      </span>
                    </li>
                  </List>
                </ListItem>
                <ListItem>
                  <span className="text-base font-semibold text-gray-500 dark:text-gray-400 text-justify">
                    Private Sector Sales
                  </span>
                  <List nested>
                    <li className="flex items-center gap-2.5 mt-2">
                      <GreenCheckIconSVG />
                      <span className="text-base font-normal text-gray-500 dark:text-gray-400 text-justify">
                        Generate sales leads
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <GreenCheckIconSVG />
                      <span className="text-base font-normal text-gray-500 dark:text-gray-400 text-justify">
                        Convert leads
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <GreenCheckIconSVG />
                      <span className="text-base font-normal text-gray-500 dark:text-gray-400 text-justify">
                        Provide critical support services to the buyers
                        (essential for sustenance):
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <GreenCheckIconSVG />
                      <span className="text-base font-normal text-gray-500 dark:text-gray-400 text-justify">
                        Provide market updates on price, competition,
                        opportunities etc. regularly
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <GreenCheckIconSVG />
                      <span className="text-base font-normal text-gray-500 dark:text-gray-400 text-justify">
                        Rollout a “Relationship Management” model (as opposed to
                        working on deal basis)
                      </span>
                    </li>
                  </List>
                </ListItem>
                <ListItem>
                  <span className="text-base font-semibold text-gray-500 dark:text-gray-400 text-justify">
                    Support Services
                  </span>
                  <List nested>
                    <li className="flex items-center gap-2.5 mt-2">
                      <GreenCheckIconSVG />
                      <span className="text-base font-normal text-gray-500 dark:text-gray-400 text-justify">
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
        <div className="space-y-8 mb-4">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white leading-tight tracking-tight  text-center mt-8 lg:mt-16">
            Our Promoters
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 mt-4">
            <Card
              className="shadow-sm"
              theme={{
                root: {
                  children: "flex h-full flex-col justify-between gap-4 p-6",
                },
              }}
            >
              <div className="space-y-4">
                <Image
                  className="w-auto h-16 rounded-lg"
                  src="/sabbir.jpg"
                  alt="Sabbir Ahmed"
                  width={300}
                  height={346}
                />
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white ">
                  Shabbir Hossain
                </h3>
                <span className=" text-gray-500">CEO &amp; Co-Founder</span>
                <p className="text-gray-500 dark:text-gray-400 leading-6 text-justify">
                  Mr. Hossain is the Chief Executive Officer of Hyphen Trade who
                  brings in more than 14 years of expertise in international
                  trade finance having worked across multiple geographies in
                  Asia. International trade finance and corporate banking were
                  his forte in his 20 years of banking career. Prior to Hyphen
                  Trade, Mr. Hossain was heading a leading international
                  commercial bank in Bangladesh as it’s Chief Representative
                  running a trade book size of USD 01 (one) billion. Mr. Hossain
                  had earlier also worked for Asian Development Bank’s Trade
                  Finance Program, TFP (through BFC). Mr. Hossain completed his
                  Credit Skills Assessment (CSA) program (by Omega) and
                  Financial Institutions Risk Management (FIRM) program (by
                  Fitch).
                </p>
              </div>

              <ul className="flex space-x-4 sm:mt-0">
                <li>
                  <a
                    href="https://x.com/shabbirhn"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <Twitter className="size-5" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/shabbir-hossain-6929aa21/"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <Linkedin className="size-5" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <Facebook className="size-5" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <Instagram className="size-5" />
                  </a>
                </li>
              </ul>
            </Card>
            <Card
              className="shadow-sm"
              theme={{
                root: {
                  children: "flex h-full flex-col justify-between gap-4 p-6",
                },
              }}
            >
              <div className="space-y-4">
                <Image
                  className="w-auto h-16 rounded-lg"
                  src="/asgar.jpg"
                  alt="Sabbir Ahmed"
                  width={300}
                  height={346}
                />

                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white ">
                  Mohammed Asgar Dada
                </h3>
                <span className=" text-gray-500">Co-Founder</span>

                <p className="text-gray-500 dark:text-gray-400 leading-6 text-justify">
                  Mr. Dada has hands-on experience leading a broiler parent
                  poultry farm and steering it to register a production volume
                  of more than 12 million day-old chicks annually. Mr. Dada has
                  also successfully managed a poultry and fish feed
                  manufacturing business. Mr. Dada obtained BA in Economics from
                  the University of Nottingham in the UK in the year 1999.
                </p>
              </div>

              <ul className="flex space-x-4 sm:mt-0">
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <Twitter className="size-5" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <Linkedin className="size-5" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <Facebook className="size-5" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <Instagram className="size-5" />
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
    className="h-4 w-4 text-primary-500 shrink-0 self-baseline mt-1"
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
