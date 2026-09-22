import {
  ArrowRight,
  BookOpen,
  Feather,
  Image as ImageIcon,
  Layers,
  Link as LinkIcon,
  LockKeyhole,
  Search,
  Smartphone,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  Art,
  ButtonLink,
  Closing,
  Eyebrow,
  FAQ,
  TextLink,
} from "../components/ui";
import { LibraryDemo } from "../components/LibraryDemo";
import { questions } from "../content/site";

export default function Home() {
  return (
    <>
      <section className="home-hero wrap">
        <div className="hero-copy">
          <Eyebrow>A HOME FOR YOUR CURIOUS MIND</Eyebrow>
          <h1>
            Keep what
            <br />
            <em>stays with you.</em>
          </h1>
          <p className="lead">
            The image you loved. The words you needed.
            <br className="desktop-break" /> The thought you almost forgot.
          </p>
          <p className="hero-description">
            A quiet place for all of it. Save freely, find naturally,
            <br className="desktop-break" /> and make a little room in your
            mind.
          </p>
          <div className="button-row">
            <ButtonLink to="/the-app">Step inside Rillmark</ButtonLink>
            <Link className="subtle-link" to="/how-it-works">
              How it works <ArrowRight size={16} />
            </Link>
          </div>
          <div className="hero-small">
            <Smartphone size={15} aria-hidden="true" />
            <span>Made for iPhone & iPad</span>
            <span className="dot-divider">·</span>
            <span>Yours, by nature</span>
          </div>
        </div>
        <div className="hero-art">
          <div className="art-number">
            COLLECTED, NOT FORGOTTEN <span>01 / ∞</span>
          </div>
          <Art
            name="a-world-worth-keeping"
            eager
            alt="A fern print, a misty landscape, a linen notebook, and small paper keepsakes."
          />
          <div className="kept-note">
            <span className="kept-icon">
              <Feather size={18} />
            </span>
            <div>
              <strong>A little inspiration. Safely kept.</strong>
              <span>For whenever you need it again.</span>
            </div>
          </div>
          <span className="art-caption">For a mind that notices things.</span>
        </div>
      </section>
      <div className="qualities wrap">
        <span>
          <LockKeyhole size={16} />
          Local-first, always
        </span>
        <span>
          <Search size={16} />
          Find it with a clue
        </span>
        <span>
          <Layers size={16} />A place for every kind of memory
        </span>
      </div>
      <section className="section wrap introduction">
        <Eyebrow>LESS TO HOLD IN YOUR HEAD</Eyebrow>
        <h2>
          Your mind is for making connections.
          <br />
          <em>Give the keeping a home.</em>
        </h2>
        <p>
          Some things deserve more than an open tab, a forgotten screenshot,
          <br className="desktop-break" /> or a note to yourself. Rillmark
          gathers them into a library that feels like you.
        </p>
      </section>
      <section
        className="wrap library-section"
        aria-labelledby="library-heading"
      >
        <div className="section-heading">
          <div>
            <Eyebrow>YOUR WORLD, GATHERED TOGETHER</Eyebrow>
            <h2 id="library-heading">
              A library of <em>little things.</em>
            </h2>
          </div>
          <TextLink to="/the-app">Get to know the app</TextLink>
        </div>
        <LibraryDemo compact />
      </section>
      <section className="section wrap ways-section">
        <div className="section-heading">
          <div>
            <Eyebrow>FROM A SPARK TO SOMETHING MORE</Eyebrow>
            <h2>
              Save first.
              <br />
              <em>Let the connections follow.</em>
            </h2>
          </div>
          <p>
            No filing ritual. No perfect system.
            <br />
            Just a few thoughtful ways to keep going.
          </p>
        </div>
        <div className="ways-grid">
          {[
            {
              n: "01",
              Icon: LinkIcon,
              title: "Catch the little spark.",
              text: "Share a link, save a photo, or write a thought. Bring it in from the apps you already use.",
              to: "saving",
              label: "Make your first save",
            },
            {
              n: "02",
              Icon: Search,
              title: "Follow a familiar clue.",
              text: "A word, a color, text inside an image. Find a memory through the details you remember.",
              to: "search",
              label: "A gentler way to search",
            },
            {
              n: "03",
              Icon: Layers,
              title: "Find a new connection.",
              text: "Make a Space for an interest. Revisit a forgotten favorite. Let your own curiosity lead.",
              to: "spaces",
              label: "Give an idea some space",
            },
          ].map(({ n, Icon, title, text, to, label }) => (
            <article key={n}>
              <div className="way-top">
                <span>{n}</span>
                <Icon size={24} strokeWidth={1.3} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              <TextLink to={"/guide/" + to}>{label}</TextLink>
            </article>
          ))}
        </div>
      </section>
      <section className="privacy-band">
        <div className="wrap privacy-band-inner">
          <div>
            <Eyebrow light>A PERSONAL SPACE SHOULD STAY PERSONAL</Eyebrow>
            <h2>
              Your thoughts.
              <br />
              Your things.
              <br />
              <em>Your little corner.</em>
            </h2>
          </div>
          <div className="privacy-band-copy">
            <LockKeyhole size={27} strokeWidth={1.3} />
            <p>
              Your library lives on your device. No account to create. No
              analytics in the app. No feed asking for your attention.
            </p>
            <p>
              Useful on its own, with optional AI when you choose it. A little
              intelligence, on your terms.
            </p>
            <TextLink to="/privacy">Understand your choices</TextLink>
          </div>
        </div>
      </section>
      <section className="section wrap guide-invitation">
        <Art
          name="room-for-curiosity"
          alt="An open notebook holding a pressed fern and a mountain photograph."
        />
        <div>
          <Eyebrow>A SMALL FIELD GUIDE</Eyebrow>
          <h2>
            Simple to start.
            <br />
            <em>Lovely to get to know.</em>
          </h2>
          <p>
            From your first save to a library that grows with you. A little
            guidance, whenever you want it.
          </p>
          <div className="guide-shortcuts">
            <Link to="/guide/saving">
              <ImageIcon size={17} />
              <span>Save something worth keeping</span>
              <ArrowRight size={16} />
            </Link>
            <Link to="/guide/search">
              <Search size={17} />
              <span>Find the thing you half-remember</span>
              <ArrowRight size={16} />
            </Link>
            <Link to="/guide/backups">
              <BookOpen size={17} />
              <span>Care for your collection</span>
              <ArrowRight size={16} />
            </Link>
          </div>
          <TextLink to="/guide">Explore the whole guide</TextLink>
        </div>
      </section>
      <section className="section wrap faq-section">
        <div>
          <Eyebrow>A FEW THINGS YOU MIGHT WONDER</Eyebrow>
          <h2>
            A little <em>clarity.</em>
          </h2>
          <p>For the curious, naturally.</p>
        </div>
        <FAQ items={questions} />
      </section>
      <Closing />
    </>
  );
}
