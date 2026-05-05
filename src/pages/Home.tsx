import { Hero } from "@/components/sections/Hero";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { Manifesto } from "@/components/sections/Manifesto";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";
import { Stats } from "@/components/sections/Stats";
import { CallToAction } from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <Manifesto />
      <PortfolioPreview />
      <Stats />
      <CallToAction />
    </>
  );
}
