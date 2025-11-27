# @blich-studio/eslint-config

Shared ESLint and Prettier configuration for Blich Studio projects.

## Installation

This package is published to GitHub Packages. You need to configure npm to use the GitHub registry for `@blich-studio` scoped packages.

### 1. Configure npm registry

Create or update `.npmrc` in your project root:

```
@blich-studio:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NPM_TOKEN}
```

### 2. Set authentication token

Create a GitHub Personal Access Token with `read:packages` permission and set it as an environment variable:

```bash
export NPM_TOKEN=your_github_token_here
```

### 3. Install the package

```bash
bun add -d @blich-studio/eslint-config
# or
npm install -D @blich-studio/eslint-config
```

## Usage

### ESLint Configuration

Create `eslint.config.js` in your project root:

```javascript
import blichConfig from "@blich-studio/eslint-config";

export default blichConfig;
```

Or extend with custom rules:

```javascript
import blichConfig from "@blich-studio/eslint-config";

export default [
  ...blichConfig,
  {
    rules: {
      // Your custom rules
    },
  },
];
```

### Prettier Configuration

Create `prettier.config.js` in your project root:

```javascript
export { default } from "@blich-studio/eslint-config/prettier";
```

Or import in your existing config:

```javascript
import blichPrettier from "@blich-studio/eslint-config/prettier";

export default {
  ...blichPrettier,
  // Your custom overrides
};
```

## Scripts

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "format": "prettier --write ."
  }
}
```

## Features

- **TypeScript support** - Full TypeScript ESLint rules
- **Prettier integration** - ESLint and Prettier work together seamlessly
- **Conventional commits** - Enforces conventional commit format via commitlint
- **Modern standards** - Uses ESLint flat config format

## Development

### Workflow

1. Create feature branch from `development`
2. Make changes with conventional commit messages (`feat:`, `fix:`, etc.)
3. Create PR to `development`
4. Once ready for release, merge `development` → `main`
5. Semantic release automatically publishes new version

### Commit Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New feature (minor version bump)
- `fix:` - Bug fix (patch version bump)
- `feat!:` or `BREAKING CHANGE:` - Breaking change (major version bump)
- `chore:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:` - No version bump

## License

MIT
