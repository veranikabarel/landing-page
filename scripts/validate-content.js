import { readFileSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dataDir = join(__dirname, "../src/data");

let errors = 0;

function fail(file, message) {
  console.error(`  [FAIL] ${file}: ${message}`);
  errors++;
}

function requireArray(file, data, key) {
  if (!Array.isArray(data[key])) {
    fail(file, `"${key}" must be an array`);
    return false;
  }
  return true;
}

function requireFields(file, item, fields, context) {
  for (const field of fields) {
    if (
      item[field] === undefined ||
      item[field] === null ||
      item[field] === ""
    ) {
      fail(file, `${context} is missing required field "${field}"`);
    }
  }
}

const validators = {
  "activities.json": (file, data) => {
    if (!requireArray(file, data, "presentations")) return;
    data.presentations.forEach((item, i) => {
      requireFields(
        file,
        item,
        ["label", "tag", "title", "type", "description"],
        `presentations[${i}]`,
      );
    });
  },
  "experience.json": (file, data) => {
    if (!requireArray(file, data, "experience")) return;
    data.experience.forEach((item, i) => {
      requireFields(
        file,
        item,
        ["job_title", "company", "date", "responsibilities"],
        `experience[${i}]`,
      );
      if (!Array.isArray(item.responsibilities)) {
        fail(file, `experience[${i}].responsibilities must be an array`);
      }
    });
  },
  "referrals.json": (file, data) => {
    if (!requireArray(file, data, "referrals")) return;
    data.referrals.forEach((item, i) => {
      requireFields(
        file,
        item,
        ["name", "relationship", "role", "quote"],
        `referrals[${i}]`,
      );
    });
  },
  "projects.json": (file, data) => {
    if (!requireArray(file, data, "projects")) return;
    data.projects.forEach((item, i) => {
      requireFields(file, item, ["title", "description"], `projects[${i}]`);
    });
  },
  "skills.json": (file, data) => {
    if (!data.skills_and_tools || typeof data.skills_and_tools !== "object") {
      fail(file, '"skills_and_tools" must be an object');
    }
  },
  "education.json": (file, data) => {
    const key = Object.keys(data)[0];
    if (!key || !Array.isArray(data[key])) {
      fail(file, "top-level key must be an array");
    }
  },
  "languages.json": (file, data) => {
    const key = Object.keys(data)[0];
    if (!key || !Array.isArray(data[key])) {
      fail(file, "top-level key must be an array");
    }
  },
};

const files = readdirSync(dataDir).filter((f) => f.endsWith(".json"));

for (const filename of files) {
  const filePath = join(dataDir, filename);
  let data;

  try {
    data = JSON.parse(readFileSync(filePath, "utf-8"));
  } catch (err) {
    fail(filename, `invalid JSON — ${err.message}`);
    continue;
  }

  if (validators[filename]) {
    validators[filename](filename, data);
  }

  console.log(`  [OK]   ${filename}`);
}

if (errors > 0) {
  console.error(`\nContent validation failed with ${errors} error(s).`);
  process.exit(1);
} else {
  console.log(`\nAll ${files.length} content files are valid.`);
}
