import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import webDevImage from "@assets/generated_images/Web_development_blog_image_dd6631d7.png";
import learningImage from "@assets/generated_images/Learning_journey_blog_image_877bb86b.png";
import { Calendar } from "lucide-react";

export default function BlogSection() {
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

    const element = document.getElementById("blog-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const blogPosts = [
    {
      title: "Getting Started with Web Development",
      excerpt: "A beginner's guide to understanding HTML, CSS, and JavaScript fundamentals for building modern websites.",
      image: webDevImage,
      date: "March 2025",
      category: "Web Development"
    },
    {
      title: "My Journey Learning Front-End Development",
      excerpt: "Sharing my experience as a BCA student learning front-end technologies and building real-world projects.",
      image: learningImage,
      date: "February 2025",
      category: "Career"
    },
    {
      title: "Building Responsive Websites with CSS",
      excerpt: "Essential techniques and best practices for creating responsive layouts that work on all devices.",
      image: webDevImage,
      date: "January 2025",
      category: "CSS"
    }
  ];

  return (
    <section id="blog-section" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4" data-testid="text-blog-heading">
              Blog
            </h2>
            <p className="text-lg text-muted-foreground" data-testid="text-blog-subtitle">
              Insights and experiences from my learning journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover-elevate transition-all flex flex-col" data-testid={`card-blog-${index}`}>
                <div className="aspect-video overflow-hidden rounded-t-md">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    data-testid={`img-blog-${index}`}
                  />
                </div>
                <CardHeader className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <Badge variant="secondary" className="text-xs" data-testid={`badge-category-${index}`}>
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span data-testid={`text-date-${index}`}>{post.date}</span>
                    </div>
                  </div>
                  <CardTitle className="font-serif text-xl" data-testid={`text-blog-title-${index}`}>
                    {post.title}
                  </CardTitle>
                  <CardDescription data-testid={`text-blog-excerpt-${index}`}>
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => console.log(`Reading blog post: ${post.title}`)}
                    data-testid={`button-read-more-${index}`}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
