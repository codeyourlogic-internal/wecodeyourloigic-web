import { writeFileSync } from "fs";
import { join } from "path";
import { buildLlmsTxt, buildLlmsFullTxt } from "../src/lib/seo/llms-content";

const root = join(__dirname, "..");
writeFileSync(join(root, "public", "llms.txt"), buildLlmsTxt());
writeFileSync(join(root, "public", "llms-full.txt"), buildLlmsFullTxt());
console.log("wrote public/llms.txt and public/llms-full.txt");
