import AlternateImageWithFeatureListSection from "./components/alternate";
import AppScreenshotWithCTAsHero from "./components/cta-app-preview";

import DefaultNewsletterSection from "./components/default-newsletter";
import DefaultPricingTable from "./components/default-pricing";
import DescriptionWithFeatureListIconsSection from "./components/description-icon-list";
import { LogoCTALinksImageFeatureListContentSection } from "./components/feature-list";
import GridLayoutTestimonialCards from "./components/grid-layout-cards";
import SearchBarWithLinksFAQSection from "./components/help-center-search";
import IllustrationWithStatisticsSocialProof from "./components/illustration";
import { DefaultFeatureListSection } from "./components/process";

export default function Home() {
  return (
    <main>
      <AppScreenshotWithCTAsHero />
      <LogoCTALinksImageFeatureListContentSection />
      <DescriptionWithFeatureListIconsSection />
      <DefaultFeatureListSection />
      {/* <AlternateImageWithFeatureListSection /> */}
      <GridLayoutTestimonialCards />
      <IllustrationWithStatisticsSocialProof />
      <DefaultPricingTable />
      <SearchBarWithLinksFAQSection />
      <DefaultNewsletterSection />
    </main>
  );
}
