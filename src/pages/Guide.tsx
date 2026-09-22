import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ChevronRight,
  Search,
} from "lucide-react";
import { Link, NavLink, useParams } from "react-router-dom";
import { Art, Eyebrow, FAQ, TextLink } from "../components/ui";
import { guideGroups, guides } from "../content/guides";
import { NotFound } from "./GetStarted";

export function GuideIndex() {
  const [query, setQuery] = useState("");
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const results = guides.filter((g) =>
    terms.every((term) => JSON.stringify(g).toLowerCase().includes(term)),
  );
  return (
    <>
      <section className="guide-hero wrap">
        <div>
          <Eyebrow>THE RILLMARK FIELD GUIDE</Eyebrow>
          <h1>
            Make yourself
            <br />
            <em>at home.</em>
          </h1>
          <p className="lead">
            A little guidance for your curious mind.
            <br />
            Start anywhere. Follow what interests you.
          </p>
          <label className="guide-index-search">
            <Search size={21} />
            <span className="sr-only">Find a guide</span>
            <input
              type="search"
              placeholder="What would you like to know?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
        </div>
        <Art
          name="room-for-curiosity"
          eager
          alt="An open notebook, fern, and mountain photograph: the Rillmark field guide."
        />
      </section>
      <div className="wrap guide-library">
        <p className="guide-result-count" role="status">
          {query
            ? `${results.length} guides matching “${query}”`
            : "Eight small chapters. Plenty to discover."}
        </p>
        {guideGroups.map((group) => {
          const groupGuides = results.filter((g) => g.category === group);
          return (
            groupGuides.length > 0 && (
              <section className="guide-group" key={group}>
                <div className="guide-group-label">
                  <span className="eyebrow">{group}</span>
                  <span>{String(groupGuides.length).padStart(2, "0")}</span>
                </div>
                <div className="guide-index-grid">
                  {groupGuides.map((g) => (
                    <Link
                      key={g.slug}
                      className="guide-index-card"
                      to={"/guide/" + g.slug}
                    >
                      <div className="guide-card-meta">
                        <span>CHAPTER {g.number}</span>
                        <span>{g.minutes} MIN READ</span>
                      </div>
                      <h2>{g.title}</h2>
                      <p>{g.description}</p>
                      <ArrowRight size={19} aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </section>
            )
          );
        })}
        {!results.length && (
          <div className="empty-library">
            <BookOpen size={28} />
            <h2>No chapter by that name.</h2>
            <p>Try “save”, “AI”, or “backup”.</p>
            <button className="text-button" onClick={() => setQuery("")}>
              Show the whole guide
            </button>
          </div>
        )}
        <div className="guide-start">
          <div>
            <h2>Starting from the beginning?</h2>
            <p>Get the app ready, then make your first save.</p>
          </div>
          <TextLink to="/get-started">Start here</TextLink>
        </div>
      </div>
    </>
  );
}

export function GuideArticle() {
  const { slug } = useParams();
  const guide = guides.find((g) => g.slug === slug);
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);
  const article = useRef<HTMLElement>(null);
  useEffect(() => {
    setActive(guide?.sections[0]?.id || "");
    setProgress(0);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-15% 0px -65% 0px" },
    );
    article.current
      ?.querySelectorAll("section[id]")
      .forEach((section) => observer.observe(section));
    const onScroll = () => {
      if (!article.current) return;
      const rect = article.current.getBoundingClientRect();
      const distance = rect.height - window.innerHeight + 120;
      setProgress(
        Math.max(
          0,
          Math.min(100, ((120 - rect.top) / Math.max(1, distance)) * 100),
        ),
      );
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [slug, guide]);
  if (!guide) return <NotFound />;
  const index = guides.indexOf(guide);
  const previous = guides[index - 1];
  const next = guides[index + 1];
  return (
    <>
      <div
        className="reading-progress"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />
      <div className="guide-layout wrap">
        <aside className="guide-sidebar">
          <Link className="back-to-guide" to="/guide">
            <ArrowLeft size={15} />
            The field guide
          </Link>
          {guideGroups.map((group) => (
            <div className="sidebar-group" key={group}>
              <p>{group}</p>
              {guides
                .filter((g) => g.category === group)
                .map((g) => (
                  <NavLink key={g.slug} to={"/guide/" + g.slug}>
                    <span>{g.number}</span>
                    {g.title}
                  </NavLink>
                ))}
            </div>
          ))}
          <Link to="/get-started" className="sidebar-start">
            Your first five minutes <ArrowRight size={15} />
          </Link>
        </aside>
        <article className="guide-article" ref={article}>
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/guide">The guide</Link>
            <ChevronRight size={13} />
            <span>{guide.category}</span>
          </nav>
          <header className="article-heading">
            <div className="article-meta">
              <span>CHAPTER {guide.number}</span>
              <span>{guide.minutes} MIN READ</span>
            </div>
            <h1>{guide.title}</h1>
            <p className="lead">{guide.description}</p>
          </header>
          <details className="mobile-toc">
            <summary>In this chapter</summary>
            {guide.sections.map((s) => (
              <a href={"#" + s.id} key={s.id}>
                {s.title}
              </a>
            ))}
          </details>
          {guide.sections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2>
                <a className="heading-anchor" href={"#" + section.id}>
                  {section.title}
                  <span aria-hidden="true">#</span>
                </a>
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.steps && (
                <ol className="article-steps">
                  {section.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              )}
              {section.table && (
                <div
                  className="table-wrap"
                  tabIndex={0}
                  role="region"
                  aria-label={section.title + " reference table"}
                >
                  <table>
                    <thead>
                      <tr>
                        {section.table.headers.map((header) => (
                          <th key={header}>{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row) => (
                        <tr key={row[0]}>
                          {row.map((cell, i) => (
                            <td key={i}>
                              {i === 0 && guide.slug === "search" ? (
                                <code>{cell}</code>
                              ) : (
                                cell
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {section.note && (
                <aside className="article-note">
                  <BookOpen size={18} aria-hidden="true" />
                  <p>{section.note}</p>
                </aside>
              )}
            </section>
          ))}
          {guide.questions && (
            <section className="article-faq">
              <h2>A little more clarity.</h2>
              <FAQ items={guide.questions} />
            </section>
          )}
          <nav className="chapter-navigation" aria-label="More guide chapters">
            {previous ? (
              <Link to={"/guide/" + previous.slug}>
                <span>
                  <ArrowLeft size={14} />
                  PREVIOUS CHAPTER
                </span>
                <strong>{previous.title}</strong>
              </Link>
            ) : (
              <Link to="/guide">
                <span>
                  <ArrowLeft size={14} />
                  THE WHOLE GUIDE
                </span>
                <strong>Explore every chapter.</strong>
              </Link>
            )}
            {next ? (
              <Link to={"/guide/" + next.slug}>
                <span>
                  NEXT CHAPTER
                  <ArrowRight size={14} />
                </span>
                <strong>{next.title}</strong>
              </Link>
            ) : (
              <Link to="/get-started">
                <span>
                  MAKE IT YOURS
                  <ArrowRight size={14} />
                </span>
                <strong>Start your own library.</strong>
              </Link>
            )}
          </nav>
        </article>
        <aside className="article-toc">
          <p>IN THIS CHAPTER</p>
          <nav aria-label="On this page">
            {guide.sections.map((s) => (
              <a
                key={s.id}
                href={"#" + s.id}
                className={active === s.id ? "active" : ""}
                aria-current={active === s.id ? "location" : undefined}
              >
                {s.title}
              </a>
            ))}
          </nav>
          <span className="toc-note">
            A little at a time
            <br />
            is a lovely way to learn.
          </span>
        </aside>
      </div>
    </>
  );
}
