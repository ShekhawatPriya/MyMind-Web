import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import { resolve } from "node:path";
import { pageMetadata } from "../.ssr/entry-server.js";

const dist = resolve("dist");
const documents = new Map();
for (const path of Object.keys(pageMetadata)) {
  const filename =
    path === "/"
      ? "index.html"
      : path === "/404"
        ? "404.html"
        : path.slice(1) + "/index.html";
  const html = await readFile(resolve(dist, filename), "utf8");
  assert.equal(
    (html.match(/<h1(?:\s|>)/g) || []).length,
    1,
    `${path}: exactly one page heading`,
  );
  assert.ok(!html.includes("<!--app-html-->"), `${path}: rendered content`);
  assert.ok(
    html.includes(pageMetadata[path].title.replaceAll("&", "&amp;")),
    `${path}: route title`,
  );
  documents.set(path, html);
}
let checkedReferences = 0;
for (const [path, html] of documents) {
  for (const match of html.matchAll(/(?:href|src)="([^"<>]+)"/g)) {
    const href = match[1].replaceAll("&amp;", "&");
    if (!href.startsWith("/") && !href.startsWith("#")) continue;
    const target = new URL(href, "https://rillmark.invalid" + path);
    if (documents.has(target.pathname)) {
      if (target.hash)
        assert.ok(
          documents
            .get(target.pathname)
            .includes(`id="${decodeURIComponent(target.hash.slice(1))}"`),
          `${path}: anchor ${href}`,
        );
    } else {
      const asset = resolve(dist, "." + target.pathname);
      assert.ok(asset.startsWith(dist), `${path}: asset is inside output`);
      assert.ok(
        (await stat(asset)).isFile(),
        `${path}: missing local reference ${href}`,
      );
    }
    checkedReferences++;
  }
}
assert.ok(
  documents.get("/404").includes('name="robots" content="noindex"'),
  "404 must be excluded from indexing",
);
console.log(
  `Checked ${documents.size} rendered pages and ${checkedReferences} internal links/assets/anchors.`,
);
