# @local/registry

This is an internal workspace containing a local **Verdaccio** instance. It acts as a private NPM registry for testing the `@frio/*` packages locally before publishing to the public registry.

## 🚀 Quick Start

From the **root of the monorepo**, run the following command to start the server:

```bash
npm run start -w="development/registry"
```

## Local Publishing Workflow

1. Register a new user. `npm adduser --registry=http://localhost:4873`
2. Publish a package. `npm publish --registry=http://localhost:4873`
3. Verify the package is available. `npm view @frio/{PACKAGE_NAME} --registry=http://localhost:4873`
4. Install the package. `npm install @frio/{PACKAGE_NAME} --registry=http://localhost:4873`
