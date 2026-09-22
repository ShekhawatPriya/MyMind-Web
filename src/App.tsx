import { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Footer, Header } from "./components/Layout";
import Home from "./pages/Home";
import { HowItWorks, Product } from "./pages/Product";
import Privacy from "./pages/Privacy";
import { GuideArticle, GuideIndex } from "./pages/Guide";
import GetStarted, { NotFound } from "./pages/GetStarted";
import { pageMetadata, siteOrigin } from "./content/site";

export default function App() {
  const location = useLocation();
  const previousPath = useRef(location.pathname);
  useEffect(() => {
    const path = location.pathname.replace(/\/$/, "") || "/";
    const meta = pageMetadata[path] || pageMetadata["/404"];
    document.title = meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", meta.description);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", meta.title);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", meta.description);
    if (siteOrigin) {
      let canonical = document.querySelector<HTMLLinkElement>(
        'link[rel="canonical"]',
      );
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        document.head.append(canonical);
      }
      canonical.href = siteOrigin + (path === "/" ? "/" : path);
      document
        .querySelector('meta[property="og:url"]')
        ?.setAttribute("content", canonical.href);
    }
    let robots = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (!pageMetadata[path] || path === "/404") {
      if (!robots) {
        robots = document.createElement("meta");
        robots.name = "robots";
        document.head.append(robots);
      }
      robots.content = "noindex";
    } else robots?.remove();
    if (previousPath.current !== location.pathname) {
      if (!location.hash) {
        window.scrollTo({ top: 0, behavior: "instant" });
        document.getElementById("main")?.focus({ preventScroll: true });
      }
      previousPath.current = location.pathname;
    }
    if (location.hash) {
      try {
        document
          .getElementById(decodeURIComponent(location.hash.slice(1)))
          ?.scrollIntoView();
      } catch {
        /* Ignore malformed fragment identifiers. */
      }
    }
  }, [location.pathname, location.hash]);
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/the-app" element={<Product />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/guide" element={<GuideIndex />} />
          <Route path="/guide/:slug" element={<GuideArticle />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
