import { BaselineHtml } from "@/components/BaselineHtml";
import { html as heroHtml } from "@/baseline/html/home-0";
import { html as restHtml } from "@/baseline/html/home-rest";

export default function HomePage() {
  return (
    <>
      {/*
        Stage keeps sticky hero from lasting the whole <main>
        (otherwise later sections pile on the beach video).
      */}
      <div className="home-hero-about-stage">
        <BaselineHtml html={heroHtml} passthrough />
      </div>
      <BaselineHtml html={restHtml} />
    </>
  );
}
