export type GuideSection = {
  id: string;
  title: string;
  paragraphs: string[];
  steps?: string[];
  note?: string;
  table?: { headers: string[]; rows: string[][] };
};
export type Guide = {
  slug: string;
  number: string;
  title: string;
  description: string;
  category: string;
  minutes: number;
  sections: GuideSection[];
  questions?: { q: string; a: string }[];
};

export const guides: Guide[] = [
  {
    slug: "saving",
    number: "01",
    title: "Keep something good.",
    category: "The everyday essentials",
    minutes: 4,
    description:
      "From a passing thought to a photo, a link, or a file. Start with a single save.",
    sections: [
      {
        id: "share",
        title: "Start where you already are.",
        paragraphs: [
          "Rillmark lives in your iPhone and iPad Share Sheet. Save something from another app without deciding where it belongs. A title, note, and tags are optional.",
        ],
        steps: [
          "Open the Share Sheet in Safari, Photos, or another app.",
          "Choose Rillmark. If it is missing, open More in the app row and add it to Favorites.",
          "Add context if you want, then tap Save.",
          "Open Rillmark to create previews and make the new content searchable.",
        ],
      },
      {
        id: "inside",
        title: "Or make room for a thought.",
        paragraphs: [
          "Tap the plus button in your library to paste a link or write a note. Use Photos & videos to select up to 20 items, or Browse files to bring something in from Files.",
          "Your original is kept separately from its thumbnail and search information. You can change a title or add tags later without changing the original file.",
        ],
      },
      {
        id: "formats",
        title: "Seven kinds of things worth keeping.",
        paragraphs: ["One library brings different kinds of memory together."],
        table: {
          headers: ["What you save", "What comes with it"],
          rows: [
            [
              "Links",
              "The original address, available public preview, and readable page text.",
            ],
            ["Notes", "Your words, optional title, and tags."],
            [
              "Images",
              "The original, a preview, on-device text recognition, and visual labels.",
            ],
            ["Videos", "The original, a preview frame, and local playback."],
            [
              "Documents",
              "PDF previews, extracted text where available, and supported document viewing.",
            ],
            [
              "Audio",
              "The original recording or audio file and local playback.",
            ],
            [
              "Other files",
              "The original attachment and available native preview.",
            ],
          ],
        },
      },
      {
        id: "boundaries",
        title: "A saved link is still a link.",
        paragraphs: [
          "A private social post or reel may reveal only a title or public preview. Rillmark cannot read another app’s signed-in content. Share an original video or a screenshot you can access when you want richer context.",
          "Files can be up to 500 MB each, subject to available storage and Share extension limits. Plain text capture is limited to 2 MB; import a large text document as a file.",
        ],
        note: "Capture and local browsing work offline. Fetching a web preview and using optional AI need a connection.",
      },
    ],
    questions: [
      {
        q: "Will I lose a save if its preview fails?",
        a: "No. The original link or file stays saved. Open the item and use Analyze again to retry enrichment.",
      },
      {
        q: "Do I need to organize everything before saving?",
        a: "No. Titles, tags, annotations, and Spaces can come later. Start by keeping the thing itself.",
      },
    ],
  },
  {
    slug: "your-library",
    number: "02",
    title: "A library that feels like you.",
    category: "The everyday essentials",
    minutes: 3,
    description:
      "Browse visually, add a little context, and make space without losing the original.",
    sections: [
      {
        id: "browse",
        title: "Recognition comes naturally.",
        paragraphs: [
          "Your library gathers different formats into visual cards. Filter by type, see only favorites, or switch between newest and oldest first. More items load as you browse.",
          "Tap a card to see its original, source, saved text, tags, annotations, and any available summary. Images, PDFs, video, and audio have local previews or native viewers.",
        ],
      },
      {
        id: "context",
        title: "Add the part only you know.",
        paragraphs: [
          "Rename an item, edit its tags, or leave yourself a private annotation. A carefully chosen title stays yours when an item is analyzed again.",
          "Favorite the things you return to often. Put selected memories in a manual Space, or let a saved search collect matching items.",
        ],
      },
      {
        id: "archive",
        title: "Clear the view. Keep the memory.",
        paragraphs: [
          "Archive moves an item out of the active library without deleting it. Recently Deleted offers a separate recovery area for items you have removed.",
          "Deleted memories stay in Recently Deleted until you choose to delete them permanently. They are excluded from search and Spaces while they are there.",
        ],
        note: "Delete forever removes the saved original and its information from the device. Export a library copy if you want another way back.",
      },
      {
        id: "appearance",
        title: "Comfort is part of the experience.",
        paragraphs: [
          "Choose light, dark, or system appearance in Settings. The native app supports Dynamic Type and VoiceOver labels, with a layout that adapts as text becomes larger.",
        ],
      },
    ],
  },
  {
    slug: "search",
    number: "03",
    title: "Find it with a little clue.",
    category: "The everyday essentials",
    minutes: 5,
    description:
      "Search words, text inside images, tags, and the details you happen to remember.",
    sections: [
      {
        id: "remember",
        title: "You do not need the exact title.",
        paragraphs: [
          "Search looks through titles, saved text, annotations, recognized text, tags, and generated concepts. Start with a few words you associate with the memory.",
          "On-device recognition can make text in images searchable. Visual labels and color names add other clues. Optional AI can add descriptive concepts, but basic search does not need it.",
        ],
      },
      {
        id: "queries",
        title: "A small vocabulary goes a long way.",
        paragraphs: [
          "Combine words and filters to narrow your library. These examples use the app’s actual search syntax.",
        ],
        table: {
          headers: ["Try this", "To find"],
          rows: [
            [
              "green architecture",
              "Items with both concepts in their indexed information.",
            ],
            [
              '"quiet garden"',
              "A phrase, with prefix matching on the final word.",
            ],
            ["#design", "An exact tag."],
            ['#"slow living"', "An exact tag containing a space."],
            [
              "kind:image green",
              "Images with green in their indexed information.",
            ],
            ["is:favorite", "Your favorites."],
            ["after:2026-09-01", "Items saved on or after this date, in UTC."],
            ["before:2026-10-01", "Items saved before this date, in UTC."],
          ],
        },
      },
      {
        id: "kinds",
        title: "Choose a format when you know it.",
        paragraphs: [
          "The kind: filter accepts link, note, image, video, document, audio, or file. You can combine a format with a tag or ordinary words, such as kind:document #research.",
        ],
      },
      {
        id: "how",
        title: "Local, ranked, and understandable.",
        paragraphs: [
          "Rillmark uses local full-text search with weighted ranking, prefix matching, and diacritic-insensitive matching. The index lives with the library on your device.",
          "It searches available text and concepts; it is not a hosted vector search service. A visual detail can only be found if recognition or enrichment has added a matching clue.",
        ],
        note: "If a new save is missing from results, reopen the app to let indexing finish. For a failed preview, try Analyze again from the item.",
      },
    ],
  },
  {
    slug: "spaces",
    number: "04",
    title: "Room for a recurring idea.",
    category: "A little more possibility",
    minutes: 3,
    description:
      "Keep a collection by hand, or save a search that grows alongside your library.",
    sections: [
      {
        id: "manual",
        title: "A place for things you choose.",
        paragraphs: [
          "Manual Spaces are collections you curate. Make one for a project, a reading list, or a place you would like to visit. Add memories that belong together, even when they share no common words.",
        ],
        steps: [
          "Open Spaces and create a new Space.",
          "Give it a name, choose its appearance, and turn off Smart Space.",
          "Open a memory and add it to that Space.",
        ],
      },
      {
        id: "smart",
        title: "An idea that gathers itself.",
        paragraphs: [
          "A Smart Space is a saved search. It shows memories matching its query and updates as matching items arrive or change.",
          "Try kind:image #design for a visual reference collection, or is:favorite for the things you return to. The same query syntax works in Search and Smart Spaces.",
        ],
        steps: [
          "Create a Space with Smart Space enabled.",
          "Name it and enter a search query.",
          "Save it, then open it to browse the matching memories.",
        ],
      },
      {
        id: "change",
        title: "Nothing needs to be permanent.",
        paragraphs: [
          "Change a Space’s name, symbol, color, or query as an interest evolves. Removing a Space preserves the memories themselves.",
          "A Space organizes your personal library. It is not a shared workspace, a public board, or a sync destination.",
        ],
      },
    ],
  },
  {
    slug: "rediscover",
    number: "05",
    title: "Hello again, old inspiration.",
    category: "A little more possibility",
    minutes: 2,
    description:
      "A fresh look at things you already thought were worth keeping.",
    sections: [
      {
        id: "return",
        title: "Let something find its way back.",
        paragraphs: [
          "Rediscover draws a random selection from your existing library. There is no external feed to catch up with: just a few of your own memories in a different order.",
          "Open the Rediscover tab, follow anything that catches your eye, and tap A few more when you want another selection.",
        ],
      },
      {
        id: "offline",
        title: "A quiet moment, even offline.",
        paragraphs: [
          "Rediscovery happens locally and needs neither an account nor an AI provider. It is a different way to browse what you have already saved.",
          "An empty library has nothing to rediscover yet. Start with a few personal saves, or explicitly choose the sample library from the welcome screen.",
        ],
      },
    ],
  },
  {
    slug: "optional-ai",
    number: "06",
    title: "A little help. Your choice.",
    category: "A little more possibility",
    minutes: 5,
    description:
      "Understand what works on your device and what optional providers can add.",
    sections: [
      {
        id: "local",
        title: "Useful before you add a key.",
        paragraphs: [
          "Capture, visual browsing, full-text search, OCR, local labels, Spaces, and rediscovery work without a hosted AI model. AI starts disabled.",
          "If you choose to enable enrichment, providers can suggest titles, summaries, tags, and search concepts. A failed request leaves the original save intact.",
        ],
      },
      {
        id: "providers",
        title: "Two kinds of help.",
        paragraphs: [
          "The source currently configures Inception Mercury 2.5 for text and Google Gemini 3.5 Flash-Lite for images and supported media. Model identifiers are editable in Settings.",
          "Text-only enrichment sends available saved text and context to Inception. When supported media is included, that media and its context go to Google. Provider availability, usage charges, and terms depend on your account.",
        ],
      },
      {
        id: "enable",
        title: "Turn it on deliberately.",
        paragraphs: [
          "Open Library options → Settings. Saving a key alone does not enable library uploads.",
        ],
        steps: [
          "Enter the provider key and tap Save key.",
          "Use Test connection for a small request to that provider.",
          "Enable Enrich with AI when you want saved content analyzed.",
          "Choose whether to Include images & media.",
          "Use Analyze items without AI results for existing saves.",
        ],
        note: "Keys are stored in the device-only Keychain and are excluded from exports. Never put app provider keys into this website.",
      },
      {
        id: "coverage",
        title: "The app tells you what was covered.",
        paragraphs: [
          "An analysis can only describe the content actually available to it. Coverage notes make the important boundaries visible.",
        ],
        table: {
          headers: ["Content", "Current coverage"],
          rows: [
            [
              "Images",
              "Resized and re-encoded for inference without original metadata.",
            ],
            [
              "Video or audio up to 10 MB",
              "Can be sent inline to the configured media provider.",
            ],
            [
              "Larger video",
              "Five sampled frames; no audio or motion between those frames.",
            ],
            [
              "Larger audio",
              "Saved and playable, but not transcribed by this path.",
            ],
            [
              "Scanned PDFs",
              "Up to five rendered pages for optional analysis.",
            ],
            [
              "Text PDFs",
              "Locally extracted text, subject to extraction and request bounds.",
            ],
          ],
        },
      },
    ],
  },
  {
    slug: "backups",
    number: "07",
    title: "Keep a copy. Keep your choice.",
    category: "Make it yours",
    minutes: 4,
    description:
      "Export your library deliberately, restore it carefully, and understand what travels.",
    sections: [
      {
        id: "why",
        title: "Local does not mean backed up.",
        paragraphs: [
          "Rillmark excludes its live library from automatic cloud and device backup. There is no automatic sync between devices. Export is how you make a deliberate second copy.",
          "Make an export before changing devices, removing the app, or doing anything that could remove its storage. A development signing refresh should be installed over the existing app.",
        ],
      },
      {
        id: "export",
        title: "Take your memories with you.",
        paragraphs: [
          "In Settings, export a library copy and choose a destination you control. A .rillmark package contains a versioned manifest, memory records, Spaces, original files, thumbnails, and checksums.",
          "Provider credentials are not included. The exported package is unencrypted; store and share it with the same care as its contents.",
        ],
      },
      {
        id: "restore",
        title: "Bring a copy back.",
        paragraphs: [
          "Import a .rillmark package from Settings. Rillmark validates its paths and attachment checksums before merging records into your library.",
          "Existing record IDs are preserved. Import is a merge of new records, not a two-way sync engine and not a way to overwrite existing records with edited copies. Damaged or incompatible packages are rejected.",
        ],
      },
      {
        id: "habit",
        title: "Make a small habit of it.",
        paragraphs: [
          "After a meaningful stretch of collecting, keep a dated export somewhere you can find again. A destination in your own cloud file provider is your choice, separate from the live app library.",
        ],
      },
    ],
  },
  {
    slug: "troubleshooting",
    number: "08",
    title: "A little help getting unstuck.",
    category: "Make it yours",
    minutes: 4,
    description:
      "Practical answers for missing previews, Share Sheet setup, search, and provider errors.",
    sections: [
      {
        id: "share",
        title: "Rillmark is missing from Share.",
        paragraphs: [
          "Open More in the app row of the Share Sheet and add Rillmark to Favorites. If you built the app yourself, confirm both the app and Share extension are signed and installed.",
          "Both targets must use the same App Group identifier. Shared storage errors usually need this project setting checked in Xcode.",
        ],
      },
      {
        id: "preview",
        title: "The save is there. The preview is not.",
        paragraphs: [
          "Open Rillmark so local processing can run. iOS can suspend work in the background, and enrichment resumes when the app opens.",
          "A web page may require a sign-in, block preview requests, or depend on JavaScript. The original address remains saved. Add a note or an accessible screenshot instead of expecting a private page to be read.",
        ],
      },
      {
        id: "search",
        title: "A memory is hard to find.",
        paragraphs: [
          "Try a word from its title or saved text. Check whether the item was archived or moved to Recently Deleted. Reopen the app and allow indexing to finish.",
          "Image recognition is not a guarantee that every visible object or phrase will be indexed. Add your own tag or annotation for a clue you care about.",
        ],
      },
      {
        id: "ai",
        title: "AI needs attention.",
        paragraphs: [
          "Check that the key was saved, the provider connection succeeds, and Enrich with AI is enabled. If you changed model identifiers, confirm the provider account can use them.",
          "Quota, network, or response errors do not remove the original. The item shows an enrichment note; use Analyze again after resolving the cause.",
        ],
      },
      {
        id: "install",
        title: "A development install stops opening.",
        paragraphs: [
          "Personal development installs require periodic re-signing. Rebuild and install over the existing app to preserve its container. Export a library copy before any uninstall.",
          "For a reproducible issue, record the action, the file type, and the visible error. Remove personal content and keys before opening an issue in the source repository.",
        ],
      },
    ],
  },
];

export const guideGroups = [...new Set(guides.map((g) => g.category))];
