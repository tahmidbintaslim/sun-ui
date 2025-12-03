// ESM wrapper for semver (which is CommonJS) to fix default export issue
// This is needed because Storybook 10.x incorrectly uses `import semver from 'semver'`
import * as semverModule from 'semver';

// Re-export everything from semver
export * from 'semver';

// Provide a default export that matches what Storybook expects
export default semverModule;
