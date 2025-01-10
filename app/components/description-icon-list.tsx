import { Badge } from "flowbite-react";
import type { FC } from "react";
import { GrStakeholder } from "react-icons/gr";
import {
  MdAccessible,
  MdAccessTimeFilled,
  MdAssistant,
  MdCastConnected,
  MdConnectWithoutContact,
  MdDataThresholding,
  MdDirections,
  MdGroups,
  MdGroups2,
  MdGroups3,
  MdGroupWork,
  MdOutlineSwitchAccessShortcut,
  MdSwitchAccessShortcut,
} from "react-icons/md";

const DescriptionWithFeatureListIconsSection: FC = function () {
  return (
    <section className="bg-slate-50 dark:bg-gray-800 px-4 py-8 sm:py-16 lg:px-6   lg:py-24">
      <div className="mb-8 lg:mb-16 max-w-screen-xl ">
        <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight   text-gray-900 dark:text-white md:text-4xl lg:text-5xl capitalize">
          Why Us?
        </h2>
        <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400 leading-7 max-w-screen-md">
          {/* Our team has a history in working for multinational corporates - both
          in and outside Bangladesh. We have a strong network of contacts in the
          GTG space and have a deep understanding of the market. */}
          Our offering is unparalleled in Bangladesh – we are organized to
          deliver the sales numbers on behalf of the international commodity
          sellers.
        </p>
      </div>
      <div className="space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
        <div className="space-y-2.5">
          <Badge
            color="gray"
            size="sm"
            icon={MdConnectWithoutContact}
            theme={{
              root: {
                size: {
                  sm: "p-2 text-base font-normal leading-6   ",
                },
                color: {
                  gray: "bg-gray-100 text-gray-800 group-hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:group-hover:bg-gray-600",
                },
              },
              icon: {
                on: "rounded-md  gap-2.5",
                size: {
                  sm: "size-5   text-primary-700 dark:text-primary-400 shrink-0 ",
                },
              },
            }}
          >
            Deep relationships with the stakeholders for GTG and international
            tenders
          </Badge>
          {/* <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 tracking-tight leading-tight">
          
            Deep relationships with the stakeholders for GTG and international
            tenders
          </h3> */}
          <p className="text-gray-500 dark:text-gray-400 leading-6">
            Our past work history signifies our strength in this field
          </p>
        </div>
        <div className="space-y-2.5">
          <Badge
            color="gray"
            size="sm"
            icon={MdDirections}
            theme={{
              root: {
                size: {
                  sm: "p-2 text-base font-normal leading-6   ",
                },
                color: {
                  gray: "bg-gray-100 text-gray-800 group-hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:group-hover:bg-gray-600",
                },
              },
              icon: {
                on: "rounded-md  gap-2.5",
                size: {
                  sm: "size-5   text-primary-700 dark:text-primary-400 shrink-0 ",
                },
              },
            }}
          >
            Direct access to all major private sector importers
          </Badge>

          <p className="text-gray-500 dark:text-gray-400 leading-6">
            Our senior management team has over 20 years of experience in
            handling commodity buyers in the Bangladesh market
          </p>
        </div>
        <div className="space-y-2.5">
          <Badge
            color="gray"
            size="sm"
            icon={MdDataThresholding}
            theme={{
              root: {
                size: {
                  sm: "p-2 text-base font-normal leading-6   ",
                },
                color: {
                  gray: "bg-gray-100 text-gray-800 group-hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:group-hover:bg-gray-600",
                },
              },
              icon: {
                on: "rounded-md  gap-2.5",
                size: {
                  sm: "size-5   text-primary-700 dark:text-primary-400 shrink-0 ",
                },
              },
            }}
          >
            Data-driven marketing
          </Badge>

          <p className="text-gray-500 dark:text-gray-400 leading-6">
            Our strategic competitive advantage lies in our capacity in
            real-time data analytics – this supports our marketing distinctively
            – our ability in data-driven marketing remains currently unmatched.
          </p>
        </div>
        <div className="space-y-2.5">
          <Badge
            color="gray"
            size="sm"
            icon={MdGroups3}
            theme={{
              root: {
                size: {
                  sm: "p-2 text-base font-normal leading-6   ",
                },
                color: {
                  gray: "bg-gray-100 text-gray-800 group-hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:group-hover:bg-gray-600",
                },
              },
              icon: {
                on: "rounded-md  gap-2.5",
                size: {
                  sm: "size-5   text-primary-700 dark:text-primary-400 shrink-0 ",
                },
              },
            }}
          >
            Professional team
          </Badge>

          <p className="text-gray-500 dark:text-gray-400 leading-6">
            Our team has a profound history in working for local and
            multinational corporates – we have a deep understanding of the
            business languages
          </p>
        </div>
        <div className="space-y-2.5">
          <Badge
            color="gray"
            size="sm"
            icon={MdAccessTimeFilled}
            theme={{
              root: {
                size: {
                  sm: "p-2 text-base font-normal leading-6   ",
                },
                color: {
                  gray: "bg-gray-100 text-gray-800 group-hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:group-hover:bg-gray-600",
                },
              },
              icon: {
                on: "rounded-md  gap-2.5",
                size: {
                  sm: "size-5   text-primary-700 dark:text-primary-400 shrink-0 ",
                },
              },
            }}
          >
            Structuring capabilities for ensuring on-time payment
          </Badge>

          <p className="text-gray-500 dark:text-gray-400 leading-6">
            eep access to all major bank’s decision makers in international
            trade – we are able to offer payment risk management - a unique
            offering for the Bangladesh market.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DescriptionWithFeatureListIconsSection;
