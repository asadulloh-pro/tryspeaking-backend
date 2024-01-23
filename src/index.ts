import express from "express";
import modules from "./modules";
import path from "path";

const app = express();
const port = 3000;

app.use(express.static(path.join("public")));
app.use(modules);

app.listen(port, () => {
  /* eslint-disable no-console */
  console.info("\x1b[34m%s\x1b[0m", `Server is running at: 👇`);
  console.info("\x1b[33m%s\x1b[0m", `http://localhost:${port}`);
});
