// Build dist/: compile src/*.tsx with tsc, then write the CSS files. dist/ is committed, because apps
// install Casso straight from a git tag (no registry, no build step on their side). CI fails if it's stale.
import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";

rmSync("dist", { recursive: true, force: true });
execFileSync("npx", ["tsc", "-p", "tsconfig.json"], { stdio: "inherit" });
mkdirSync("dist", { recursive: true });
const tokens = readFileSync("src/css/tokens.css", "utf8");
const components = readFileSync("src/css/components.css", "utf8");
writeFileSync("dist/tokens.css", tokens);
writeFileSync("dist/components.css", components);
writeFileSync("dist/casso.css", `${tokens}\n${components}`);
writeFileSync("dist/account-menu.js", readFileSync("src/account-menu.js", "utf8"));
console.log("dist/ built");
