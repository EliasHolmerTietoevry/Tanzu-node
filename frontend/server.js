import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";

const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const distDir = path.join(__dirname, "/dist/frontend/");

console.log({ dirname: __dirname }, { distDir: distDir });

app.use(express.static(distDir));

app.get("/health", (req, res) => {
  res.sendStatus(200);
});

app.get("/test", (req, res) => {
  res.send("Hello from the server!");
});

app.get("/app", (req, res) => {
  // console.log(window.location.pathname);
  console.log("Serving file at: ", path.join(distDir, "index.html"));
  res.sendFile(path.join(distDir, "index.html"));
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
