import type { Metadata } from "next";
import { BaselineHtml } from "@/components/BaselineHtml";
import { html } from "@/baseline/html/rooms";
import { applyCutoutHeroHtml } from "@/data/heroCutouts";
import { pageIntros } from "@/data/pages";

export const metadata: Metadata = {
  title: "Muolajalar",
  description: pageIntros.rooms.metaDescription,
};

export default function RoomsPage() {
  return <BaselineHtml html={applyCutoutHeroHtml(html, "/rooms")} />;
}
