const express = require("express");
const router = express.Router();
const data = require("../data/mock.json");

router.get("/search", (req, res) => {
  const q = (req.query.q || "").toLowerCase().trim();
  if (!q) return res.json([]);

  const results = data.items.filter(it =>
    it.title.toLowerCase().includes(q) ||
    it.info.toLowerCase().includes(q)
  );

  res.json(results);
});

module.exports = router;
