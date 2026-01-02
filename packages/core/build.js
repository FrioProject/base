import StyleDictionary from "style-dictionary";
import { watch } from "node:fs";

const tokensConfig = {
  source: ["src/tokens/**/*.json"],
  preprocessors: ["tokens-studio/preprocess"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "dist/css/",
      files: [
        {
          destination: "colors.css",
          format: "css/variables",
          filter: (token) => token.path[0] === "color",
          options: {
            outputReferences: true,
            outputReferencesAsVariables: true,
          },
        },
      ],
    },
    js: {
      transformGroup: "js",
      buildPath: "dist/",
      files: [
        {
          destination: "frio.js",
          format: "javascript/es6",
        },
        {
          destination: "frio.mjs",
          format: "javascript/esm",
        },
      ],
    },
    ts: {
      transformGroup: "js",
      buildPath: "dist/",
      files: [
        {
          format: "typescript/module-declarations",
          destination: "frio.d.ts",
        },
      ],
    },
    json: {
      transformGroup: "js",
      files: [
        {
          buildPath: "dist/",
          destination: "tokens.json",
          format: "json",
          options: {
            outputReferences: true,
          },
        },
        {
          buildPath: "src/tokens/",
          destination: "tokens.json",
          format: "json",
          options: {
            outputReferences: true,
          },
        },
      ],
    },
  },
};

async function build() {
  console.log("❄️ Frio: Building design tokens...");

  try {
    await new StyleDictionary(tokensConfig).buildAllPlatforms();

    console.log("✅ Frio: Design tokens built successfully!");
  } catch (error) {
    console.error("❌ Frio: Error building design tokens:", error);
    process.exit(1);
  }
}

await build();

if (process.argv.includes("--watch")) {
  console.log("👀 Frio: Watching for changes...");

  watch("src/tokens", { recursive: true }, async (_eventType, filename) => {
    console.log(`🔍 Frio: Detected changes in ${filename}.`);
    console.log("🔄 Frio: Rebuilding...");
    await build();
  });
}
