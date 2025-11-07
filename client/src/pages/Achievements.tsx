import AchievementsSection from "@/components/AchievementsSection";
import { useEffect } from "react";

export default function Achievements() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <AchievementsSection />
    </div>
  );
}
