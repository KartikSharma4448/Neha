import ContactSection from "@/components/ContactSection";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <ContactSection />
    </div>
  );
}
