import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts, getPostBySlug } from '@/lib/blog-data';
import BlogPostClient from './BlogPostClient';
import { generateArticleSchema, JsonLd } from '@/lib/schema';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://protektsurface.com.au/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: ['/images/og-image.png'],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.excerpt,
    slug: post.slug,
    datePublished: post.date,
    author: post.author,
    authorUrl: `https://protektsurface.com.au/author/${post.authorSlug}`,
  });

  return (
    <>
      <JsonLd data={articleSchema} />
      <BlogPostClient post={post} />
    </>
  );
}
