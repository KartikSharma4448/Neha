import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import profileImage from "@assets/generated_images/Professional_headshot_portrait_a0e72519.png";

export default function AboutSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("about-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const technicalSkills = [
    "HTML", "CSS", "JavaScript", "Java", "C",
    "Linux", "Windows", "MS Office"
  ];

  const softSkills = [
    "Problem-Solving",
    "Effective Communication",
    "Teamwork"
  ];

  return (
    <section id="about-section" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-2 flex justify-center">
              <div className="relative w-64 h-64 md:w-72 md:h-72">
                <img
                  src={profileImage}
                  alt="Neha Kumari"
                  className="w-full h-full object-cover rounded-md"
                  data-testid="img-profile"
                />
              </div>
            </div>

            <div className="md:col-span-3 space-y-8">
              <div>
                <h2 className="font-serif text-4xl font-bold text-foreground mb-6" data-testid="text-about-heading">
                  My Story
                </h2>
                <div className="space-y-4 text-lg leading-relaxed text-foreground">
                  <p data-testid="text-bio-1">
                    I am a dynamic and motivated individual with a deep passion for technology
                    and a commitment to becoming a proficient IT professional.
                  </p>
                  <p data-testid="text-bio-2">
                    Currently pursuing my Bachelor of Computer Application (BCA) at Vivekananda
                    Global University with a strong academic record of 9.14 CGPA in my first
                    semester, I am dedicated to excellence in my studies.
                  </p>
                  <p data-testid="text-bio-3">
                    With practical experience in web development and a solid foundation in
                    computer science, my goal is to contribute to innovative projects and
                    enhance organizational success through my technical skills and enthusiasm.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-4" data-testid="text-technical-skills-heading">
                  Technical Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="px-4 py-2 text-sm"
                      data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-4" data-testid="text-soft-skills-heading">
                  Soft Skills
                </h3>
                <ul className="space-y-2">
                  {softSkills.map((skill, index) => (
                    <li
                      key={index}
                      className="flex items-center text-lg text-foreground"
                      data-testid={`text-soft-skill-${index}`}
                    >
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
