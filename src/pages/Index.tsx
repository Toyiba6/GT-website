import Header from "@/components/Header";
import TeaserSection from "@/components/TeaserSection";
import AbstractSection from "@/components/AbstractSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import AlgorithmSection from "@/components/AlgorithmSection";
import ResultsSection from "@/components/ResultsSection";
import AblationSection from "@/components/AblationSection";
import CitationSection from "@/components/CitationSection";
import ImageSlider from "@/components/slider"
const Index = () => {
  return (
    <div className="min-h-screen w-full bg-grey relative">
  {/* Grid Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `
        linear-gradient(to right, rgb(209 213 219 / 15%) 1px, transparent 1px),
        linear-gradient(to bottom, rgb(209 213 219 / 15%) 1px, transparent 1px)
      `,
      backgroundSize: "40px 40px",
    }}
  />
     {/* Your Content/Components */}
     <Header />
      <TeaserSection />
      <ImageSlider/>
      <AbstractSection />
      <ArchitectureSection />
      <AlgorithmSection />
      <ResultsSection />
      <AblationSection />
      <CitationSection />
</div>
  );
};

export default Index;
