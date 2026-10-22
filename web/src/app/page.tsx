import { BaselineHtml } from "@/components/BaselineHtml";
import { HomeHeroPortrait } from "@/components/home/HomeHeroPortrait";
import { html as restHtml } from "@/baseline/html/home-rest";

export default function HomePage() {
  return (
    <>
      <HomeHeroPortrait />
      <BaselineHtml html={restHtml} />
    </>
  );
}
