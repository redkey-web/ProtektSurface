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

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getPostsByAuthor(authorSlug: string): BlogPost[] {
  return blogPosts.filter((p) => p.authorSlug === authorSlug);
}
