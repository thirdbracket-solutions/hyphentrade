import ProductCategoriesWithCards from "./components/cards";
import AppScreenshotWithCTAsHero from "./components/cta-app-preview";

import DescriptionWithFeatureListIconsSection from "./components/description-icon-list";
import { LogoCTALinksImageFeatureListContentSection } from "./components/feature-list";

import { DefaultFeatureListSection } from "./components/process";

export default function Home() {
  return (
    <main>
      <div id="hero">
        <AppScreenshotWithCTAsHero />
      </div>
      <div id="about">
        <LogoCTALinksImageFeatureListContentSection />
      </div>
      <div id="why-us">
        <DescriptionWithFeatureListIconsSection />
      </div>
      <div id="how">
        <DefaultFeatureListSection />
      </div>

      <div id="products">
        <ProductCategoriesWithCards />
      </div>
    </main>
  );
}
