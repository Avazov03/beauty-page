"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { blogPosts } from "@/data/blog";
import { serviceNav } from "@/data/header-nav";
import { roomsListing } from "@/data/rooms";

type DropKey = "rooms" | "services" | "blog";

export function PhoneMenu() {
  const pathname = usePathname();
  const [host, setHost] = useState<HTMLElement | null>(null);
  const [open, setOpen] = useState<DropKey | null>(null);

  useEffect(() => {
    const place = () => {
      const el = document.querySelector(".rt-mega-menu-left-wrapper");
      if (el instanceof HTMLElement) setHost(el);
    };
    place();
    const t = window.setTimeout(place, 50);
    return () => window.clearTimeout(t);
  }, [pathname]);

  useEffect(() => {
    setOpen(null);
  }, [pathname]);

  useEffect(() => {
    if (!host) return;
    const nav = host.querySelector(".ca-phone-nav");
    if (!nav) return;
    const onClick = (event: Event) => {
      const row = (event.target as HTMLElement | null)?.closest(".ca-phone-row");
      if (!row || !nav.contains(row)) return;
      const key = row.getAttribute("data-drop");
      if (key !== "rooms" && key !== "services" && key !== "blog") return;
      event.preventDefault();
      setOpen((current) => (current === key ? null : key));
    };
    nav.addEventListener("click", onClick);
    return () => nav.removeEventListener("click", onClick);
  }, [host]);

  if (!host) return null;

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  const news = blogPosts.slice(0, 2);

  return createPortal(
    <nav className="ca-phone-nav" aria-label="Asosiy navigatsiya">
      <Link
        href="/"
        className={`ca-phone-link${isActive("/") ? " is-active" : ""}`}
      >
        Bosh sahifa
      </Link>
      <Link
        href="/about"
        className={`ca-phone-link${isActive("/about") ? " is-active" : ""}`}
      >
        Men haqimda
      </Link>

      <div className={`ca-phone-drop${open === "rooms" ? " is-open" : ""}`}>
        <button
          type="button"
          className={`ca-phone-row${isActive("/rooms") ? " is-active" : ""}`}
          data-drop="rooms"
          aria-expanded={open === "rooms"}
        >
          Muolajalar
        </button>
        <div className="ca-phone-panel">
          <div className="ca-phone-panel-inner">
            <Link
              href="/rooms"
              className={`ca-phone-sub${pathname === "/rooms" ? " is-active" : ""}`}
            >
              Barcha muolajalar
            </Link>
            {roomsListing.map((room) => (
              <Link
                key={room.slug}
                href={`/rooms/${room.slug}`}
                className={`ca-phone-sub${
                  isActive(`/rooms/${room.slug}`) ? " is-active" : ""
                }`}
              >
                {room.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className={`ca-phone-drop${open === "services" ? " is-open" : ""}`}>
        <button
          type="button"
          className={`ca-phone-row${
            serviceNav.some((item) => isActive(item.href)) ? " is-active" : ""
          }`}
          data-drop="services"
          aria-expanded={open === "services"}
        >
          Xizmatlar
        </button>
        <div className="ca-phone-panel">
          <div className="ca-phone-panel-inner">
            {serviceNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`ca-phone-sub${isActive(item.href) ? " is-active" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className={`ca-phone-drop${open === "blog" ? " is-open" : ""}`}>
        <button
          type="button"
          className={`ca-phone-row${isActive("/blog") ? " is-active" : ""}`}
          data-drop="blog"
          aria-expanded={open === "blog"}
        >
          Yangiliklar
        </button>
        <div className="ca-phone-panel">
          <div className="ca-phone-panel-inner">
            <Link
              href="/blog"
              className={`ca-phone-sub${pathname === "/blog" ? " is-active" : ""}`}
            >
              Barcha maqolalar
            </Link>
            {news.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`ca-phone-sub${
                  isActive(`/blog/${post.slug}`) ? " is-active" : ""
                }`}
              >
                {post.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Link
        href="/contact"
        className={`ca-phone-link${isActive("/contact") ? " is-active" : ""}`}
      >
        Aloqa
      </Link>
    </nav>,
    host,
  );
}
