# Frio Project

Welcome to **Frio** – a modular monorepo designed for building flexible web applications and shared libraries using NPM workspaces. This repository is structured to keep development focused, maintainable, and scalable by separating concerns into logical packages and applications.

## 🚀 Overview

Frio is built around the idea of isolated packages and applications that can be developed independently while sharing common utilities. Whether you're working on the core design tokens, a frontend website, or development tooling, the workspace structure makes collaboration and testing straightforward.

---

## 📁 Workspace Structure

The repository uses NPM workspaces to define the following primary areas:

| Workspace              | Location               | Purpose                                                                                                                                            |
| ---------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `applications/website` | `applications/website` | Frontend SvelteKit application. Contains UI components, routes, and build configuration.                                                           |
| `development/registry` | `development/registry` | Development registry server with configuration and storage for private packages. Useful for local testing of packages in a controlled environment. |
| `packages/core`        | `packages/core`        | Shared core utilities and design tokens consumed by other workspaces. Includes build scripts and type definitions.                                 |

Additional nested workspaces may appear under `@frio` in the registry storage path or other future packages.

---

## 🛠 Developing Workspaces

Each workspace has its own package.json and may define custom scripts. Here's how to get started:

1. **Install dependencies**

   ```bash
   npm install
   ```

   Running this at the root will install dependencies across all workspaces.

2. **Developing the Website**

   ```bash
   cd applications/website
   npm run dev
   ```

   Starts the SvelteKit development server with hot module reloading. Edit components under `src/lib/components` or pages under `src/routes`.

3. **Working on Core Packages**

   ```bash
   cd packages/core
   npm run build
   ```

   Compile the shared utilities or tokens. You can also run tests or linting depending on scripts defined in that package.

4. **Using the Registry**

   ```bash
   cd development/registry
   npm run start
   ```

   Launches a local npm registry for publishing and consuming internal packages during development.

5. **Adding a New Workspace**
   - Create a new directory under the appropriate top-level folder (`packages` or `applications`).
   - Add a `package.json` with a unique name and configure any build or dev scripts.
   - Add the path to the `workspaces` array in the root `package.json` if not using glob patterns.

6. **Linking Workspaces**
   NPM automatically symlinks workspace packages when you run `npm install` from the root. Use `npm run build` in a package to regenerate outputs consumed by others.

---

## 📝 Contributing

Feel free to open issues or submit pull requests. Follow existing code patterns and run relevant tests before pushing changes.

---

## 📦 License

Specify your project license here.
