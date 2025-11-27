import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { blogPosts, formatDate } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: 'Window Tinting Blog | Expert Advice & Guides',
  description: 'Expert advice, industry news, and helpful guides about window tinting and surface protection in Sydney. Tips for residential, commercial, and automotive tinting.',
  alternates: {
    canonical: 'https://protektsurface.com.au/blog',
  },
};

export default function BlogPage() {
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
