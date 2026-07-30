import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Header } from "@/components/site/Header";
import { HeroSection } from "@/components/site/HeroSection";
import { AboutSection } from "@/components/site/AboutSection";
import { ServicesSection } from "@/components/site/ServicesSection";
import { ValuesSection } from "@/components/site/ValuesSection";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { SpaceContactSection } from "@/components/site/SpaceContactSection";
import { Footer } from "@/components/site/Footer";

const title = "VieG Beauté | Cílios, Sobrancelhas e Unhas em Ixelles";
const description =
  "Studio de beleza especializado em cílios, sobrancelhas e unhas em Ixelles, Bélgica. Naturalidade, elegância e cuidado em cada detalhe.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ValuesSection />
        <TestimonialsSection />
        <SpaceContactSection />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
