import type { Metadata } from "next";
import { BaselineHtml } from "@/components/BaselineHtml";
import { html } from "@/baseline/html/about";
import { applyCutoutHeroHtml } from "@/data/heroCutouts";
import { pageIntros } from "@/data/pages";

export const metadata: Metadata = {
  title: "Men haqimda",
  description: pageIntros.about.metaDescription,
};

export default function AboutPage() {
  return <BaselineHtml html={applyCutoutHeroHtml(html, "/about")} />;
}
