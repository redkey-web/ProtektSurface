import { Link } from "wouter";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  authorSlug: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "benefits-of-ceramic-window-tinting-sydney-homes",
    title: "5 Key Benefits of Ceramic Window Tinting for Sydney Homes",
    excerpt: "Discover why ceramic window tinting is the top choice for Sydney homeowners looking to reduce energy costs, protect their interiors, and enhance comfort year-round.",
    date: "2025-11-25",
    readTime: "6 min read",
    category: "Residential",
    author: "David Trieu",
    authorSlug: "david-trieu",
  },
  {
    slug: "car-window-tinting-laws-nsw-guide",
    title: "Car Window Tinting Laws in NSW: What You Need to Know in 2025",
    excerpt: "Stay compliant with NSW window tinting regulations. Learn the legal tint percentages, avoid fines, and understand what's allowed for your vehicle.",
    date: "2025-11-18",
    readTime: "5 min read",
    category: "Automotive",
    author: "David Trieu",
    authorSlug: "david-trieu",
  },
  {
    slug: "uv-protection-window-film-health-benefits",
    title: "How UV Blocking Window Film Protects Your Health and Home",
    excerpt: "Learn how UV radiation damages skin and furniture, and why installing UV blocking window film is one of the best investments for your family's wellbeing.",
    date: "2025-11-11",
    readTime: "7 min read",
    category: "Health & Safety",
    author: "David Trieu",
    authorSlug: "david-trieu",
  },
  {
    slug: "commercial-window-tinting-energy-savings",
    title: "Commercial Window Tinting: How Much Can Sydney Businesses Save on Energy?",
    excerpt: "Explore real energy savings data and ROI calculations for commercial window tinting in Sydney's climate. See why more businesses are making the switch.",
    date: "2025-11-04",
    readTime: "6 min read",
    category: "Commercial",
    author: "David Trieu",
    authorSlug: "david-trieu",
  },
  {
    slug: "choosing-right-window-tint-shade-guide",
    title: "How to Choose the Right Window Tint Shade for Your Needs",
    excerpt: "From light privacy films to dark ceramic tints, this comprehensive guide helps you select the perfect window tint percentage for your home, office, or vehicle.",
    date: "2025-10-28",
    readTime: "8 min read",
    category: "Guide",
    author: "David Trieu",
    authorSlug: "david-trieu",
  },
];

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function Blog() {
  return (
    <div className="min-h-screen pt-16 sm:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ label: "Blog" }]} />
      </div>

      <section className="py-12 sm:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Window Tinting Insights
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert advice, industry news, and helpful guides about window tinting 
              and surface protection in Sydney
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {blogPosts.map((post, index) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card
                  className="p-6 hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer group"
                  data-testid={`card-blog-post-${index}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                          {post.category}
                        </span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(post.date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all self-end sm:self-center">
                      Read More
                      <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
