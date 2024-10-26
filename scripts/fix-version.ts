import * as fs from "fs/promises";

const app_path = "./app.json";
const package_path = "./package.json";

// Applies the package.json "version" field to app.json "expo.version"
async function fix_version() {
  const app_json = JSON.parse(await fs.readFile(app_path, "utf8"));
  const package_json = JSON.parse(await fs.readFile(package_path, "utf8"));

  app_json.expo.version = package_json.version;

  await fs.writeFile(app_path, JSON.stringify(app_json, null, 2), "utf8");
}

void fix_version();
