import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { blogPosts, getBlogPostBySlug } from "@/data/blogData";
import { BlogPostClient } from "./BlogPostClient";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static routes for all blog posts at build time
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate rich dynamic SEO metadata per article
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Artikel Tidak Ditemukan - Julhan Abdul Malik",
    };
  }

  return {
    title: `${post.titleId} — Artikel Julhan Abdul Malik`,
    description: post.excerptId,
    authors: [{ name: post.author.name }],
    keywords: post.tags,
    openGraph: {
      title: post.titleId,
      description: post.excerptId,
      url: `https://julhan.my.id/artikel/${post.slug}`,
      siteName: "Julhan Abdul Malik | Portfolio & Artikel Software Engineering",
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.titleId,
        },
      ],
      type: "article",
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: post.titleId,
      description: post.excerptId,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return <BlogPostClient post={post} prevPost={prevPost} nextPost={nextPost} />;
}
