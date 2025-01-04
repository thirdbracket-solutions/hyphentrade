import { Badge } from "flowbite-react";
import { AiFillSafetyCertificate } from "react-icons/ai";
import {
  MdAssistantNavigation,
  MdCheck,
  MdDataExploration,
  MdFolderSpecial,
  MdGroup,
  MdGroups3,
  MdGroupWork,
  MdJoinFull,
  MdManageAccounts,
  MdOutlineGroup,
  MdOutlineGroups3,
} from "react-icons/md";

export function DefaultFeatureListSection() {
  return (
    <section className="bg-slate-50 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        <div className="mb-8 max-w-screen-md lg:mb-16">
          <h2 className="text-3xl font-bold leading-tight  text-gray-900 dark:text-white md:text-4xl lg:text-5xl capitalize mb-4">
            How Hyphen Trade Works?
          </h2>
          <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400 leading-7">
            Hyphen Trade works as an extension of an international commodity
            seller in Bangladesh. The model allows unique set of advantages
            which are listed below:
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
          <div className="space-y-4">
            <Badge
              color="gray"
              size="sm"
              icon={MdGroupWork}
              theme={{
                root: {
                  size: {
                    sm: "p-2 text-sm font-medium   ",
                  },
                  color: {
                    gray: "bg-gray-100 text-gray-800 group-hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:group-hover:bg-gray-600",
                  },
                },
                icon: {
                  on: "rounded-lg gap-2.5",
                  size: {
                    sm: "size-4  text-primary-700 dark:text-primary-400 shrink-0 ",
                  },
                },
              }}
            >
              A dedicated team in Bangladesh for market development, sales and
              relationship management
            </Badge>

            <p className="text-gray-500 dark:text-gray-400">
              A specialized, local team offers multiple layers of advantages
              such as access to management and owners of the buyers, early
              market information, relationship management etc.
            </p>
          </div>
          <div className="space-y-4">
            <Badge
              color="gray"
              size="sm"
              className="mb-2 "
              icon={MdDataExploration}
              theme={{
                root: {
                  size: {
                    sm: "p-2 text-sm font-medium   ",
                  },
                  color: {
                    gray: "bg-gray-100 text-gray-800 group-hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:group-hover:bg-gray-600",
                  },
                },
                icon: {
                  on: "rounded-lg gap-2.5",
                  size: {
                    sm: "size-4  text-primary-700 dark:text-primary-400 shrink-0 ",
                  },
                },
              }}
            >
              Analytics based market development approach
            </Badge>

            <p className="text-gray-500 dark:text-gray-400">
              We are a leader in commodity marketing using monthly data points
              driving our overall marketing proposition in Bangladesh – this is
              unique and it hardly practiced by any company in Bangladesh
            </p>
          </div>
          <div className="space-y-4">
            <Badge
              color="gray"
              size="sm"
              icon={MdAssistantNavigation}
              theme={{
                root: {
                  size: {
                    sm: "p-2 text-sm font-medium   ",
                  },
                  color: {
                    gray: "bg-gray-100 text-gray-800 group-hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:group-hover:bg-gray-600",
                  },
                },
                icon: {
                  on: "rounded-lg gap-2.5",
                  size: {
                    sm: "size-4  text-primary-700 dark:text-primary-400 shrink-0 ",
                  },
                },
              }}
            >
              Offering relationship management proposition to the buyers in
              Bangladesh (we do not work on a deal-by-deal basis)
            </Badge>

            <p className="text-gray-500 dark:text-gray-400">
              Commodity sellers are not able to offer the full relationship
              management model in Bangladesh – a proposition that offers an
              array of advantages.
            </p>
          </div>
          <div className="space-y-4">
            <Badge
              color="gray"
              size="sm"
              icon={MdFolderSpecial}
              theme={{
                root: {
                  size: {
                    sm: "p-2 text-sm font-medium   ",
                  },
                  color: {
                    gray: "bg-gray-100 text-gray-800 group-hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:group-hover:bg-gray-600",
                  },
                },
                icon: {
                  on: "rounded-lg gap-2.5",
                  size: {
                    sm: "size-4  text-primary-700 dark:text-primary-400 shrink-0 ",
                  },
                },
              }}
            >
              Exclusivity (Hyphen Trade works with a single seller for a
              specific product category){" "}
            </Badge>

            <p className="text-gray-500 dark:text-gray-400">
              We only work on an exclusive basis.
            </p>
          </div>
          <div className="space-y-4">
            <Badge
              color="gray"
              size="sm"
              icon={MdJoinFull}
              theme={{
                root: {
                  size: {
                    sm: "p-2 text-sm font-medium   ",
                  },
                  color: {
                    gray: "bg-gray-100 text-gray-800 group-hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:group-hover:bg-gray-600",
                  },
                },
                icon: {
                  on: "rounded-lg gap-2.5",
                  size: {
                    sm: "size-4  text-primary-700 dark:text-primary-400 shrink-0 ",
                  },
                },
              }}
            >
              Provide complete end-to-end solutions to the international
              commodity seller – major solutions include agency services for a
              GTG contract/international tender, lightering, stevedoring etc
            </Badge>

            <p className="text-gray-500 dark:text-gray-400">
              We offer the full array of facilities for an international
              commodity seller which leads to higher sales and reduced costs.
            </p>
          </div>
          <div className="space-y-4">
            <Badge
              color="gray"
              size="sm"
              icon={AiFillSafetyCertificate}
              theme={{
                root: {
                  size: {
                    sm: "p-2 text-sm font-medium   ",
                  },
                  color: {
                    gray: "bg-gray-100 text-gray-800 group-hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:group-hover:bg-gray-600",
                  },
                },
                icon: {
                  on: "rounded-lg gap-2.5",
                  size: {
                    sm: "size-4  text-primary-700 dark:text-primary-400 shrink-0 ",
                  },
                },
              }}
            >
              Payment risk management emanating from bank and country risk
            </Badge>

            <p className="text-gray-500 dark:text-gray-400">
              We have full expertise to carry out bank name checks, buyer name
              checks and fund availability checks in order to mitigate the
              payment risk emanating from Bangladesh.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
