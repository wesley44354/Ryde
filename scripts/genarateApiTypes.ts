import fs from "fs";
import path from "path";

const apiPath = path.resolve(__dirname, "../app/(api)/");

function walk(dir: string, base = "/(api)"): string[] {
  return fs.readdirSync(dir).flatMap((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      return walk(fullPath, `${base}/${file}`);
    }
    if (file.endsWith(".ts") || file.endsWith(".tsx")) {
      const route = file.replace(/(\+api)?\.tsx?$/, "");
      return [`${base}/${route}`];
    }
    return [];
  });
}

const routes = walk(apiPath);
const union = routes.map((r) => `  | '${r}'`).join("\n");

const output = `declare type ApiHref =\n${union};\n`;

const outputPath = path.resolve(__dirname, "../types/api.d.ts");
const outputDir = path.dirname(outputPath);

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(outputPath, output);
