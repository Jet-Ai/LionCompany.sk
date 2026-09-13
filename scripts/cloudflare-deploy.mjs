import { spawnSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
process.chdir(root);
const mode = process.argv[2];
if (!["build", "deploy"].includes(mode)) throw new Error("Use build or deploy.");
const databaseId = process.env.D1_DATABASE_ID;
if (!databaseId || !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(databaseId) || databaseId === "00000000-0000-4000-8000-000000000000") {
  throw new Error("Set D1_DATABASE_ID in Cloudflare Build variables to your real D1 Database ID. The Sites/local placeholder cannot be deployed. See CLOUDFLARE.md.");
}
function run(args) {
  const result = spawnSync(process.execPath, args, { cwd: root, stdio: "inherit", env: process.env });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}
run(["scripts/run-framework.mjs", "build"]);
// Deploy the generated Worker, not Next.js source. Keep migrations relative
// to this generated configuration, which lives two levels below the root.
const configPath = "dist/server/wrangler.json";
const config = JSON.parse(readFileSync(configPath, "utf8"));
const database = config.d1_databases?.find(binding => binding.binding === "DB");
if (!database || database.database_id !== databaseId) throw new Error("Built DB binding does not match D1_DATABASE_ID.");
database.migrations_dir = "../../drizzle";
writeFileSync(configPath, JSON.stringify(config, null, 2) + "\n");
if (mode === "deploy") {
  run(["node_modules/wrangler/bin/wrangler.js", "d1", "migrations", "apply", "DB", "--remote", "--config", configPath]);
  run(["node_modules/wrangler/bin/wrangler.js", "deploy", "--config", configPath]);
}
