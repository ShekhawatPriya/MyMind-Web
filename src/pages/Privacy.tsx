import { ArrowDownToLine, KeyRound, LockKeyhole, Wifi } from "lucide-react";
import { Closing, Eyebrow, FAQ, PageIntro, TextLink } from "../components/ui";

export default function Privacy() {
  return (
    <>
      <PageIntro
        eyebrow="PERSONAL, IN THE TRUEST SENSE"
        title={
          <>
            Your mind.
            <br />
            Your space. <em>Your say.</em>
          </>
        }
        description="A personal library should feel like something you own. Rillmark starts with your device and puts the choices in your hands."
      />
      <section className="wrap privacy-statement">
        <LockKeyhole size={36} strokeWidth={1.15} />
        <h2>
          A quiet corner.
          <br />
          <em>Without an audience.</em>
        </h2>
        <p>
          No Rillmark account. No analytics in the native app.
          <br />
          No custom server holding your library.
        </p>
      </section>
      <section className="section wrap privacy-details">
        <div>
          <Eyebrow>THE DETAILS MATTER</Eyebrow>
          <h2>
            Know what stays.
            <br />
            <em>Choose what goes.</em>
          </h2>
          <p>
            Local-first is a starting point. Here is what it means in everyday
            use.
          </p>
        </div>
        <div className="privacy-rows">
          {[
            {
              Icon: LockKeyhole,
              title: "Your library lives here.",
              text: "Originals, thumbnails, metadata, preferences, and the search index stay in the app’s shared container on your device. Search, OCR, Spaces, and rediscovery work locally.",
            },
            {
              Icon: Wifi,
              title: "A link can make a connection.",
              text: "With Fetch link previews enabled, Rillmark contacts saved pages and their preview-image hosts. Turn it off in Settings if you prefer. Private and script-heavy pages can provide limited content.",
            },
            {
              Icon: KeyRound,
              title: "AI waits for your choice.",
              text: "AI starts disabled. When you enable it, available saved text goes to Inception, or supported media and its context go to Google. Keys stay in the device-only Keychain. Provider terms and usage charges apply.",
            },
            {
              Icon: ArrowDownToLine,
              title: "A backup is a deliberate act.",
              text: "There is no automatic sync, and the live library is excluded from automatic cloud/device backup. Export a copy when you want one. The export is unencrypted, so choose its destination with care.",
            },
          ].map(({ Icon, title, text }) => (
            <article key={title}>
              <Icon size={23} strokeWidth={1.4} />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="wrap data-table-section">
        <div className="section-heading">
          <div>
            <Eyebrow>AT A GLANCE</Eyebrow>
            <h2>
              A clear view of <em>your choices.</em>
            </h2>
          </div>
        </div>
        <div
          className="table-wrap"
          tabIndex={0}
          role="region"
          aria-label="Where your data goes"
        >
          <table>
            <thead>
              <tr>
                <th>What happens</th>
                <th>Where it happens</th>
                <th>Your control</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Capture, browsing, and search</td>
                <td>On your device</td>
                <td>Use without a Rillmark account</td>
              </tr>
              <tr>
                <td>Text recognition and local labels</td>
                <td>On your device</td>
                <td>Keep the original; edit tags and context</td>
              </tr>
              <tr>
                <td>Public link previews</td>
                <td>Saved websites and image hosts</td>
                <td>Fetch link previews setting</td>
              </tr>
              <tr>
                <td>Optional AI enrichment</td>
                <td>Your configured provider</td>
                <td>Keys, enable switch, media setting</td>
              </tr>
              <tr>
                <td>Library export</td>
                <td>A destination you choose</td>
                <td>Explicit export and import</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="section wrap faq-section">
        <div>
          <Eyebrow>HONEST BY DESIGN</Eyebrow>
          <h2>
            A few important
            <br />
            <em>distinctions.</em>
          </h2>
          <TextLink to="/guide/backups">Care for your library</TextLink>
        </div>
        <FAQ
          items={[
            {
              q: "Is Rillmark an encrypted vault?",
              a: "Rillmark uses iOS file protection. It is not a separately encrypted, password-protected vault. Exported packages are unencrypted.",
            },
            {
              q: "What happens if I lose the device?",
              a: "Without an exported copy, the library may be lost with the device. Rillmark deliberately excludes its live library from automatic backup. Keep deliberate exports somewhere you control.",
            },
            {
              q: "Will AI see all my original media?",
              a: "Only when you choose enrichment and supported media is included. Images are resized without original metadata. Larger videos use five sampled frames; scanned PDFs use up to five pages. See the optional-AI guide for coverage details.",
            },
            {
              q: "What does this website collect?",
              a: "This website has no analytics scripts, tracking cookies, accounts, or submission forms. Sample searches and favorites run in memory in your browser and reset on reload. A hosting provider may process ordinary request logs. External links open other services with their own practices.",
            },
          ]}
        />
      </section>
      <Closing />
    </>
  );
}
