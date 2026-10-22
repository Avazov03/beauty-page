import type { Metadata } from "next";
import { BaselineHtml } from "@/components/BaselineHtml";
import { html } from "@/baseline/html/blog";
import { applyCutoutHeroHtml } from "@/data/heroCutouts";
import { pageIntros } from "@/data/pages";

export const metadata: Metadata = {
  title: "Yangiliklar",
  description: pageIntros.blog.metaDescription,
};

export default function BlogPage() {
  return <BaselineHtml html={applyCutoutHeroHtml(html, "/blog")} />;
}
