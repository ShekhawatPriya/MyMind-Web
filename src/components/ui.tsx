import { ArrowRight, ArrowUpRight, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";

export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <Link
      to="/"
      className={"brand" + (footer ? " brand-footer" : "")}
      aria-label="Rillmark home"
    >
      <img src="/images/rillmark-icon.png" alt="" width="40" height="40" />
      <span>
        Rillmark<span className="brand-caption">A CURIOUS MIND, AT HOME</span>
      </span>
    </Link>
  );
}
export function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p className={"eyebrow" + (light ? " light" : "")}>
      <span className="eyebrow-line" />
      {children}
    </p>
  );
}
export function ButtonLink({
  to,
  children,
  secondary = false,
  external = false,
}: {
  to: string;
  children: ReactNode;
  secondary?: boolean;
  external?: boolean;
}) {
  const className = "button" + (secondary ? " button-secondary" : "");
  return external ? (
    <a className={className} href={to} target="_blank" rel="noreferrer">
      {children}
      <ArrowUpRight size={17} aria-hidden="true" />
    </a>
  ) : (
    <Link className={className} to={to}>
      {children}
      <ArrowRight size={17} aria-hidden="true" />
    </Link>
  );
}
export function TextLink({
  to,
  children,
}: {
  to: string;
  children: ReactNode;
}) {
  return (
    <Link className="text-link" to={to}>
      {children}
      <ArrowUpRight size={17} aria-hidden="true" />
    </Link>
  );
}
export function Art({
  name,
  alt = "",
  className = "",
  eager = false,
}: {
  name: string;
  alt?: string;
  className?: string;
  eager?: boolean;
}) {
  return (
    <img
      className={className}
      src={`/images/${name}.webp`}
      srcSet={`/images/${name}-768.webp 768w, /images/${name}.webp 1536w`}
      sizes="(max-width: 760px) 100vw, 60vw"
      alt={alt}
      width="1536"
      height="1024"
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
      decoding="async"
    />
  );
}
export function PageIntro({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-intro wrap">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1>{title}</h1>
      <p className="lead">{description}</p>
      {children}
    </section>
  );
}
export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="faq-list">
      {items.map((item) => (
        <details key={item.q}>
          <summary>
            {item.q}
            <Plus size={18} aria-hidden="true" />
          </summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  );
}
export function Closing() {
  return (
    <section className="closing wrap">
      <p className="eyebrow">YOUR NEXT GOOD FIND STARTS HERE</p>
      <h2>
        Keep what <em>stays with you.</em>
      </h2>
      <p>
        A thought, an image, a little spark. Give it a place to come back to.
      </p>
      <ButtonLink to="/get-started">Make it yours</ButtonLink>
      <span className="closing-note">For iPhone & iPad · Personal build</span>
    </section>
  );
}
