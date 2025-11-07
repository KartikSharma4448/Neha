import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import portfolioImage from "@assets/generated_images/Portfolio_website_project_screenshot_d8021102.png";
import registrationImage from "@assets/generated_images/Registration_form_project_screenshot_9d96bd93.png";
import { Award, Code, Trophy } from "lucide-react";

export default function AchievementsSection() {
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

    const element = document.getElementById("achievements-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "Designed and developed a responsive personal portfolio using HTML and CSS, showcasing academic background, technical skills, and projects.",
      image: portfolioImage,
      tech: ["HTML", "CSS", "Responsive Design"],
      role: "Web Designer & Front-End Developer",
      timeline: "May 2025 - Present"
    },
    {
      title: "Student Registration Form",
      description: "Created a functional student registration form with proper validation and clean UI, demonstrating front-end development standards.",
      image: registrationImage,
      tech: ["HTML", "CSS", "Form Validation"],
      role: "Front-End Developer",
      timeline: "May 2025 - Present"
    }
  ];

  const certifications = [
    {
      title: "Innovating with the Business Model Canvas",
      institution: "University of Virginia (via Coursera)",
      date: "February 2025",
      icon: Award
    },
    {
      title: "EXIN BCS Artificial Intelligence Essentials",
      institution: "EXIN & BCS",
      date: "September 2024",
      icon: Code
    },
    {
      title: "Hackathon Participation Certificate",
      institution: "Competitive Coding Event",
      date: "2024",
      icon: Trophy
    }
  ];

  return (
    <section id="achievements-section" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4" data-testid="text-achievements-heading">
              Achievements
            </h2>
            <p className="text-lg text-muted-foreground" data-testid="text-achievements-subtitle">
              A look at some of my best work and accomplishments
            </p>
          </div>

          <div className="mb-16">
            <h3 className="font-serif text-3xl font-semibold text-foreground mb-8" data-testid="text-projects-heading">
              Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="hover-elevate transition-all" data-testid={`card-project-${index}`}>
                  <div className="aspect-video overflow-hidden rounded-t-md">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      data-testid={`img-project-${index}`}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="font-serif" data-testid={`text-project-title-${index}`}>
                      {project.title}
                    </CardTitle>
                    <CardDescription data-testid={`text-project-description-${index}`}>
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-2">Technologies:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="text-xs" data-testid={`badge-tech-${index}-${i}`}>
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p><span className="font-medium">Role:</span> {project.role}</p>
                      <p><span className="font-medium">Timeline:</span> {project.timeline}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-3xl font-semibold text-foreground mb-8" data-testid="text-certifications-heading">
              Certifications & Awards
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <Card key={index} className="hover-elevate transition-all" data-testid={`card-certification-${index}`}>
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="font-serif text-xl" data-testid={`text-cert-title-${index}`}>
                        {cert.title}
                      </CardTitle>
                      <CardDescription data-testid={`text-cert-institution-${index}`}>
                        {cert.institution}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Badge variant="outline" data-testid={`badge-cert-date-${index}`}>
                        {cert.date}
                      </Badge>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
