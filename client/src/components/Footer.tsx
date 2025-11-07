import { Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4" data-testid="text-footer-name">
              Neha Kumari
            </h3>
            <p className="text-sm text-muted-foreground" data-testid="text-footer-bio">
              BCA student passionate about web development and technology.
              Always learning and building new things.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4" data-testid="text-footer-quick-links">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-home">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-about">
                  About
                </a>
              </li>
              <li>
                <a href="/achievements" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-achievements">
                  Achievements
                </a>
              </li>
              <li>
                <a href="/blog" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-blog">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4" data-testid="text-footer-connect">Let's Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/neha-kumari"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-md flex items-center justify-center hover-elevate transition-all"
                aria-label="LinkedIn"
                data-testid="link-footer-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/nehakumari"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-md flex items-center justify-center hover-elevate transition-all"
                aria-label="GitHub"
                data-testid="link-footer-github"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:jhaneha65955@gmail.com"
                className="w-10 h-10 bg-secondary rounded-md flex items-center justify-center hover-elevate transition-all"
                aria-label="Email"
                data-testid="link-footer-email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t text-center text-sm text-muted-foreground">
          <p data-testid="text-copyright">
            © {currentYear} Neha Kumari. Built with passion.
          </p>
        </div>
      </div>
    </footer>
  );
}
