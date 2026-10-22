import { BaselineHtml } from "@/components/BaselineHtml";
import { BaselineInteractions } from "@/components/BaselineInteractions";
import { InlineHeaderNav } from "@/components/InlineHeaderNav";
import { InnerHeroCutout } from "@/components/InnerHeroCutout";
import { RouteChrome } from "@/components/RouteChrome";
import { WebflowRuntime } from "@/components/WebflowRuntime";
import { html as chromeHtml } from "@/baseline/html/chrome";
import { html as footerHtml } from "@/baseline/html/footer";
import { innerHeroCutouts } from "@/data/heroCutouts";

/**
 * Runs after SSR HTML is in the DOM — marks cutout heroes, swaps PNG,
 * injects wash before React so refresh doesn’t flash white / old photo.
 */
const earlyCutoutBoot = `(function(){try{var p=location.pathname.replace(/\\/$/,"")||"/";var map=${JSON.stringify(
  Object.fromEntries(
    Object.entries(innerHeroCutouts).map(([path, cfg]) => [
      path,
      { src: cfg.src, side: cfg.side, scale: cfg.scale ?? "tall", flip: !!cfg.flip },
    ]),
  ),
)};var cfg=map[p];if(!cfg)return;var h=document.querySelector(".rt-inner-hero");if(!h)return;h.classList.add("is-cutout-hero");h.setAttribute("data-cutout-boot","1");h.setAttribute("data-cutout-side",cfg.side);h.setAttribute("data-cutout-scale",cfg.scale);h.setAttribute("data-cutout-flip",cfg.flip?"true":"false");var img=h.querySelector("img.rt-hero-image");if(img){img.setAttribute("src",cfg.src);img.removeAttribute("srcset");img.removeAttribute("sizes");}if(!h.querySelector(".ca-inner-hero-bg")){var b=document.createElement("div");b.className="ca-inner-hero-bg";b.setAttribute("aria-hidden","true");h.insertBefore(b,h.firstChild);}}catch(e){}})();`;

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="baseline-root">
      <RouteChrome />
      <BaselineInteractions />
      <WebflowRuntime />
      <InnerHeroCutout />
      <BaselineHtml html={chromeHtml} />
      <InlineHeaderNav />
      <main>{children}</main>
      <script dangerouslySetInnerHTML={{ __html: earlyCutoutBoot }} />
      <BaselineHtml html={footerHtml} />
    </div>
  );
}