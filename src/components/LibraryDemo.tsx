import { useRef, useState } from "react";
import {
  BookOpen,
  Check,
  Heart,
  Image as ImageIcon,
  Search,
  Shuffle,
  Type,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

type Memory = {
  id: number;
  title: string;
  kind: string;
  image?: string;
  quote?: string;
  tags: string[];
  description: string;
  favorite?: boolean;
  date: string;
};
const memories: Memory[] = [
  {
    id: 1,
    title: "A slower horizon",
    kind: "Images",
    image: "a-slower-horizon",
    tags: ["green", "landscape", "nature"],
    description:
      "A little reminder to take the long way home. An illustrative AI-generated landscape, saved here as a sample memory.",
    favorite: true,
    date: "2026-09-20",
  },
  {
    id: 2,
    title: "A thought for later",
    kind: "Notes",
    quote:
      "More long walks.\nMore books with folded corners.\nMore making things just because.",
    tags: ["slow living", "ideas"],
    description:
      "The small things I would like to make more room for. This is a sample note, inspired by the app’s sample collection.",
    date: "2026-09-21",
  },
  {
    id: 3,
    title: "Spaces to breathe",
    kind: "Images",
    image: "architecture",
    tags: ["architecture", "design", "warm"],
    description:
      "Soft arches, quiet shapes, and room to breathe. Original sample artwork included with the native app.",
    date: "2026-09-18",
  },
  {
    id: 4,
    title: "The art of noticing",
    kind: "Reading",
    quote: "Pay attention.\nThere is something good here.",
    tags: ["reading", "inspiration", "creativity"],
    description:
      "A sample reading memory about paying attention to ordinary things. In the app, public links can include readable page text and their original source.",
    favorite: true,
    date: "2026-09-19",
  },
  {
    id: 5,
    title: "Everyday color",
    kind: "Images",
    image: "palette",
    tags: ["green", "palette", "design"],
    description:
      "A palette collected for another day. Original sample artwork included with the native app.",
    date: "2026-09-17",
  },
  {
    id: 6,
    title: "A little collection of good things",
    kind: "Notes",
    quote: "A place to go.\nA thing to make.\nA thought to follow.",
    tags: ["ideas", "curiosity"],
    description:
      "Sometimes a collection starts with a few words. This sample note stays in the website illustration only.",
    date: "2026-09-22",
  },
];

function matches(memory: Memory, query: string, favorites: Set<number>) {
  const tokens = query.toLowerCase().match(/#?"[^"]+"|\S+/g) || [];
  const haystack =
    `${memory.title} ${memory.quote || ""} ${memory.description} ${memory.tags.join(" ")}`.toLowerCase();
  return tokens.every((token) => {
    if (token === "is:favorite") return favorites.has(memory.id);
    if (token.startsWith("kind:"))
      return (
        { Images: "image", Notes: "note", Reading: "link" }[memory.kind] ===
        token.slice(5)
      );
    if (token.startsWith("#"))
      return memory.tags.includes(token.slice(1).replaceAll('"', ""));
    if (token.startsWith("after:")) return memory.date >= token.slice(6);
    if (token.startsWith("before:")) return memory.date < token.slice(7);
    return haystack.includes(token.replaceAll('"', ""));
  });
}

export function LibraryDemo({ compact = false }: { compact?: boolean }) {
  const [filter, setFilter] = useState("Everything");
  const [query, setQuery] = useState("");
  const [favorites, setFavorites] = useState(
    new Set(memories.filter((m) => m.favorite).map((m) => m.id)),
  );
  const [selected, setSelected] = useState<Memory | null>(null);
  const [rotation, setRotation] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const toggleFavorite = (id: number) =>
    setFavorites((previous) => {
      const next = new Set(previous);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  const ordered = [...memories.slice(rotation), ...memories.slice(0, rotation)];
  const visible = ordered.filter(
    (m) =>
      (filter === "Everything" ||
        (filter === "Favorites" ? favorites.has(m.id) : m.kind === filter)) &&
      matches(m, query, favorites),
  );
  return (
    <div className={"library-demo" + (compact ? " compact" : "")}>
      <div className="library-demo-top">
        <div>
          <span className="micro">A LITTLE LOOK INSIDE</span>
          <h3>A world worth keeping.</h3>
        </div>
        <button
          className="shuffle-button"
          aria-label="Rediscover sample memories"
          onClick={() => setRotation((rotation + 1) % memories.length)}
        >
          <Shuffle size={16} aria-hidden="true" />
          <span>Rediscover</span>
        </button>
      </div>
      <div className="library-toolbar">
        <div
          className="filter-pills"
          role="group"
          aria-label="Filter sample memories"
        >
          {["Everything", "Images", "Notes", "Reading", "Favorites"].map(
            (name) => (
              <button
                key={name}
                aria-pressed={filter === name}
                onClick={() => setFilter(name)}
              >
                {name === "Favorites" && <Heart size={14} aria-hidden="true" />}
                {name}
              </button>
            ),
          )}
        </div>
        <label className="sample-search">
          <Search size={17} aria-hidden="true" />
          <span className="sr-only">Search sample memories</span>
          <input
            type="search"
            placeholder="A little clue…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </div>
      <div className="memory-grid">
        {visible.map((memory) => (
          <article
            className={"memory-card memory-" + memory.id}
            key={memory.id}
          >
            <button
              className="memory-open"
              aria-label={"Open sample: " + memory.title}
              onClick={() => {
                setSelected(memory);
                dialog.current?.showModal();
              }}
            >
              {memory.image ? (
                <img
                  src={`/images/${memory.image}${memory.image === "a-slower-horizon" ? "-768" : ""}.webp`}
                  alt={memory.title}
                  width="600"
                  height="450"
                  loading="lazy"
                />
              ) : (
                <div className="memory-quote">
                  {memory.kind === "Reading" ? (
                    <BookOpen size={22} aria-hidden="true" />
                  ) : (
                    <span className="quote-mark" aria-hidden="true">
                      “
                    </span>
                  )}
                  <p>{memory.quote}</p>
                </div>
              )}
              <div className="memory-info">
                <h4>{memory.title}</h4>
                <span>
                  {memory.kind === "Images" ? (
                    <ImageIcon size={13} aria-hidden="true" />
                  ) : memory.kind === "Reading" ? (
                    <BookOpen size={13} aria-hidden="true" />
                  ) : (
                    <Type size={13} aria-hidden="true" />
                  )}
                  {memory.kind}
                </span>
              </div>
            </button>
            <button
              className={
                "favorite-button" +
                (favorites.has(memory.id) ? " is-favorite" : "")
              }
              aria-label={
                (favorites.has(memory.id) ? "Unfavorite " : "Favorite ") +
                memory.title
              }
              aria-pressed={favorites.has(memory.id)}
              onClick={() => toggleFavorite(memory.id)}
            >
              <Heart
                size={16}
                fill={favorites.has(memory.id) ? "currentColor" : "none"}
              />
            </button>
          </article>
        ))}
      </div>
      {!visible.length && (
        <div className="empty-library">
          <Search size={26} />
          <h4>No memories match that clue.</h4>
          <p>Try “green”, “design”, or “ideas”.</p>
          <button
            className="text-button"
            onClick={() => {
              setQuery("");
              setFilter("Everything");
            }}
          >
            Show every sample
          </button>
        </div>
      )}
      <div className="demo-foot">
        <span role="status">
          {visible.length} sample {visible.length === 1 ? "memory" : "memories"}{" "}
          · Try a filter, a heart, or a card.
        </span>
        <span>Website illustration · Changes reset on reload</span>
      </div>
      <dialog
        ref={dialog}
        className="memory-dialog"
        aria-labelledby="memory-title"
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current?.close();
        }}
      >
        <button
          className="icon-button modal-close"
          aria-label="Close sample memory"
          onClick={() => dialog.current?.close()}
        >
          <X size={20} />
        </button>
        {selected && (
          <>
            <div className="memory-dialog-art">
              {selected.image ? (
                <img
                  src={`/images/${selected.image}.webp`}
                  alt={selected.title}
                  width="600"
                  height="400"
                />
              ) : (
                <p>{selected.quote}</p>
              )}
            </div>
            <div className="memory-dialog-copy">
              <p className="micro">
                SAMPLE MEMORY · {selected.kind.toUpperCase()}
              </p>
              <h2 id="memory-title">{selected.title}</h2>
              <p>{selected.description}</p>
              <div className="tags">
                {selected.tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      setQuery('#"' + tag + '"');
                      setFilter("Everything");
                      dialog.current?.close();
                    }}
                  >
                    #{tag}
                  </button>
                ))}
              </div>
              <div className="memory-dialog-actions">
                <button
                  className="button button-secondary"
                  onClick={() => toggleFavorite(selected.id)}
                >
                  {favorites.has(selected.id) ? (
                    <Check size={16} />
                  ) : (
                    <Heart size={16} />
                  )}
                  {favorites.has(selected.id)
                    ? "Favorited"
                    : "Add to favorites"}
                </button>
                <Link
                  to="/guide/your-library"
                  onClick={() => dialog.current?.close()}
                  className="text-link"
                >
                  Explore the real library
                </Link>
              </div>
            </div>
          </>
        )}
      </dialog>
    </div>
  );
}
