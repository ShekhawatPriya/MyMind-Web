# Rillmark

**A home for your curious mind.**

<p align="center">
  <img src="docs/assets/a-world-worth-keeping.webp" width="880" alt="A fern print, a mountain photograph, and a linen notebook gathered on warm paper">
</p>

The product website and field guide for **Rillmark**, a personal visual memory app for iPhone and iPad. A restrained forest-green identity, original editorial artwork, and useful explanations of the real app.

This repository contains the website. The native Swift/SwiftUI application lives in [ShekhawatPriya/MyMind](https://github.com/ShekhawatPriya/MyMind). Website previews use sample memories; they do not access a device library or call an AI provider. The editorial illustrations are AI-generated conceptual artwork; the labeled native-app screenshot is from the source repository.

[Explore the pages](#a-place-to-start) · [Run locally](#make-it-yours) · [Deploy](#put-it-on-your-domain) · [Maintain](#a-small-map)

## A place to start

| Page            | What a visitor finds                                                                           |
| --------------- | ---------------------------------------------------------------------------------------------- |
| `/`             | The introduction: save a little inspiration, find a connection, keep the choice.               |
| `/the-app`      | An interactive sample library, supported formats, and a real native-app screenshot.            |
| `/how-it-works` | Capture → local recognition → finding a memory, explained through three illustrated moments.   |
| `/privacy`      | On-device storage, link requests, optional providers, deliberate exports, and website privacy. |
| `/guide`        | A searchable field guide with eight chapters.                                                  |
| `/guide/:slug`  | Capture, the library, search, Spaces, rediscovery, optional AI, backups, and troubleshooting.  |
| `/get-started`  | Source access, Xcode setup, installation, and the first five minutes.                          |

All **14 content routes** are prerendered into individual HTML documents, with a separate 404 page. Titles, descriptions, content, and navigation are available before JavaScript runs. React adds the interactions after hydration.

## Try a little curiosity

In the sample library, choose **Images**, then search for `green`. Two sample memories remain. Open a card to read its context, click a tag to filter related samples, or use the heart to change its favorite state. **Rediscover** changes the order of the sample collection. These changes last only while the page is open.

Open the guide search from the header or press **Ctrl K** on Windows/Linux, **⌘ K** on macOS. Search for `checksum` to find the backup chapter. The dialog uses native focus containment and Escape dismissal. Guide pages include section links, a reading progress line, chapter navigation, and an expandable mobile contents list.

<p align="center">
  <img src="docs/assets/room-for-curiosity.webp" width="660" alt="An open commonplace book holding a pressed fern and a mountain photograph">
</p>

## Make it yours

Requires **Node 20.19 or newer** and npm. Node 22 is used in CI. The lockfile is committed. No API keys or backend are needed.

```powershell
npm ci
npm run dev
```

Open **http://127.0.0.1:5178**. The development server uses a fixed port and reports a conflict instead of silently changing it.

```powershell
npm run build
npm run check
npm run preview
```

The production preview uses **http://127.0.0.1:4178**. `build` checks TypeScript, bundles the client and temporary server renderer, and generates the static pages. `check` verifies the rendered headings, route titles, local assets, links, and section anchors. The deliverable is **`dist/`**; `.ssr/` is a temporary build input and is not deployed.

## Put it on your domain

Vercel and Netlify configuration is included. Use `npm run build` as the build command and `dist` as the output directory. For other static hosts, serve the prerendered directories and use `404.html` for missing pages. Do not replace every route with the homepage through a wildcard SPA rewrite.

When a real domain is chosen, set the public build variable `VITE_SITE_URL` to its origin, such as your actual `https://` domain with no trailing slash. A build then adds canonical URLs, Open Graph URLs, `sitemap.xml`, and its reference in `robots.txt`. With no domain configured, no domain is guessed. `.env.example` documents the optional variable.

Fonts and images are served locally. There are no analytics scripts, cookies, user accounts, forms, or provider requests. Hosting providers may process request logs. Production header configuration is included for Vercel and hosts supporting `_headers`.

This repository does not provision a host, assign a domain, or publish the iOS app. The native source repository currently requires GitHub access, and the site reflects its personal-build distribution.

## A small map

| Location                         | Purpose                                                                          |
| -------------------------------- | -------------------------------------------------------------------------------- |
| `src/pages/`                     | Distinct page layouts and the guide reader.                                      |
| `src/content/guides.ts`          | Searchable guide content, steps, examples, and limits.                           |
| `src/content/site.ts`            | Navigation, route metadata, project links, and source revision.                  |
| `src/components/LibraryDemo.tsx` | Clearly labeled, in-memory website illustration.                                 |
| `src/components/Layout.tsx`      | Responsive navigation, accessible guide search, and footer.                      |
| `src/styles.css`                 | Forest, paper, and olive tokens; typography; responsive and accessibility rules. |
| `public/images/`                 | Optimized original artwork, app assets, and responsive variants.                 |
| `scripts/`                       | Static rendering and generated-site checks.                                      |

The visual direction takes inspiration from WireGram’s editorial care, restrained interactions, and detailed guide structure. The layout, forest palette, original botanical artwork, and content are designed for Rillmark; no WireGram application code or artwork was copied.

Product statements were checked against native source revision [`f901c37`](https://github.com/ShekhawatPriya/MyMind/commit/f901c3738be7beb2839fb2abbb431e3a0a65964a). See [product and design notes](docs/PRODUCT.md), [artwork prompts and provenance](docs/image-provenance.json), and [third-party notices](docs/THIRD_PARTY_NOTICES.md).

Original website material is reserved under [LICENSE](LICENSE). Reused native assets and dependencies keep their own licenses. Rillmark is independent and is not affiliated with the mymind service.
