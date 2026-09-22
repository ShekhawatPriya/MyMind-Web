# Product and design notes

Content reviewed on 22 September 2026 against `ShekhawatPriya/MyMind`, revision `f901c3738be7beb2839fb2abbb431e3a0a65964a`. The repository is called MyMind; the implemented product is Rillmark. The owner explicitly chose Rillmark as the website's public name. Both supplied GitHub repositories were private at the time of the review.

## Product coverage

| Topic                                | Source evidence                                              | Website coverage                                |
| ------------------------------------ | ------------------------------------------------------------ | ----------------------------------------------- |
| Identity and installation            | README, project.yml, WelcomeView                             | Home, product, get started                      |
| Capture and supported formats        | CaptureService, CaptureView, ShareViewController, MemoryKind | Saving chapter, product, walkthrough            |
| Library and annotations              | RootView, MemoryDetailView, MemoryCard                       | Product, library chapter                        |
| Full-text query language             | SearchExpression, SearchView, LibraryDatabase                | Search chapter; simplified sample search        |
| Manual and Smart Spaces              | SpacesView, LibraryFilter                                    | Spaces chapter                                  |
| Local rediscovery                    | RediscoverView, database rediscover                          | Rediscover chapter                              |
| OCR, PDF, media limits               | LocalMedia, EnrichmentService                                | Saving and optional-AI chapters                 |
| Provider configuration               | AIProvider, AppPreferences, SettingsView                     | Optional-AI chapter                             |
| Keychain and data protection         | Preferences, LibraryPaths                                    | Privacy page                                    |
| Exports and restore                  | BackupService                                                | Backup chapter                                  |
| App status and validation boundaries | docs/VALIDATION.md                                           | Personal-build installation, no App Store claim |

Source capabilities are described without borrowing its historical test results as website validation. Native iOS execution, live model inference, device signing, and physical accessibility were not performed while building this website.

## Important product distinctions

- Local-first does not mean a separately encrypted vault. iOS file protection is used; exports are unencrypted.
- The live library is excluded from automatic backup. There is no automatic cross-device sync.
- AI is disabled initially and requires explicit enablement. The configured source models are not a guarantee of current provider availability.
- Link previews require external requests. Protected content cannot be read through another application's session.
- Search is ranked full-text/associative retrieval over available text and concepts, not a hosted vector search product.
- No App Store, TestFlight, price, testimonial, audience count, or download link was invented.

## Visual direction

The reference was the separate local WireGram Web project, read without modifying its source. Its useful principles were generous spacing, editorial typography, detailed guide navigation, contextual art, and modest motion. Rillmark uses a distinct asymmetrical opening, forest green (`#294d3c`), warm paper (`#f8f7f2`), olive accents, serif-led headings, and a botanical commonplace-book motif. The existing native icon remains the brand mark.

Instrument Serif and DM Sans are self-hosted through Fontsource. All interface icons come from the installed Lucide React package; no icons or logos were hand-drawn in SVG. The source app's raster artwork is separately attributed. Original conceptual images were generated with the built-in image generation tool; exact prompts are in the provenance manifest.

## Behavior and implementation

The marketing site is static with client-side navigation. A build emits 14 prerendered content pages and `404.html`. Native `dialog` handles focus containment and Escape; mobile navigation exposes its expanded state and closes after navigation. The route main element receives focus after a page change. Search is entirely local to website content.

The library illustration supports filtering, favorites, card detail, tag filtering, query examples, empty-state reset, and reordered samples. It is intentionally an in-memory illustration, not a web version of the native app. It does not upload, persist, or infer from visitor data.

## Website verification

- Production build and TypeScript check completed on Windows with Node 20.19.5.
- Generated-site check passed for 15 HTML pages and 730 internal links, assets, and section anchors.
- All 14 content routes were checked in the browser at 320, 768, and 1440 CSS pixels. No document overflow remained; a narrow-screen sample-note clipping issue was corrected.
- Axe checks for WCAG 2 A/AA and WCAG 2.1 AA ran on all content routes at 320 and 1440 pixels. Secondary text contrast, a mobile icon button label, and keyboard access to overflowing tables were refined; affected pages were rechecked without remaining detected violations.
- Browser interaction checks exercised library filtering, sample search, favorites, detail dialogs, tag filtering, empty-state reset, guide search, mobile navigation, and page-focus behavior.
- These are website checks. They do not certify all assistive-technology behavior or replace physical iOS testing. Public hosting has not been provisioned by this repository.

## Maintenance

Update content against the native source before changing capability promises. Keep source-access and distribution copy current when the native app becomes publicly available. Set a real `VITE_SITE_URL` at deployment time to emit canonical URLs and a sitemap. Do not place native app provider keys in website configuration.
