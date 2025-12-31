# @frio/core

The foundational design tokens for the FrioProject. A crisp, platform-agnostic design system built for speed and consistency.

[![npm version](https://img.shields.io/npm/v/@frio/core?color=00d1ff&style=flat-square)](https://www.npmjs.com/package/@frio/core)
[![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](LICENSE)

## ❄️ Overview

`@frio/core` is the single source of truth for the Frio design system. It contains all design tokens—colors, typography, spacing, and more—distributed in multiple formats to fit any workflow.

Built using the **W3C Design Tokens Community Group (DTCG)** 2025.10 specification.

---

## 💾 Installation

Install via your preferred package manager:

```bash
npm install @frio/core
# or
yarn add @frio/core
```

---

## 🎨 CSS Variables

The easiest way to use Frio is by importing the CSS variables into your global styles:

```css
@import "@frio/core";

.my-element {
  background-color: var(--frio-color-ice);
}
```

---

## ⚡ Javascript/Typescript

For CSS-in-JS or logic-based styling, use our ESM or CommonJS exports:

```javascript
import { colors } from "@frio/core";

console.log(colors.ice);
```

---

## 🚀 Distribution

`@frio/core` is distributed in multiple formats to fit any workflow:

| Format | Path               | Usage                              |
| ------ | ------------------ | ---------------------------------- |
| CSS    | `dist/frio.css`    | Standard Web/Native CSS            |
| ESM    | `dist/frio.mjs`    | Modern JS Bundlers (Vite, Webpack) |
| CJS    | `dist/frio.js`     | Legacy Node.js                     |
| Types  | `dist/frio.d.ts`   | TypeScript Intellisense            |
| DTCG   | `dist/tokens.json` | Design Tokens JSON                 |

---

## 📦 Raw JSON

You can also import the raw JSON data directly. With Typescript, you'll need to add the `resolveJsonModule` option to your `tsconfig.json` file. And soon with JavaScript, you can use the `import` statement with the `type` option.

```json
{
  "compilerOptions": {
    "resolveJsonModule": true
  }
}
```

```typescript
import colors from "@frio/core/tokens.json";

console.log(colors.ice);
```

```javascript
import colors from "@frio/core/tokens.json" with { type: "json" };

console.log(colors.ice);
```
