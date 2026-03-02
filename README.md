# Frio Project

Welcome to **Frio** – a modular monorepo designed for building flexible web applications and shared libraries using NPM workspaces. This repository is structured to keep development focused, maintainable, and scalable by separating concerns into logical packages and applications.

## 🚀 Overview

Frio is built around the idea of isolated packages and applications that can be developed independently while sharing common utilities. Whether you're working on the core design tokens, a frontend website, or development tooling, the workspace structure makes collaboration and testing straightforward.

---

## 📁 Workspace Structure

The repository uses NPM workspaces to define the following primary areas:

| Workspace         | Location               | Purpose                                                                                                                                            |
| ----------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `@local/base`     | `./`                   | Root workspace                                                                                                                                     |
| `@local/website`  | `applications/website` | Frontend SvelteKit application. Contains UI components, routes, and build configuration.                                                           |
| `@local/registry` | `development/registry` | Development registry server with configuration and storage for private packages. Useful for local testing of packages in a controlled environment. |
| `@frio/core`      | `packages/core`        | Shared core utilities and design tokens consumed by other workspaces. Includes build scripts and type definitions.                                 |

> [!TIP]
> All publishable packages are under the `@frio` namespace
> All non-publishable package are under the `@local` namespace

---

## 🛠 Developing Workspaces

All scripts can be run in the root of the project. The NPM commands are formatted as follows `WORKSPACE:PROJECT:COMMAND`. Where `WORKSPACE` is corresponds to the aforementioned workspaces.

| Workspace Folder | Script |
| ---------------- | ------ |
| `.`              | `base` |
| `applications/`  | `app`  |
| `development/`   | `dev`  |
| `packages/`      | `pak`  |

| Project    | Script |
| ---------- | ------ |
| `registry` | `reg`  |
| `website`  | `web`  |
| `core`     | `cor`  |

| Script            | Description                                                                                    |
| ----------------- | ---------------------------------------------------------------------------------------------- |
| `list-workspaces` | Lists the NPM workspaces. Used only with `base` workspace script                               |
| `start`           | Starts the project. When run with `base` will run several scripts concurrently for development |
| `build`           | Builds the project.                                                                            |

> [!NOTE]
> Running `npm run base:start` will run the script `start` in the base `./` project (`@local/base`).
> Running `npm run app:web:build` will run the script `build` in the website `./applications/website` project (`@local/website`)

### Listing workspaces

Running `npm run base:list-workspaces` from the root will list all of the registered NPM workspaces.

### Working with workspaces

#### Applications

The applications folder is for all applications that are a part of this project. For now, this includes the `website` application. This is the main website for the Frio Project. Other applications will include in the future, a theme builder application.

#### Development (Deprecated)

The development folder was the location for using development-only tools like Verdaccio. This is no longer needed and will be removed.

#### Packages

The packages folder is where all publishable packages are stored. For now, this includes the `core` package.

---

## 📝 Contributing

Feel free to open issues or submit pull requests. Follow existing code patterns and run relevant tests before pushing changes.

---

## 📦 License

Specify your project license here.
