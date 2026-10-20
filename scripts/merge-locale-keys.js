/**
 * Deep-merge missing keys from en/common.json into other locale files.
 * Existing translations are preserved; new English keys are copied as fallback.
 */
const fs = require("fs");
const path = require("path");

const localesDir = path.join(__dirname, "..", "public", "locales");
const en = JSON.parse(
  fs.readFileSync(path.join(localesDir, "en", "common.json"), "utf8")
);

function isPlainObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function mergeMissing(target, source) {
  if (Array.isArray(source)) {
    if (!Array.isArray(target) || target.length !== source.length) {
      return source;
    }
    return target;
  }
  if (!isPlainObject(source)) return target === undefined ? source : target;
  const out = isPlainObject(target) ? { ...target } : {};
  for (const key of Object.keys(source)) {
    out[key] = mergeMissing(out[key], source[key]);
  }
  return out;
}

for (const locale of ["hi", "de", "fr", "es"]) {
  const file = path.join(localesDir, locale, "common.json");
  const current = JSON.parse(fs.readFileSync(file, "utf8"));
  const merged = mergeMissing(current, en);
  fs.writeFileSync(file, JSON.stringify(merged, null, 2) + "\n");
  console.log("merged", locale);
}
