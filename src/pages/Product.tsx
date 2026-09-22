import {
  BookOpen,
  Camera,
  FileText,
  Heart,
  Headphones,
  Layers,
  Link as LinkIcon,
  LockKeyhole,
  Search,
  Share2,
  Smartphone,
  Sparkles,
  Video,
} from "lucide-react";
import {
  Art,
  ButtonLink,
  Closing,
  Eyebrow,
  PageIntro,
  TextLink,
} from "../components/ui";
import { LibraryDemo } from "../components/LibraryDemo";

export function Product() {
  return (
    <>
      <PageIntro
        eyebrow="MEET YOUR NEW COMMONPLACE BOOK"
        title={
          <>
            A world worth <em>keeping.</em>
          </>
        }
        description="For the many things that catch your eye, and the few that never quite leave your mind."
      />
      <section className="wrap">
        <LibraryDemo />
      </section>
      <section className="section wrap feature-editorial">
        <div>
          <Eyebrow>COME AS YOU ARE</Eyebrow>
          <h2>
            One home.
            <br />
            <em>Many kinds of wonderful.</em>
          </h2>
          <p>
            Keep the original, add a little context, and let your library take
            its own shape. There is no right kind of thing to save.
          </p>
          <TextLink to="/guide/saving">Everything you can keep</TextLink>
        </div>
        <div className="format-list">
          {[
            {
              Icon: LinkIcon,
              title: "Links & articles",
              text: "A place for a thought you found elsewhere.",
            },
            {
              Icon: FileText,
              title: "Notes & documents",
              text: "Your own words, and pages worth returning to.",
            },
            {
              Icon: Camera,
              title: "Images & screenshots",
              text: "A visual memory, with words you can search.",
            },
            {
              Icon: Video,
              title: "Video & audio",
              text: "A moment you can play again.",
            },
          ].map(({ Icon, title, text }) => (
            <div key={title}>
              <Icon size={22} strokeWidth={1.4} />
              <span>
                <h3>{title}</h3>
                <p>{text}</p>
              </span>
            </div>
          ))}
        </div>
      </section>
      <section className="native-section">
        <div className="wrap native-inner">
          <div className="native-screenshot">
            <img
              src="/images/library-dark.webp"
              alt="The native Rillmark app in dark mode, showing its library, filters, sample memories, and tab navigation."
              width="850"
              height="1848"
              loading="lazy"
            />
            <span>FROM THE NATIVE APP · SAMPLE LIBRARY</span>
          </div>
          <div>
            <Eyebrow>AT HOME ON YOUR DEVICE</Eyebrow>
            <h2>
              Familiar by nature.
              <br />
              <em>Personal by design.</em>
            </h2>
            <p>
              Built in SwiftUI for iPhone and iPad, with native sharing, photo
              selection, file previews, and playback. The little details feel
              right because they belong here.
            </p>
            <div className="native-details">
              <span>
                <Smartphone size={18} />
                iPhone & iPad · iOS 26+
              </span>
              <span>
                <Heart size={18} />
                Light, dark, or your system appearance
              </span>
              <span>
                <BookOpen size={18} />
                Dynamic Type and VoiceOver labels
              </span>
            </div>
            <TextLink to="/get-started">Make it yours</TextLink>
          </div>
        </div>
      </section>
      <section className="section wrap">
        <div className="section-heading">
          <div>
            <Eyebrow>IT GETS MORE INTERESTING WITH TIME</Eyebrow>
            <h2>
              More than a place
              <br />
              <em>to put things.</em>
            </h2>
          </div>
        </div>
        <div className="capability-grid">
          {[
            {
              Icon: Search,
              title: "Find the familiar.",
              text: "Search titles, annotations, tags, recognized text, and concepts. A half-remembered detail can be enough.",
              to: "search",
            },
            {
              Icon: Layers,
              title: "Make a little space.",
              text: "Curate a collection yourself or turn a recurring search into a Smart Space that keeps growing.",
              to: "spaces",
            },
            {
              Icon: Sparkles,
              title: "Meet a memory again.",
              text: "Rediscover something from your own library. A new perspective on an old favorite, without a new feed.",
              to: "rediscover",
            },
            {
              Icon: LockKeyhole,
              title: "Keep the choice.",
              text: "Use the local tools on their own, or add provider keys for optional summaries and richer concepts.",
              to: "optional-ai",
            },
          ].map(({ Icon, title, text, to }) => (
            <article key={to}>
              <Icon size={24} strokeWidth={1.4} />
              <h3>{title}</h3>
              <p>{text}</p>
              <TextLink to={"/guide/" + to}>Get to know it</TextLink>
            </article>
          ))}
        </div>
      </section>
      <Closing />
    </>
  );
}

