import fs from "fs";
import { join } from "path";

const jobsPath = join(process.cwd(), "data/jobs");

export function getJobBySlug(slug: string) {
  const path = slug + ".json";
  const fullPath = join(jobsPath, path);

  return JSON.parse(fs.readFileSync(fullPath).toString());
}

export function getAllJobs() {
  const slugs = getJobsSlugs();
  const posts = slugs.map((slug) => getJobBySlug(slug.slice(0, -5)));
  return posts;
}

export function getJobsSlugs() {
  return fs.readdirSync(jobsPath);
}
