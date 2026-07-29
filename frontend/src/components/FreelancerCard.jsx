import { Link } from "react-router-dom";

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

function formatRate(min, max) {
  if (!min && !max) return "Rate on request";
  if (min && max) return `\u20b1${min}\u2013${max}/hr`;
  return `\u20b1${min || max}/hr`;
}

export default function FreelancerCard({ freelancer }) {
  return (
    <Link to={`/developers/${freelancer.id}`} className="card freelancer-card">
      <div className="freelancer-card-top">
        <div className="avatar" style={{ background: freelancer.avatarColor || "var(--mango)" }}>
          {initials(freelancer.fullName)}
        </div>
        <div>
          <div className="freelancer-name">{freelancer.fullName}</div>
          <div className="freelancer-city">{freelancer.city || "Philippines"}</div>
        </div>
      </div>

      <div className="freelancer-badges">
        {freelancer.developerTypes.map((t) => (
          <span key={t} className={`badge ${BADGE_CLASS[t] || ""}`}>
            {t}
          </span>
        ))}
      </div>

      <p className="freelancer-bio">{freelancer.bio || "No bio yet."}</p>

      <div className="freelancer-tags">
        {(freelancer.skills || []).slice(0, 4).map((s) => (
          <span key={s} className="tag">
            {s}
          </span>
        ))}
      </div>

      <div className="freelancer-footer">
        <span>{freelancer.experienceLevel}</span>
        <span>{formatRate(freelancer.hourlyRateMin, freelancer.hourlyRateMax)}</span>
      </div>
    </Link>
  );
}
