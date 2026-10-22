import type { Metadata } from "next";
import { BaselineHtml } from "@/components/BaselineHtml";
import { html } from "@/baseline/html/contact";
import { applyCutoutHeroHtml } from "@/data/heroCutouts";
import { pageIntros } from "@/data/pages";

export const metadata: Metadata = {
  title: "Aloqa",
  description: pageIntros.contact.metaDescription,
};

export default function AloqaPage() {
  return <BaselineHtml html={applyCutoutHeroHtml(html, "/contact")} />;
}
