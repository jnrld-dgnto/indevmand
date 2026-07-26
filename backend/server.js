const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const freelancerRoutes = require("./routes/freelancers");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "indevmand-backend" });
});

app.use("/api/auth", authRoutes);
app.use("/api/freelancers", freelancerRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Not found." });
});

app.listen(PORT, () => {
  console.log(`Indevmand API listening on http://localhost:${PORT}`);
});
