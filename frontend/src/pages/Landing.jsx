import { Link } from "react-router-dom";
import TerminalHero from "../components/TerminalHero";
import Reveal from "../components/Reveal";

const GAME_STACKS = ["Unity", "Unreal Engine", "Godot", "Phaser", "C#", "C++", "Lua"];
const WEB_STACKS = ["React", "Node.js", "Laravel", "Vue", "Next.js", "Express", "PHP"];
const MOBILE_STACKS = ["Flutter", "Swift", "Kotlin", "React Native", "Dart", "Java", "Xcode"];

export default function Landing() {
  return (
    <>
      <section className="section section-dark" style={{ paddingTop: 72 }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 1fr",
              gap: 56,
              alignItems: "center",
            }}
          >
            <div>
              <div className="eyebrow" style={{ color: "var(--mango)" }}>
                built for Filipino developers
              </div>
              <h1 style={{ fontSize: 46, color: "var(--paper-raised)", lineHeight: 1.12, marginBottom: 20 }}>
                Clients search by stack.
                <br />
                You show up as the match.
              </h1>
              <p style={{ fontSize: 17, color: "var(--text-on-ink-dim)", maxWidth: 480, marginBottom: 32 }}>
                Indevmand is a freelance platform built only for game, web, and mobile
                developers based in the Philippines — no design gigs, no copywriting,
                no noise. Just developers and the clients looking for them.
              </p>
              <div style={{ display: "flex", gap: 14 }}>
                <Link to="/browse" className="btn btn-primary">
                  Browse developers
                </Link>
                <Link to="/signup" className="btn btn-secondary">
                  Join as a developer
                </Link>
              </div>
            </div>
            <TerminalHero />
          </div>
        </div>
      </section>

      <section className="section section-dark" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="categories-grid">
            <Reveal delay={0}>
              <div className="category-card category-card--game">
                <div className="kicker">01 · game-dev</div>
                <h3>Game Developers</h3>
                <p>Unity, Unreal, Godot — mobile titles, PC builds, and gameplay systems.</p>
                <Link to="/browse?type=Game+Developer" className="btn btn-secondary">
                  View game devs
                </Link>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="category-card category-card--web">
                <div className="kicker">02 · web-dev</div>
                <h3>Web Developers</h3>
                <p>React, Laravel, Node — dashboards, storefronts, and internal tools.</p>
                <Link to="/browse?type=Web+Developer" className="btn btn-secondary">
                  View web devs
                </Link>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <div className="category-card category-card--mobile">
                <div className="kicker">03 · mobile-dev</div>
                <h3>Mobile Developers</h3>
                <p>Flutter, Swift, Kotlin — native and cross-platform app builds.</p>
                <Link to="/browse?type=Mobile+Developer" className="btn btn-secondary">
                  View mobile devs
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <Reveal>
            <div className="section-heading">
              <div className="eyebrow">how it works</div>
              <h2>Two sides, one directory.</h2>
              <p>No bidding wars, no algorithm burying your profile. Just a clean, searchable list.</p>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            <Reveal delay={0}>
              <div className="card" style={{ height: "100%" }}>
                <div className="step-num">01</div>
                <div className="eyebrow">for developers</div>
                <h3 style={{ fontSize: 19, marginBottom: 8 }}>Create your profile</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: 14 }}>
                  List your stack, your rate range, and your city. Takes about three minutes.
                </p>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="card" style={{ height: "100%" }}>
                <div className="step-num">02</div>
                <div className="eyebrow">for clients</div>
                <h3 style={{ fontSize: 19, marginBottom: 8 }}>Search by stack and city</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: 14 }}>
                  Filter by developer type, skills, and location across the Philippines.
                </p>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <div className="card" style={{ height: "100%" }}>
                <div className="step-num">03</div>
                <div className="eyebrow">for everyone</div>
                <h3 style={{ fontSize: 19, marginBottom: 8 }}>Connect directly</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: 14 }}>
                  Reach out through the contact links on a developer's public profile.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <Reveal>
            <div className="section-heading">
              <div className="eyebrow" style={{ color: "var(--mango)" }}>stack coverage</div>
              <h2 style={{ color: "var(--paper-raised)" }}>Every discipline, one search away.</h2>
              <p>Clients filter by what they need. Developers list what they know. No mismatch.</p>
            </div>
          </Reveal>
          <div className="stack-grid">
            <Reveal delay={0}>
              <div className="stack-column">
                <h3 style={{ color: "var(--paper-raised)" }}>
                  <span className="dot" style={{ background: "var(--mango)" }} />
                  Game Development
                </h3>
                <ul className="stack-list">
                  {GAME_STACKS.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="stack-column">
                <h3 style={{ color: "var(--paper-raised)" }}>
                  <span className="dot" style={{ background: "var(--teal)" }} />
                  Web Development
                </h3>
                <ul className="stack-list">
                  {WEB_STACKS.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <div className="stack-column">
                <h3 style={{ color: "var(--paper-raised)" }}>
                  <span className="dot" style={{ background: "var(--moss)" }} />
                  Mobile Development
                </h3>
                <ul className="stack-list">
                  {MOBILE_STACKS.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-heading">
              <div className="eyebrow">why this exists</div>
              <h2>No algorithms. No auctions.</h2>
              <p>Indevmand works differently from the platforms you're used to.</p>
            </div>
          </Reveal>
          <div className="comparison-grid">
            <Reveal delay={0}>
              <div className="comparison-col">
                <h3>Indevmand</h3>
                <ul className="comparison-list">
                  <li>
                    <span className="marker marker--yes">+</span>
                    <span>Philippines-only developers — every profile is local</span>
                  </li>
                  <li>
                    <span className="marker marker--yes">+</span>
                    <span>Filter by game, web, or mobile — no unrelated noise</span>
                  </li>
                  <li>
                    <span className="marker marker--yes">+</span>
                    <span>Direct contact through profile links — no middleman</span>
                  </li>
                  <li>
                    <span className="marker marker--yes">+</span>
                    <span>Free to list, free to browse — no commissions</span>
                  </li>
                  <li>
                    <span className="marker marker--yes">+</span>
                    <span>Your profile stays visible — no bidding to stay relevant</span>
                  </li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="comparison-col comparison-col--other">
                <h3 style={{ color: "var(--text-secondary)" }}>Generic platforms</h3>
                <ul className="comparison-list">
                  <li>
                    <span className="marker marker--no">-</span>
                    <span>Global pool — hard to find local talent</span>
                  </li>
                  <li>
                    <span className="marker marker--no">-</span>
                    <span>Every category mixed together — designers, writers, devs</span>
                  </li>
                  <li>
                    <span className="marker marker--no">-</span>
                    <span>Communication gated behind platform messaging</span>
                  </li>
                  <li>
                    <span className="marker marker--no">-</span>
                    <span>Service fees on both sides — 10-20% cuts</span>
                  </li>
                  <li>
                    <span className="marker marker--no">-</span>
                    <span>Bid on every project or disappear from search</span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container" style={{ textAlign: "center" }}>
          <Reveal>
            <div className="eyebrow" style={{ justifyContent: "center", color: "var(--mango)" }}>get started</div>
            <h2 style={{ fontSize: 34, color: "var(--paper-raised)", marginBottom: 14 }}>Ready to be found?</h2>
            <p style={{ color: "var(--text-on-ink-dim)", marginBottom: 32, fontSize: 17 }}>
              Set up your developer profile in a few minutes.
            </p>
            <Link to="/signup" className="btn btn-primary">
              Create your profile
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
