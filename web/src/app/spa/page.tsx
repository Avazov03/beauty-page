import type { Metadata } from "next";
import { BaselineHtml } from "@/components/BaselineHtml";
import { html } from "@/baseline/html/spa";
import { applyCutoutHeroHtml } from "@/data/heroCutouts";
import { pageIntros } from "@/data/pages";

export const metadata: Metadata = {
  title: "Rituallar",
  description: pageIntros.spa.metaDescription,
};

export default function SpaPage() {
  return <BaselineHtml html={applyCutoutHeroHtml(html, "/spa")} />;
}
