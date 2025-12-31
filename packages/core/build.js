import StyleDictionary from "style-dictionary";

const tokens = new StyleDictionary({
  source: ["src/tokens/**/*.json"],
  preprocessors: ["tokens-studio/preprocess"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "dist/",
      files: [
        {
          destination: "frio.css",
          format: "css/variables",
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
      buildPath: "dist/",
      files: [
        {
          destination: "tokens.json",
          format: "json",
          options: {
            outputReferences: true,
          },
        },
      ],
    },
  },
});

await tokens.buildAllPlatforms();
