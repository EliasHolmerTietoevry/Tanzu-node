const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");

const distDir = path.join(__dirname, "/frontend/dist/frontend/");

console.log({ dirname: __dirname }, { distDir: distDir });

app.use(express.static(distDir));

app.get("/health", (req, res) => {
  res.sendStatus(200);
});

app.get("/test", (req, res) => {
  res.send("Hello from the server!");
});

app.get("/app", (req, res) => {
  console.log(window.location.pathname);
  console.log("Serving file at: ", path.join(distDir, "index.html"));
  res.sendFile(path.join(distDir, "index.html"));
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
