import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api";
import { useAuth } from "../AuthContext";
import { PH_CITIES, DEVELOPER_TYPES, EXPERIENCE_LEVELS } from "../phCities";

const emptyForm = {
  fullName: "",
  developerTypes: [],
  skills: "",
  bio: "",
  city: "",
  experienceLevel: "Junior",
  hourlyRateMin: "",
  hourlyRateMax: "",
  portfolioUrl: "",
  githubUrl: "",
};

export default function Dashboard() {
  const { token, updateUser } = useAuth();
  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    api
      .getMyProfile(token)
      .then((data) => {
        const u = data.user;
        setForm({
          fullName: u.fullName || "",
          developerTypes: u.developerTypes || [],
          skills: (u.skills || []).join(", "),
          bio: u.bio || "",
          city: u.city || "",
          experienceLevel: u.experienceLevel || "Junior",
          hourlyRateMin: u.hourlyRateMin ?? "",
          hourlyRateMax: u.hourlyRateMax ?? "",
          portfolioUrl: u.portfolioUrl || "",
          githubUrl: u.githubUrl || "",
        });
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [token]);

  function toggleType(type) {
    setForm((f) => ({
      ...f,
      developerTypes: f.developerTypes.includes(type)
        ? f.developerTypes.filter((t) => t !== type)
        : [...f.developerTypes, type],
    }));
  }

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSuccess("");
    setSaving(true);
    try {
      const payload = {
        fullName: form.fullName,
        developerTypes: form.developerTypes,
        skills: form.skills
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
        bio: form.bio,
        city: form.city,
        experienceLevel: form.experienceLevel,
        hourlyRateMin: form.hourlyRateMin ? Number(form.hourlyRateMin) : null,
        hourlyRateMax: form.hourlyRateMax ? Number(form.hourlyRateMax) : null,
        portfolioUrl: form.portfolioUrl,
        githubUrl: form.githubUrl,
      };
      const data = await api.updateMyProfile(token, payload);
      updateUser(data.user);
      setSuccess("Profile saved.");
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="container section">
        <p style={{ color: "var(--text-secondary)" }}>Loading your profile…</p>
      </div>
    );
  }

  return (
    <div className="container section" style={{ paddingTop: 48, maxWidth: 720 }}>
      <div className="section-heading">
        <div className="eyebrow">your profile</div>
        <h2>Edit your listing</h2>
        <p>This is what clients see when they browse or search for developers.</p>
      </div>

      {error && <div className="form-error">{error}</div>}
      {success && <div className="form-success">{success}</div>}

      <form onSubmit={handleSubmit} className="card">
        <div className="form-field">
          <label htmlFor="fullName">Full name</label>
          <input
            id="fullName"
            type="text"
            value={form.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            required
          />
        </div>

        <div className="form-field">
          <label>Developer type</label>
          <div className="checkbox-row">
            {DEVELOPER_TYPES.map((t) => (
              <label
                key={t}
                className={`checkbox-pill ${form.developerTypes.includes(t) ? "checked" : ""}`}
              >
                <input
                  type="checkbox"
                  checked={form.developerTypes.includes(t)}
                  onChange={() => toggleType(t)}
                  style={{ display: "none" }}
                />
                {t}
              </label>
            ))}
          </div>
          <div className="form-hint">Select at least one so clients can find you by type.</div>
        </div>

        <div className="form-field">
          <label htmlFor="skills">Skills</label>
          <input
            id="skills"
            type="text"
            value={form.skills}
            onChange={(e) => update("skills", e.target.value)}
            placeholder="Unity, C#, Multiplayer Netcode"
          />
          <div className="form-hint">Comma-separated. Shown as tags on your profile.</div>
        </div>

        <div className="form-field">
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            value={form.bio}
            onChange={(e) => update("bio", e.target.value)}
            placeholder="A couple of sentences about what you build and how you work."
          />
        </div>

        <div className="form-field">
          <label htmlFor="city">City</label>
          <select id="city" value={form.city} onChange={(e) => update("city", e.target.value)}>
            <option value="">Select a city</option>
            {PH_CITIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="experienceLevel">Experience level</label>
          <select
            id="experienceLevel"
            value={form.experienceLevel}
            onChange={(e) => update("experienceLevel", e.target.value)}
          >
            {EXPERIENCE_LEVELS.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </div>

        <div className="form-field">
          <label>Hourly rate range (PHP)</label>
          <div className="rate-row">
            <input
              type="number"
              min="0"
              placeholder="Min"
              value={form.hourlyRateMin}
              onChange={(e) => update("hourlyRateMin", e.target.value)}
            />
            <input
              type="number"
              min="0"
              placeholder="Max"
              value={form.hourlyRateMax}
              onChange={(e) => update("hourlyRateMax", e.target.value)}
            />
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="portfolioUrl">Portfolio URL</label>
          <input
            id="portfolioUrl"
            type="url"
            value={form.portfolioUrl}
            onChange={(e) => update("portfolioUrl", e.target.value)}
            placeholder="https://"
          />
        </div>

        <div className="form-field">
          <label htmlFor="githubUrl">GitHub URL</label>
          <input
            id="githubUrl"
            type="url"
            value={form.githubUrl}
            onChange={(e) => update("githubUrl", e.target.value)}
            placeholder="https://github.com/yourname"
          />
        </div>

        <button className="btn btn-primary" disabled={saving}>
          {saving ? "Saving…" : "Save profile"}
        </button>
      </form>

      <p style={{ marginTop: 16, fontSize: 14 }}>
        <Link to="/browse" style={{ color: "var(--teal-dark)", fontWeight: 600 }}>
          View how developers look in Browse →
        </Link>
      </p>
    </div>
  );
}
