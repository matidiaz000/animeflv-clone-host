import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import moduleFederationConfig from './module-federation.config';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation(moduleFederationConfig)
  ],
  server: {
    port: process.env.PORT as unknown as number,
    headers: {
      'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Authorization',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Origin': '*',
    },
  },
  html: {
    title: 'Ver Anime Online HD — AnimeFLV',
  },
});
