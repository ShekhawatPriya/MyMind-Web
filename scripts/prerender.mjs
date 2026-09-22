import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { render, pageMetadata, siteOrigin } from "../.ssr/entry-server.js";

const template = await readFile("dist/index.html", "utf8");
const escape = (text) =>
  text
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
if (siteOrigin) {
  const url = new URL(siteOrigin);
  if (
    !["http:", "https:"].includes(url.protocol) ||
    url.origin !== siteOrigin ||
    url.username ||
    url.password
  )
    throw new Error(
      "VITE_SITE_URL must be a bare http(s) origin, without a path or credentials.",
    );
}
for (const [path, meta] of Object.entries(pageMetadata)) {
  const canonical =
    siteOrigin && path !== "/404"
      ? `<link rel="canonical" href="${escape(siteOrigin + path)}" /><meta property="og:url" content="${escape(siteOrigin + path)}" />`
      : "";
  const html = template
    .replace("<!--app-html-->", render(path))
    .replace(/<title>.*?<\/title>/, `<title>${escape(meta.title)}</title>`)
    .replace(
      /<meta name="description" content="[^"]*"\s*\/>/,
      `<meta name="description" content="${escape(meta.description)}" />`,
    )
    .replace(
      /<meta property="og:title" content="[^"]*"\s*\/>/,
      `<meta property="og:title" content="${escape(meta.title)}" />`,
    )
    .replace(
      /<meta property="og:description" content="[^"]*"\s*\/>/,
      `<meta property="og:description" content="${escape(meta.description)}" />`,
    )
    .replace(
      "<!--page-meta-->",
      canonical +
        (path === "/404" ? '<meta name="robots" content="noindex" />' : ""),
    );
  const file = resolve(
    "dist",
    path === "/"
      ? "index.html"
      : path === "/404"
        ? "404.html"
        : `${path.slice(1)}/index.html`,
  );
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, html);
}
const publicPaths = Object.keys(pageMetadata).filter((path) => path !== "/404");
await writeFile(
  "dist/robots.txt",
  "User-agent: *\nAllow: /\n" +
    (siteOrigin ? `Sitemap: ${siteOrigin}/sitemap.xml\n` : ""),
);
if (siteOrigin)
  await writeFile(
    "dist/sitemap.xml",
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${publicPaths.map((path) => `<url><loc>${escape(siteOrigin + path)}</loc></url>`).join("")}</urlset>`,
  );
console.log(
  `Prerendered ${publicPaths.length} content pages and a 404 page.${siteOrigin ? " Sitemap and canonicals generated." : " Set VITE_SITE_URL when a deployment domain is known."}`,
);
