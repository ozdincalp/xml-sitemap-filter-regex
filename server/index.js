const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const Sitemapper = require("sitemapper");

const PORT = process.env.PORT || 3001;
const app = express();
const sitemap = new Sitemapper();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});
app.post("/api", (req, res) => {
  sitemap.fetch(req.body.url).then((urls) => res.json({ sites: urls.sites }));
});

app.listen(PORT, () => {});
