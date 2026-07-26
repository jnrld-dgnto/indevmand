import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../api";

const BADGE_CLASS = {
  "Game Developer": "badge-game",
  "Web Developer": "badge-web",
  "Mobile Developer": "badge-mobile",
};

function initials(name) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function ProfileDetail() {
  const { id } = useParams();
  const [freelancer, setFreelancer] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    setError("");
    setFreelancer(null);
    api
      .getFreelancer(id)
      .then((data) => setFreelancer(data.user))
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) {
    return (
      <div className="container section">
        <div className="empty-state">
          <div className="eyebrow">not found</div>
          <h3>{error}</h3>
          <Link to="/browse" className="btn btn-outline" style={{ marginTop: 16 }}>
            Back to browse
          </Link>
        </div>
      </div>
    );
  }

  if (!freelancer) {
    return (
      <div className="container section">
        <p style={{ color: "var(--text-secondary)" }}>Loading profile…</p>
      </div>
    );
  }

  const rate =
    freelancer.hourlyRateMin || freelancer.hourlyRateMax
      ? `\u20b1${freelancer.hourlyRateMin || "—"}\u2013${freelancer.hourlyRateMax || "—"} / hr`
      : "Rate on request";

  return (
    <div className="container section" style={{ paddingTop: 48 }}>
      <Link to="/browse" className="eyebrow" style={{ marginBottom: 24 }}>
        back to browse
      </Link>

      <div className="profile-header">
        <div className="avatar avatar-lg" style={{ background: freelancer.avatarColor || "#F4A93B" }}>
          {initials(freelancer.fullName)}
        </div>
        <div>
          <h1 style={{ fontSize: 28, marginBottom: 6 }}>{freelancer.fullName}</h1>
          <div style={{ color: "var(--text-secondary)", marginBottom: 10 }}>
            {freelancer.city || "Philippines"} · {freelancer.experienceLevel}
          </div>
          <div className="freelancer-badges">
            {freelancer.developerTypes.map((t) => (
              <span key={t} className={`badge ${BADGE_CLASS[t] || ""}`}>
                {t}
              </span>
            ))}
          </div>
          <div className="profile-links">
            {freelancer.portfolioUrl && (
              <a
                href={freelancer.portfolioUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                Portfolio
              </a>
            )}
            {freelancer.githubUrl && (
              <a
                href={freelancer.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="profile-grid">
        <div>
          <h3 style={{ fontSize: 18, marginBottom: 12 }}>About</h3>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 28 }}>
            {freelancer.bio || "This developer hasn't added a bio yet."}
          </p>

          <h3 style={{ fontSize: 18, marginBottom: 12 }}>Skills</h3>
          <div className="freelancer-tags">
            {(freelancer.skills || []).map((s) => (
              <span key={s} className="tag">
                {s}
              </span>
            ))}
            {(!freelancer.skills || freelancer.skills.length === 0) && (
              <span style={{ color: "var(--text-secondary)", fontSize: 14 }}>
                No skills listed yet.
              </span>
            )}
          </div>
        </div>

        <div className="card">
          <div className="profile-stat">
            <span>Rate</span>
            <span>{rate}</span>
          </div>
          <div className="profile-stat">
            <span>Experience</span>
            <span>{freelancer.experienceLevel}</span>
          </div>
          <div className="profile-stat">
            <span>Location</span>
            <span>{freelancer.city || "—"}</span>
          </div>
          <div className="profile-stat" style={{ borderBottom: "none" }}>
            <span>Member since</span>
            <span>
              {new Date(freelancer.createdAt).toLocaleDateString("en-PH", {
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