export function HowItWorks() {
  return (
    <>
      <PageIntro
        eyebrow="A LITTLE LESS FRICTION"
        title={
          <>
            From a passing spark
            <br />
            to <em>“there it is.”</em>
          </>
        }
        description="Save something when it matters. Find it when you need it. Everything in between can stay wonderfully simple."
      />
      <section className="wrap journey">
        <article>
          <div className="journey-copy">
            <span className="chapter-number">01</span>
            <Eyebrow>CAPTURE THE MOMENT</Eyebrow>
            <h2>
              See something good?
              <br />
              <em>Keep it.</em>
            </h2>
            <p>
              Share from an app you already use, bring in a photo or file, or
              write down a thought. Add a note if you like. There is no filing
              to finish first.
            </p>
            <TextLink to="/guide/saving">A guide to your first save</TextLink>
          </div>
          <div className="share-illustration">
            <div className="sample-paper">
              <Art
                name="a-slower-horizon"
                alt="A misty green hillside, used as an example of a saved photograph."
              />
              <p>A slower horizon</p>
              <span>A PLACE TO COME BACK TO</span>
            </div>
            <div className="share-receipt">
              <Share2 size={20} />
              <span>
                Share to <strong>Rillmark</strong>
              </span>
              <span className="receipt-saved">Saved on your device</span>
            </div>
            <p className="illustration-caption">Illustrated saving flow</p>
          </div>
        </article>
        <article>
          <div className="index-illustration">
            <div className="index-heading">
              <img
                src="/images/rillmark-icon.png"
                width="44"
                height="44"
                alt=""
              />
              <div>
                <strong>A little context, collected.</strong>
                <span>On your device</span>
              </div>
            </div>
            <div className="index-row">
              <Camera size={18} />
              <span>Original image</span>
              <span>Kept</span>
            </div>
            <div className="index-row">
              <FileText size={18} />
              <span>Visible text</span>
              <span>Recognized</span>
            </div>
            <div className="index-row">
              <Search size={18} />
              <span>Words & visual labels</span>
              <span>Searchable</span>
            </div>
            <div className="index-tags">
              <span>green</span>
              <span>landscape</span>
              <span>nature</span>
            </div>
            <p>
              Illustrative labels. Recognition depends on the saved content.
            </p>
          </div>
          <div className="journey-copy">
            <span className="chapter-number">02</span>
            <Eyebrow>LET THE DETAILS SETTLE IN</Eyebrow>
            <h2>
              A little recognition.
              <br />
              <em>A lot less remembering.</em>
            </h2>
            <p>
              When you open Rillmark, it creates previews and indexes available
              text. On-device OCR and labels give your memories more ways to be
              found.
            </p>
            <p>
              Optional AI can add summaries and concepts. You choose whether
              saved content goes to a provider.
            </p>
            <TextLink to="/guide/optional-ai">
              What happens on your device
            </TextLink>
          </div>
        </article>
        <article>
          <div className="journey-copy">
            <span className="chapter-number">03</span>
            <Eyebrow>FOLLOW A LITTLE CLUE</Eyebrow>
            <h2>
              You remember a detail.
              <br />
              <em>Rillmark finds a connection.</em>
            </h2>
            <p>
              Search for “green”, a phrase, or a tag. Narrow things down by type
              or favorite. Save a useful query as a Smart Space, or let
              Rediscover bring a memory back.
            </p>
            <TextLink to="/guide/search">Learn the search vocabulary</TextLink>
          </div>
          <div className="search-example">
            <div>
              <Search size={20} />
              <code>kind:image green</code>
            </div>
            <img
              src="/images/a-slower-horizon-768.webp"
              width="768"
              height="512"
              alt="The sample green landscape matched by the example search."
              loading="lazy"
            />
            <p>
              <strong>A slower horizon</strong>
              <span>Images · green · nature</span>
            </p>
            <span className="illustration-caption">
              Illustrative search result
            </span>
          </div>
        </article>
      </section>
      <section className="wrap gentle-banner">
        <Headphones size={25} strokeWidth={1.4} />
        <div>
          <h2>Some things can stay simple.</h2>
          <p>
            No account. No organizational homework. Your original saves remain
            safe if a preview or an AI request fails.
          </p>
        </div>
        <ButtonLink to="/guide">Find your way around</ButtonLink>
      </section>
      <Closing />
    </>
  );
}
