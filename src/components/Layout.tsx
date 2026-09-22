import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Menu,
  Search,
  X,
} from "lucide-react";
import { Brand } from "./ui";
import { guides } from "../content/guides";
import { navigation, repository } from "../content/site";

export function Header() {
  const [menu, setMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [shortcut, setShortcut] = useState("Ctrl K");
  const dialog = useRef<HTMLDialogElement>(null);
  const searchInput = useRef<HTMLInputElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const { pathname } = useLocation();
  const openSearch = () => {
    setMenu(false);
    dialog.current?.showModal();
    searchInput.current?.focus();
  };
  useEffect(() => {
    setMenu(false);
    dialog.current?.close();
  }, [pathname]);
  useEffect(() => {
    setShortcut(/Mac|iPhone|iPad/.test(navigator.platform) ? "⌘ K" : "Ctrl K");
    const handleKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openSearch();
      }
      if (e.key === "Escape") {
        setMenu((wasOpen) => {
          if (wasOpen) menuButton.current?.focus();
          return false;
        });
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const results = guides.filter((guide) =>
    terms.every((term) => JSON.stringify(guide).toLowerCase().includes(term)),
  );
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="site-header">
        <div className="header-inner">
          <Brand />
          <nav
            id="main-navigation"
            className={"main-nav" + (menu ? " open" : "")}
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <NavLink key={item.to} to={item.to}>
                {item.label}
              </NavLink>
            ))}
            <Link className="mobile-start" to="/get-started">
              Make it yours <ArrowUpRight size={16} />
            </Link>
          </nav>
          <div className="header-actions">
            <button
              className="icon-button header-search"
              aria-label="Search the guide"
              aria-haspopup="dialog"
              aria-keyshortcuts="Control+K Meta+K"
              onClick={openSearch}
            >
              <Search size={18} />
            </button>
            <Link to="/get-started" className="header-cta">
              Make it yours <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
            <button
              ref={menuButton}
              className="icon-button menu-toggle"
              aria-label={menu ? "Close navigation" : "Open navigation"}
              aria-controls="main-navigation"
              aria-expanded={menu}
              onClick={() => setMenu(!menu)}
            >
              {menu ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>
      <dialog
        ref={dialog}
        className="search-dialog"
        aria-labelledby="search-title"
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current?.close();
        }}
      >
        <div className="dialog-heading">
          <span id="search-title">A little help finding your way.</span>
          <button
            className="icon-button"
            aria-label="Close search"
            onClick={() => dialog.current?.close()}
          >
            <X size={20} />
          </button>
        </div>
        <div className="dialog-search">
          <Search size={20} aria-hidden="true" />
          <label className="sr-only" htmlFor="guide-search">
            Search the guide
          </label>
          <input
            ref={searchInput}
            id="guide-search"
            type="search"
            placeholder="Try search, backups, or AI…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
          />
        </div>
        <div className="search-results">
          <p className="micro" role="status">
            {query
              ? `${results.length} matching guides`
              : "A FEW PLACES TO START"}
          </p>
          {results.map((g) => (
            <Link
              key={g.slug}
              to={"/guide/" + g.slug}
              onClick={() => dialog.current?.close()}
            >
              <BookOpen size={19} aria-hidden="true" />
              <span>
                <strong>{g.title}</strong>
                <small>{g.description}</small>
              </span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          ))}
          {!results.length && (
            <div className="empty-search">
              <p>No guide found for “{query}”.</p>
              <button
                className="text-button"
                onClick={() => {
                  setQuery("");
                  searchInput.current?.focus();
                }}
              >
                Show all guides
              </button>
            </div>
          )}
        </div>
        <div className="search-footer">
          <span>Search stays in your browser.</span>
          <span>
            <kbd>{shortcut}</kbd> to open · <kbd>Esc</kbd> to close
          </span>
        </div>
      </dialog>
    </>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-top">
        <div className="footer-about">
          <Brand footer />
          <p>
            A quiet home for the things
            <br />
            that make you, <em>you.</em>
          </p>
        </div>
        <div>
          <h2>TAKE A LOOK</h2>
          <Link to="/the-app">The app</Link>
          <Link to="/how-it-works">How it works</Link>
          <Link to="/privacy">Privacy & your choices</Link>
        </div>
        <div>
          <h2>MAKE YOURSELF AT HOME</h2>
          <Link to="/get-started">Get started</Link>
          <Link to="/guide">The Rillmark guide</Link>
          <Link to="/guide/troubleshooting">A little help</Link>
        </div>
        <div>
          <h2>BEHIND THE APP</h2>
          <a href={repository} target="_blank" rel="noreferrer">
            Project on GitHub <ArrowUpRight size={13} />
          </a>
          <Link to="/guide/optional-ai">Optional intelligence</Link>
          <Link to="/guide/backups">Keep a library copy</Link>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} Rillmark. Independently made.</span>
        <span>No account. No feed. Just you.</span>
        <span>For iPhone & iPad</span>
      </div>
    </footer>
  );
}
