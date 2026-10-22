import type { Metadata } from "next";
import { BaselineHtml } from "@/components/BaselineHtml";
import { html } from "@/baseline/html/banquet";
import { applyCutoutHeroHtml } from "@/data/heroCutouts";
import { pageIntros } from "@/data/pages";

export const metadata: Metadata = {
  title: "Paketlar",
  description: pageIntros.banquet.metaDescription,
};

export default function BanketPage() {
  return <BaselineHtml html={applyCutoutHeroHtml(html, "/banquet")} />;
}
