# Working on the Rillmark website

This is the website repository. Native app changes belong in [MyMind](https://github.com/ShekhawatPriya/MyMind).

Use Node 20.19+ and install with `npm ci`. Run `npm run dev`, make a focused change, then run `npm run build` and `npm run check`.

Before changing product copy, verify the behavior in the native app source. Keep illustrative website behavior separate from actual native functionality. Do not add an App Store button, sync promise, encryption claim, or provider success claim without current evidence.

Review affected pages at narrow phone and desktop widths. Keep focus indicators, dialog dismissal, route headings, reduced-motion support, and the reading order intact. A guide change should update both its searchable content and any relevant links.

Use the installed Lucide icon set. Do not hand-author SVG icons. Keep imagery in optimized WebP with appropriate alternative text and update `docs/image-provenance.json` for generated assets. Preserve the native app icon and its license notice.

Keep credentials, native library exports, signing files, personal screenshots, and local environment files out of Git. This site needs no API keys. Do not include credentials or personal library content in issues or pull requests.

There is no public contribution license grant beyond the repository's stated terms. Ask the owner before redistributing original website material.
