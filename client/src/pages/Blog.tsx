import BlogSection from "@/components/BlogSection";
import { useEffect } from "react";

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <BlogSection />
    </div>
  );
}
