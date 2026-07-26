const express = require("express");
const { readDB, writeDB } = require("../db");
const { requireAuth } = require("../middleware/auth");

const router = express.Router();

function publicUser(user) {
  const { passwordHash, email, ...rest } = user;
  return rest;
}

// GET /api/freelancers?type=Game+Developer&city=Cebu+City&q=unity&sort=newest
router.get("/", (req, res) => {
  const db = readDB();
  const { type, city, q, sort } = req.query;

  let results = db.users.slice();

  if (type) {
    results = results.filter((u) => u.developerTypes.includes(type));
  }
  if (city) {
    results = results.filter(
      (u) => u.city.toLowerCase() === String(city).toLowerCase()
    );
  }
  if (q) {
    const needle = String(q).toLowerCase();
    results = results.filter((u) => {
      const haystack = [
        u.fullName,
        u.bio,
        ...(u.skills || []),
        ...(u.developerTypes || []),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(needle);
    });
  }

  if (sort === "rate_asc") {
    results.sort((a, b) => (a.hourlyRateMin || 0) - (b.hourlyRateMin || 0));
  } else if (sort === "rate_desc") {
    results.sort((a, b) => (b.hourlyRateMax || 0) - (a.hourlyRateMax || 0));
  } else {
    // newest first by default
    results.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  res.json({
    count: results.length,
    freelancers: results.map(publicUser),
  });
});

// GET /api/freelancers/meta - distinct cities & types for filter dropdowns
router.get("/meta", (req, res) => {
  const db = readDB();
  const cities = [...new Set(db.users.map((u) => u.city).filter(Boolean))].sort();
  const types = [
    "Game Developer",
    "Web Developer",
    "Mobile Developer",
  ];
  res.json({ cities, types });
});

// GET /api/freelancers/me - the logged-in freelancer's own full profile
router.get("/me", requireAuth, (req, res) => {
  const db = readDB();
  const user = db.users.find((u) => u.id === req.userId);
  if (!user) return res.status(404).json({ error: "User not found." });
  const { passwordHash, ...rest } = user;
  res.json({ user: rest });
});

// PUT /api/freelancers/me - update own profile
router.put("/me", requireAuth, (req, res) => {
  const db = readDB();
  const idx = db.users.findIndex((u) => u.id === req.userId);
  if (idx === -1) return res.status(404).json({ error: "User not found." });

  const allowedFields = [
    "fullName",
    "developerTypes",
    "skills",
    "bio",
    "city",
    "experienceLevel",
    "hourlyRateMin",
    "hourlyRateMax",
    "portfolioUrl",
    "githubUrl",
  ];

  const updates = {};
  for (const field of allowedFields) {
    if (field in req.body) updates[field] = req.body[field];
  }

  db.users[idx] = { ...db.users[idx], ...updates };
  writeDB(db);

  const { passwordHash, ...rest } = db.users[idx];
  res.json({ user: rest });
});

// GET /api/freelancers/:id - public profile detail
// Kept below /me and /meta so those literal paths take priority.
router.get("/:id", (req, res) => {
  const db = readDB();
  const user = db.users.find((u) => u.id === Number(req.params.id));
  if (!user) return res.status(404).json({ error: "Freelancer not found." });
  res.json({ user: publicUser(user) });
});

module.exports = router;
