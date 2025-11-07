import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import heroBackground from "@assets/generated_images/Hero_background_technology_pattern_e1caba2e.png";

export default function HeroSection() {
  const [, setLocation] = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 80,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      <div
        className={`relative z-10 text-center px-6 max-w-4xl mx-auto transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6" data-testid="text-hero-title">
          Hello, I'm Neha Kumari
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 font-medium" data-testid="text-hero-subtitle">
          BCA Student & Aspiring Web Developer specializing in Front-End Development
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={() => setLocation("/achievements")}
            className="text-base min-w-[200px]"
            data-testid="button-view-achievements"
          >
            View My Achievements
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => setLocation("/contact")}
            className="text-base min-w-[200px] bg-background/20 backdrop-blur-sm border-white/30 text-white hover:bg-background/30"
            data-testid="button-contact-me"
          >
            Contact Me
          </Button>
        </div>
      </div>

      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-colors cursor-pointer"
        data-testid="button-scroll-down"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </button>
    </section>
  );
}
