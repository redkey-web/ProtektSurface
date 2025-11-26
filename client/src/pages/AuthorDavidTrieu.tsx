import { Link } from "wouter";
import { Linkedin, Instagram, Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { blogPosts } from "./Blog";

const authorPosts = blogPosts.filter(post => post.authorSlug === "david-trieu");

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function AuthorDavidTrieu() {
  return (
    <div className="min-h-screen pt-16 sm:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ label: "About", path: "/about" }, { label: "David Trieu" }]} />
      </div>

      <section className="py-12 sm:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-12">
            <div className="flex-shrink-0">
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-primary/10 flex items-center justify-center mx-auto md:mx-0">
                <span className="text-5xl sm:text-6xl font-bold text-primary">DT</span>
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                David Trieu
              </h1>
              <p className="text-lg text-primary font-medium mb-4">
                Director & Lead Applicator
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                David is the founder and director of Protekt Surface Solutions, bringing over 
                a decade of hands-on experience in professional window tinting and surface 
                protection. As lead applicator, he personally oversees every major installation 
                and ensures the highest standards of workmanship across all projects.
              </p>
              
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <a 
                  href="https://www.linkedin.com/company/protekt-surface-solutions/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  data-testid="link-linkedin"
                >
                  <Button variant="outline" className="gap-2">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </Button>
                </a>
                <a 
                  href="https://www.instagram.com/protektsurfacesolutions/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  data-testid="link-instagram"
                >
                  <Button variant="outline" className="gap-2">
                    <Instagram className="w-4 h-4" />
                    Instagram
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Expertise</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Ceramic and nano-ceramic window film installation
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Commercial and high-rise building tinting
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Automotive window tinting (Protekt Auto)
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Security and safety film applications
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Decorative and frosted film design
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Marble and surface protection solutions
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">About Protekt Surface Solutions</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Based in Clyde, Western Sydney, Protekt Surface Solutions serves residential, 
                commercial, and automotive clients across the greater Sydney region. We're 
                committed to using only premium-quality films and providing exceptional 
                customer service from consultation through to aftercare.
              </p>
              <div className="flex flex-col gap-2 text-sm">
                <a href="tel:0286062842" className="flex items-center gap-2 text-primary hover:underline">
                  <Phone className="w-4 h-4" />
                  (02) 8606 2842
                </a>
                <a href="mailto:info@protektsurfacesolutions.com.au" className="flex items-center gap-2 text-primary hover:underline">
                  <Mail className="w-4 h-4" />
                  info@protektsurfacesolutions.com.au
                </a>
              </div>
            </Card>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Articles by David
            </h2>
            <div className="flex flex-col gap-4">
              {authorPosts.map((post, index) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <Card
                    className="p-5 hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer group"
                    data-testid={`card-author-blog-${index}`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <span className="text-xs font-medium text-primary mb-1 block">
                          {post.category}
                        </span>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {formatDate(post.date)} · {post.readTime}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-12 bg-primary/10 rounded-xl p-8 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Get in Touch
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Have questions about window tinting or surface protection? David and the team 
              are here to help with expert advice and free consultations.
            </p>
            <Link href="/get-quote">
              <Button className="bg-primary text-primary-foreground" data-testid="button-get-quote">
                Request a Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
