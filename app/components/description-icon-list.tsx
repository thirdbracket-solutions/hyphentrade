import type { FC } from "react";
import { MdAssistant } from "react-icons/md";

const DescriptionWithFeatureListIconsSection: FC = function () {
  return (
    <section className="bg-slate-50 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl items-center px-4 py-8 sm:py-16 lg:grid lg:gap-8 lg:px-6 xl:grid-cols-3 xl:gap-24">
        <div className="mb-8 lg:mb-0">
          <h2 className="mb-4 text-3xl font-bold leading-tight  text-gray-900 dark:text-white md:text-4xl lg:text-5xl capitalize">
            Why Us?
          </h2>
          <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400 leading-7">
            Our team has a history in working for multinational corporates -
            both in and outside Bangladesh. We have a strong network of contacts
            in the GTG space and have a deep understanding of the market.
          </p>
          <a
            href="#"
            className="inline-flex items-center text-lg font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
          >
            Learn more
            <svg
              className="ml-1 h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
        <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
          <div>
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900 lg:h-12 lg:w-12">
              <svg
                className="h-5 w-5 text-primary-600 dark:text-primary-300 lg:h-6 lg:w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 tracking-tight leading-tight">
              Experties & Professionalism
            </h3>
            <p className="text-gray-500 dark:text-gray-400 leading-6">
              We have a working relationship with the key stakeholders in the
              GTG space. Our past work history signifies our strength in this
              field. team.
            </p>
          </div>
          <div>
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900 lg:h-12 lg:w-12">
              <svg
                className="h-5 w-5 text-primary-600 dark:text-primary-300 lg:h-6 lg:w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 tracking-tight leading-tight">
              Experience & Access
            </h3>
            <p className="text-gray-500 dark:text-gray-400 leading-6">
              We have direct access to all major importers in Bangladesh. Our
              senior management team has over 20 years of experience in handling
              commodity buyers in the Bangladesh market
            </p>
          </div>
          <div>
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900 lg:h-12 lg:w-12">
              <svg
                className="h-5 w-5 text-primary-600 dark:text-primary-300 lg:h-6 lg:w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-2xl  text-gray-900 dark:text-white mb-4 tracking-tight leading-tight font-semibold ">
              Data-driven Marketing
            </h3>
            <p className="text-gray-500 dark:text-gray-400 leading-6">
              Our strategic competitive advantage lies in our capability in
              real-time data analytics which drives marketing – this stands
              unmatched in the Bangladesh market
            </p>
          </div>
          <div>
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900 lg:h-12 lg:w-12">
              <svg
                className="h-5 w-5 text-primary-600 dark:text-primary-300 lg:h-6 lg:w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 tracking-tight leading-tight">
              On-Time Payment
            </h3>
            <p className="text-gray-500 dark:text-gray-400 leading-6">
              Structuring capabilities for ensuring deep access to all major
              bank’s decision makers in international trade – we are able to
              offer payment risk management which is a unique offering itself
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DescriptionWithFeatureListIconsSection;
