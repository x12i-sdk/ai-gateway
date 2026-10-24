# @x12i/ai-gateway-docs usage example

AI Gateway docs knowledge SDK for x12i-docify — install as a devDependency only. Catalog, guides, contracts, and coding-agent instructions for humans and agents.

This consuming application demonstrates **list the bundled guides and read a use case** using the published npm package, pinned to `1.0.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

This is a documentation knowledge SDK. It is installed as a development dependency. The example lists its books and use cases, then reads the first available use-case guide from the package.

## When to use the package

- Install @x12i/ai-gateway-docs as a development dependency so the product guides and package index are available to developers and coding assistants.
- Read the bundled ai-gateway documentation or use-case catalog without requiring a live documentation website.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/ai-gateway-docs)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.

## Version 1.0.0 compatibility note

The bundled SDK lookup currently returns undefined for the first use-case guide even though its Markdown is present in the exported `files` map. This example uses that public map as a fallback. The catalog backlog records the manifest/path mismatch for repair.

## @x12i/ai-gateway runtime example

AI Gateway - Unified interface for LLM provider routing and management.

Normalize concrete provider routing at gateway ingress. This example consumes `@x12i/ai-gateway@11.1.4`.

```sh
npm install --ignore-scripts
npm run example:ai-gateway
```

Source: [`src/ai-gateway-example.mjs`](src/ai-gateway-example.mjs). The original documentation-package example remains available through `npm start`. Both examples are checked independently.

## Runtime example scope

The runtime consumer uses local synthetic data. It does not invoke a model, connect to MongoDB, or publish a package. Any temporary workspace is created and removed by the example. Documentation and runtime examples have separate commands and are validated separately.
