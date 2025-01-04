import ProductCategoriesWithCards from "./components/cards";
import AppScreenshotWithCTAsHero from "./components/cta-app-preview";

import DescriptionWithFeatureListIconsSection from "./components/description-icon-list";
import { LogoCTALinksImageFeatureListContentSection } from "./components/feature-list";

import { DefaultFeatureListSection } from "./components/process";

import Contact from "./contact";

export default function Home() {
  return (
    <main>
      <div id="home">
        <AppScreenshotWithCTAsHero />
      </div>
      <div id="about">
        <LogoCTALinksImageFeatureListContentSection />
      </div>
      <div id="why-us">
        <DescriptionWithFeatureListIconsSection />
      </div>
      <div id="how-it-works">
        <DefaultFeatureListSection />
      </div>

      <div id="products">
        <ProductCategoriesWithCards />
      </div>
      {/* <div>
        <Contact />
      </div> */}
    </main>
  );
}
