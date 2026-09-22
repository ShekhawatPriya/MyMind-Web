import { guides } from "./guides";

export const repository = "https://github.com/ShekhawatPriya/MyMind";
export const websiteRepository = "https://github.com/ShekhawatPriya/MyMind-Web";
export const sourceCommit = "f901c3738be7beb2839fb2abbb431e3a0a65964a";
export const siteOrigin = (import.meta.env.VITE_SITE_URL || "").replace(
  /\/$/,
  "",
);
export const navigation = [
  { to: "/the-app", label: "The app" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/privacy", label: "Made for you" },
  { to: "/guide", label: "The guide" },
];
export const pageMetadata: Record<
  string,
  { title: string; description: string }
> = {
  "/": {
    title: "Rillmark — A home for your curious mind",
    description:
      "Keep links, thoughts, images and the things that stay with you. A local-first visual memory app for iPhone and iPad.",
  },
  "/the-app": {
    title: "The app — Rillmark",
    description:
      "Explore capture, your visual library, local search, Spaces, and rediscovery in Rillmark.",
  },
  "/how-it-works": {
    title: "From a little spark to a lasting memory — Rillmark",
    description:
      "See how saving, local recognition, and search bring the things you love back within reach.",
  },
  "/privacy": {
    title: "Your mind. Your space. — Rillmark",
    description:
      "Understand on-device storage, optional AI, network requests, and deliberate backups in Rillmark.",
  },
  "/guide": {
    title: "A small guide to a curious mind — Rillmark",
    description:
      "Thoughtful, practical guides to capturing, finding, organizing, and caring for your personal library.",
  },
  "/get-started": {
    title: "Make room for your first memory — Rillmark",
    description:
      "Get Rillmark running on iPhone or iPad, take a first look, and save something worth keeping.",
  },
  ...Object.fromEntries(
    guides.map((g) => [
      "/guide/" + g.slug,
      { title: g.title + " — Rillmark guide", description: g.description },
    ]),
  ),
  "/404": {
    title: "A thought gone wandering — Rillmark",
    description: "Find your way back to the Rillmark website and guide.",
  },
};

export const questions = [
  {
    q: "What is Rillmark?",
    a: "A personal visual memory library for iPhone and iPad. Keep links, notes, images, video, PDFs, audio, and other files, then find them through local search and the details you remember.",
  },
  {
    q: "Do I need an account or an AI subscription?",
    a: "There is no Rillmark account. Capture, local search, OCR, Spaces, and rediscovery work without a hosted AI provider. Optional AI uses your own provider keys and may incur provider charges.",
  },
  {
    q: "Can I download it from the App Store?",
    a: "Rillmark is currently a personal-build project. The getting-started guide explains installation from the source with Xcode. No App Store or TestFlight download is currently offered here.",
  },
  {
    q: "Does my library sync between devices?",
    a: "There is no automatic sync. Your library lives on the device. You can explicitly export a .rillmark package and import it on another installation.",
  },
  {
    q: "Is this the mymind service?",
    a: "No. Rillmark is an independent app with its own identity and implementation. It is not affiliated with mymind or its service.",
  },
];
