import fs from "fs";
import { join } from "path";

const pagesPath = join(process.cwd(), "data/pages");

export function getPageBySlug(slug: Array<string>) {
  const path = slug.join("/") + ".json";
  const fullPath = join(pagesPath, path);

  return JSON.parse(fs.readFileSync(fullPath).toString());
}
