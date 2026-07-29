import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TerminalHero from "../components/TerminalHero";

gsap.registerPlugin(ScrollTrigger);

const CATEGORIES = [
  {
    name: "Game development",
    slug: "Game+Developer",
    accent: "game",
    description: "Gameplay systems, multiplayer, mobile titles, and PC builds.",
    stack: ["Unity", "Unreal", "Godot", "C#"],
  },
  {
    name: "Web development",
    slug: "Web+Developer",
    accent: "web",
    description: "Products, dashboards, storefronts, and internal tools that ship.",
    stack: ["React", "Node.js", "Laravel", "Next.js"],
  },
  {
    name: "Mobile development",
    slug: "Mobile+Developer",
    accent: "mobile",
    description: "Native and cross-platform apps for the next generation of users.",
    stack: ["Flutter", "Swift", "Kotlin", "React Native"],
  },
];

const STEPS = [
  {
    number: "01",
    title: "Create your profile",
    text: "Share your stack, rate range, city, and the kind of work you do best.",
  },
  {
    number: "02",
    title: "Search with intent",
    text: "Filter the directory by developer type, skills, and location across the Philippines.",
  },
  {
    number: "03",
    title: "Connect directly",
    text: "Reach the right developer through their public profile and portfolio links.",
  },
];

const STACKS = [
  "React",
  "Unity",
  "Flutter",
  "Node.js",
  "Laravel",
  "Swift",
  "Unreal Engine",
  "Kotlin",
  "Godot",
  "Next.js",
];

export default function Landing() {
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const context = gsap.context(() => {
      gsap.from(".landing-hero-copy > *", {
        opacity: 0,
        y: 28,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
      });

      gsap.from(".landing-hero-art", {
        opacity: 0,
        scale: 0.92,
        duration: 1.1,
        delay: 0.18,
        ease: "power3.out",
      });

      gsap.utils.toArray(".landing-reveal-line").forEach((line) => {
        gsap.fromTo(
          line,
          { scaleX: 0, transformOrigin: "left center" },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: line,
              start: "top 84%",
              end: "top 42%",
              scrub: true,
            },
          },
        );
      });

      if (window.innerWidth > 860) {
        ScrollTrigger.create({
          trigger: ".landing-process",
          start: "top 120px",
          end: "bottom 70%",
          pin: ".landing-process-heading",
          pinSpacing: false,
        });
      }
    }, pageRef);

    return () => context.revert();
  }, []);

  return (
    <div className="landing-page" ref={pageRef}>
      <section className="landing-section landing-hero">
        <div className="container landing-hero-grid">
          <div className="landing-hero-copy">
            <p className="landing-kicker">A focused directory for Filipino developers</p>
            <h1>
              Find the people who <em>build what&apos;s next.</em>
            </h1>
            <p className="landing-hero-lede">
              Indevmand connects clients with game, web, and mobile developers based in the
              Philippines. Search by the stack, city, and experience you actually need.
            </p>
            <div className="landing-hero-actions">
              <Link to="/browse" className="btn btn-primary">
                Browse developers <span aria-hidden="true">↗</span>
              </Link>
              <Link to="/signup" className="btn btn-outline">
                Create a profile
              </Link>
            </div>
            <div className="landing-proof-row">
              <span className="landing-proof-marker" aria-hidden="true" />
              <span>Game / web / mobile</span>
              <span>Philippines only</span>
            </div>
          </div>

          <div className="landing-hero-art">
            <div className="landing-art-grid" aria-hidden="true" />
            <div className="landing-terminal">
              <TerminalHero />
            </div>
            <p className="landing-art-caption">
              <span className="landing-art-status" aria-hidden="true" />
              Search by real stack and city
            </p>
          </div>
        </div>
      </section>

      <section className="landing-section landing-category-section">
        <div className="container">
          <div className="landing-section-heading">
            <div>
              <p className="landing-kicker">Built around how developers work</p>
              <h2>One directory. Three disciplines.</h2>
            </div>
            <p>
              Less noise means better matches. Explore specialists by the tools and platforms
              they know best.
            </p>
          </div>

          <div className="landing-category-grid">
            {CATEGORIES.map((category) => (
              <article className={`landing-category-card landing-category-card--${category.accent}`} key={category.name}>
                <div className="landing-category-topline">
                  <span className="landing-accent-dot" aria-hidden="true" />
                  <span>{category.accent}</span>
                </div>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <div className="landing-stack-tags">
                  {category.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <Link to={`/browse?type=${category.slug}`} className="landing-text-link">
                  Explore {category.accent} developers <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="landing-section landing-process">
        <div className="container landing-process-grid">
          <div className="landing-process-heading">
            <p className="landing-kicker">Make the next move clear</p>
            <h2>From first search to the right conversation.</h2>
            <p>
              No bidding wars. No opaque ranking. Just a clear path from a useful profile to a
              direct connection.
            </p>
          </div>
          <div className="landing-steps">
            {STEPS.map((step, index) => (
              <article className="landing-step" key={step.number}>
                <span className="landing-step-number">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
                {index < STEPS.length - 1 && <span className="landing-step-arrow" aria-hidden="true">↓</span>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="landing-section landing-stack-section">
        <div className="container">
          <div className="landing-section-heading landing-section-heading--stack">
            <div>
              <p className="landing-kicker">Search the language of the work</p>
              <h2>Your stack is the starting point.</h2>
            </div>
            <p>
              From emerging tools to proven frameworks, browse people who already speak your
              technical language.
            </p>
          </div>
          <div className="landing-reveal-line" aria-hidden="true" />
          <div className="landing-stack-marquee" aria-label="Popular technologies">
            <div className="landing-stack-track">
              {[...STACKS, ...STACKS].map((stack, index) => (
                <span key={`${stack}-${index}`}>{stack}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="landing-section landing-difference-section">
        <div className="container landing-difference-grid">
          <div>
            <p className="landing-kicker">A better signal</p>
            <h2>Good work should be easier to find.</h2>
          </div>
          <div className="landing-difference-copy">
            <p>
              Indevmand keeps the directory intentionally narrow: Filipino developers, clear
              disciplines, direct contact. That gives clients a better signal and gives
              developers a profile that can stay visible without bidding for attention.
            </p>
            <div className="landing-difference-list">
              <span>Local by default</span>
              <span>Searchable by stack</span>
              <span>Direct by design</span>
            </div>
            <Link to="/browse" className="landing-text-link">
              See the full directory <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="landing-section landing-cta-section">
        <div className="container landing-cta">
          <p className="landing-kicker">The next project starts here</p>
          <h2>Ready to be found?</h2>
          <p>Set up a profile in a few minutes and make your work easier to discover.</p>
          <Link to="/signup" className="btn btn-primary">
            Create your developer profile <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
