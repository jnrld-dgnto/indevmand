const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { readDB, writeDB, nextId } = require("../db");
const { JWT_SECRET } = require("../middleware/auth");

const router = express.Router();

function publicUser(user) {
  const { passwordHash, ...rest } = user;
  return rest;
}

router.post("/register", (req, res) => {
  const { email, password, fullName } = req.body;

  if (!email || !password || !fullName) {
    return res
      .status(400)
      .json({ error: "Full name, email, and password are required." });
  }
  if (password.length < 8) {
    return res
      .status(400)
      .json({ error: "Password must be at least 8 characters." });
  }

  const db = readDB();
  const normalizedEmail = email.trim().toLowerCase();
  const existing = db.users.find((u) => u.email === normalizedEmail);
  if (existing) {
    return res
      .status(409)
      .json({ error: "An account with this email already exists." });
  }

  const passwordHash = bcrypt.hashSync(password, 10);
  const palette = ["#F4A93B", "#1B7F79", "#4C9A6A"];

  const newUser = {
    id: nextId(db.users),
    email: normalizedEmail,
    passwordHash,
    fullName: fullName.trim(),
    developerTypes: [],
    skills: [],
    bio: "",
    city: "",
    experienceLevel: "Junior",
    hourlyRateMin: null,
    hourlyRateMax: null,
    portfolioUrl: "",
    githubUrl: "",
    avatarColor: palette[db.users.length % palette.length],
    createdAt: new Date().toISOString(),
  };

  db.users.push(newUser);
  writeDB(db);

  const token = jwt.sign({ userId: newUser.id }, JWT_SECRET, {
    expiresIn: "7d",
  });

  res.status(201).json({ token, user: publicUser(newUser) });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required." });
  }

  const db = readDB();
  const normalizedEmail = email.trim().toLowerCase();
  const user = db.users.find((u) => u.email === normalizedEmail);

  if (!user || !bcrypt.compareSync(password, user.passwordHash)) {
    return res.status(401).json({ error: "Invalid email or password." });
  }

  const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "7d" });
  res.json({ token, user: publicUser(user) });
});

module.exports = router;
