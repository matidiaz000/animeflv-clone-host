import { dependencies } from './package.json';
import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: 'host',
  remotes: {
    remote: 'remote@http://localhost:8081/_next/static/chunks/remoteEntry.js',
  },
  shareStrategy: 'loaded-first',
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies.react,
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
  },
});
