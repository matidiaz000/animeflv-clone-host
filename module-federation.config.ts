import { dependencies } from './package.json';
import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: 'host',
  remotes: {
    home: process.env.MF_HOME as string,
  },
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      eager: true,
      requiredVersion: dependencies.react,
    },
    'react-dom': {
      singleton: true,
      eager: true,
      requiredVersion: dependencies['react-dom'],
    },
    'react-router-dom': {
      singleton: true,
      eager: true,
      requiredVersion: dependencies['react-router-dom'],
    },
  },
});
