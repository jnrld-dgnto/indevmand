import { Link } from "react-router-dom";
import TerminalHero from "../components/TerminalHero";

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
            <div className="category-card">
              <div className="kicker">01 · game-dev</div>
              <h3>Game Developers</h3>
              <p>Unity, Unreal, Godot — mobile titles, PC builds, and gameplay systems.</p>
              <Link to="/browse?type=Game+Developer" className="btn btn-secondary">
                View game devs
              </Link>
            </div>
            <div className="category-card">
              <div className="kicker">02 · web-dev</div>
              <h3>Web Developers</h3>
              <p>React, Laravel, Node — dashboards, storefronts, and internal tools.</p>
              <Link to="/browse?type=Web+Developer" className="btn btn-secondary">
                View web devs
              </Link>
            </div>
            <div className="category-card">
              <div className="kicker">03 · mobile-dev</div>
              <h3>Mobile Developers</h3>
              <p>Flutter, Swift, Kotlin — native and cross-platform app builds.</p>
              <Link to="/browse?type=Mobile+Developer" className="btn btn-secondary">
                View mobile devs
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">how it works</div>
            <h2>Two sides, one directory.</h2>
            <p>No bidding wars, no algorithm burying your profile. Just a clean, searchable list.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            <div className="card">
              <div className="eyebrow">for developers</div>
              <h3 style={{ fontSize: 19, marginBottom: 8 }}>Create your profile</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: 14 }}>
                List your stack, your rate range, and your city. Takes about three minutes.
              </p>
            </div>
            <div className="card">
              <div className="eyebrow">for clients</div>
              <h3 style={{ fontSize: 19, marginBottom: 8 }}>Search by stack and city</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: 14 }}>
                Filter by developer type, skills, and location across the Philippines.
              </p>
            </div>
            <div className="card">
              <div className="eyebrow">for everyone</div>
              <h3 style={{ fontSize: 19, marginBottom: 8 }}>Connect directly</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: 14 }}>
                Reach out through the contact links on a developer's public profile.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: 30, marginBottom: 14 }}>Ready to be found?</h2>
          <p style={{ color: "var(--text-secondary)", marginBottom: 28 }}>
            Set up your developer profile in a few minutes.
          </p>
          <Link to="/signup" className="btn btn-primary">
            Create your profile
          </Link>
        </div>
      </section>
    </>
  );
}
