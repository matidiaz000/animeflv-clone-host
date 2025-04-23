import { dependencies } from './package.json';
import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: process.env.NAME,
  remotes: {
    home: process.env.MF_HOME as string,
    animes: process.env.MF_ANIMES as string,
    chapter: process.env.MF_CHAPTER as string,
  },
  dts: false,
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
    '@matidiaz000/animeflv-clone-library': {
      singleton: true,
      eager: true,
      requiredVersion: dependencies['@matidiaz000/animeflv-clone-library'],
    },
    '@apollo/client': {
      singleton: true,
      eager: true,
      requiredVersion: dependencies['@apollo/client'],
    },
    'graphql': {
      singleton: true,
      eager: true,
      requiredVersion: dependencies['graphql'],
    },
  },
});
