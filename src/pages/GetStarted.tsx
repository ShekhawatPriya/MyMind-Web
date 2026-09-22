import { useState } from "react";
import {
  ArrowRight,
  Check,
  Copy,
  Github,
  Laptop,
  Smartphone,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  Art,
  ButtonLink,
  Eyebrow,
  FAQ,
  PageIntro,
  TextLink,
} from "../components/ui";
import { repository } from "../content/site";

export default function GetStarted() {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const command = "git clone https://github.com/ShekhawatPriya/MyMind.git";
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setCopyError(false);
    } catch {
      setCopyError(true);
    }
  };
  return (
    <>
      <PageIntro
        eyebrow="A SMALL BEGINNING"
        title={
          <>
            Make room for
            <br />
            <em>your first memory.</em>
          </>
        }
        description="Start with one good thing. Your library can grow from there."
      />
      <section className="wrap start-card">
        <img
          src="/images/rillmark-icon.png"
          alt="Rillmark app icon"
          width="96"
          height="96"
        />
        <div>
          <span className="eyebrow">RILLMARK FOR IPHONE & IPAD</span>
          <h2>
            A personal app,
            <br />
            <em>made your own.</em>
          </h2>
          <p>
            Rillmark is currently available as a personal build from source. You
            will need access to the project on GitHub and a Mac with Xcode. An
            App Store or TestFlight download is not offered here.
          </p>
          <ButtonLink to={repository} external>
            Open the app project
          </ButtonLink>
          <span className="source-access">
            GitHub repository access required
          </span>
        </div>
      </section>
      <section className="section wrap setup-layout">
        <aside>
          <Eyebrow>BEFORE YOU BEGIN</Eyebrow>
          <h2>
            A few things
            <br />
            <em>to have ready.</em>
          </h2>
          <div className="requirements">
            <span>
              <Laptop size={19} />A compatible Mac with Xcode
            </span>
            <span>
              <Smartphone size={19} />
              iPhone or iPad with iOS 26+
            </span>
            <span>
              <Github size={19} />
              Access to the source project
            </span>
          </div>
          <p className="small-copy">
            The checked-in project targets iOS 26+ and documents Xcode 26.6 or
            newer. Consult the source README for current toolchain requirements.
          </p>
        </aside>
        <div className="setup-steps">
          <article>
            <span>01</span>
            <div>
              <h3>Bring the project home.</h3>
              <p>
                Clone the repository, or download it from GitHub. The Xcode
                project is already included.
              </p>
              <div className="code-copy">
                <code tabIndex={0}>{command}</code>
                <button
                  className="icon-button"
                  aria-label={copied ? "Command copied" : "Copy clone command"}
                  onClick={copy}
                >
                  {copied ? <Check size={17} /> : <Copy size={17} />}
                </button>
              </div>
              <span className="copy-status" role="status">
                {copyError
                  ? "Select and copy the command above."
                  : copied
                    ? "Copied to clipboard."
                    : ""}
              </span>
              <p>
                Open <code>Rillmark.xcodeproj</code>.
              </p>
            </div>
          </article>
          <article>
            <span>02</span>
            <div>
              <h3>Make the signing yours.</h3>
              <p>
                Copy <code>Config/Local.xcconfig.example</code> to{" "}
                <code>Config/Local.xcconfig</code>. Select your development team
                for both the app and Share extension.
              </p>
              <p>
                Use unique bundle identifiers and the same App Group identifier
                for both targets. Follow the project README for the exact setup.
              </p>
            </div>
          </article>
          <article>
            <span>03</span>
            <div>
              <h3>Give it a place on your device.</h3>
              <p>
                Select the Rillmark scheme and an iPhone Simulator or connected
                device, then Run. Follow Xcode’s signing and device prompts.
              </p>
              <p>
                Development installs need periodic re-signing. Install over the
                existing app to preserve its library, and keep a deliberate
                export.
              </p>
            </div>
          </article>
          <article>
            <span>04</span>
            <div>
              <h3>Start with something you love.</h3>
              <p>
                Choose Start my library for an empty beginning, or Take a look
                around to explicitly add sample memories. AI is disabled until
                you decide otherwise.
              </p>
              <TextLink to="/guide/saving">Save your first memory</TextLink>
            </div>
          </article>
        </div>
      </section>
      <section id="first-five-minutes" className="first-minutes">
        <div className="wrap">
          <Eyebrow>YOUR FIRST FIVE MINUTES</Eyebrow>
          <h2>
            One save.
            <br />
            <em>A few lovely possibilities.</em>
          </h2>
          <div className="first-minutes-grid">
            {[
              {
                title: "Keep it.",
                text: "Share a link from Safari or a photo from Photos. Choose Rillmark and Save.",
                to: "saving",
              },
              {
                title: "Find it.",
                text: "Open the app. Try a word from the title or text inside your image.",
                to: "search",
              },
              {
                title: "Make it yours.",
                text: "Favorite it, add a note, or start a Space. Export a copy when you are ready.",
                to: "your-library",
              },
            ].map((item, i) => (
              <Link key={item.to} to={"/guide/" + item.to}>
                <span>0{i + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <ArrowRight size={18} />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section wrap faq-section">
        <div>
          <Eyebrow>A HELPING HAND</Eyebrow>
          <h2>
            Before you
            <br />
            <em>settle in.</em>
          </h2>
        </div>
        <FAQ
          items={[
            {
              q: "Does this website install the app?",
              a: "No. It explains the app and its setup. Installation happens in Xcode from the native app project.",
            },
            {
              q: "Why does GitHub show a missing page?",
              a: "The source project currently requires repository access. Sign in with an account that has access. The website does not grant repository access or provide an alternative app download.",
            },
            {
              q: "Can I use Rillmark without provider keys?",
              a: "Yes. Capture, browsing, local search, OCR, Spaces, and rediscovery do not require a provider key. Configure optional AI later if you want it.",
            },
            {
              q: "Where can I get help with signing?",
              a: "Use the source README for the project-specific targets and App Group settings, and Apple’s current Xcode guidance for account and device requirements.",
            },
          ]}
        />
      </section>
    </>
  );
}

export function NotFound() {
  return (
    <section className="not-found wrap">
      <Eyebrow>A THOUGHT GONE WANDERING · 404</Eyebrow>
      <h1>
        This one has
        <br />
        <em>slipped away.</em>
      </h1>
      <p>
        The page you are looking for is not here. There is still plenty worth
        finding.
      </p>
      <div className="button-row">
        <ButtonLink to="/">Back to Rillmark</ButtonLink>
        <TextLink to="/guide">Explore the guide</TextLink>
      </div>
      <Art name="room-for-curiosity" />
    </section>
  );
}
