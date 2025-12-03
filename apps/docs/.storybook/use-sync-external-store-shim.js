// ESM wrapper for use-sync-external-store/shim
// React 18+ has useSyncExternalStore built-in, so we can re-export from React
// This avoids the CJS/ESM compatibility issues with the shim package
import { useSyncExternalStore } from 'react';

export { useSyncExternalStore };
export default { useSyncExternalStore };
