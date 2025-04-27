import type { FederationRuntimePlugin } from '@module-federation/runtime';

interface FallbackConfig {
  // Backup service address
  backupEntryUrl?: string;
  // Custom error message
  errorMessage?: string;
}

const fallbackPlugin = (config: FallbackConfig = {}): FederationRuntimePlugin => {
  const {
    backupEntryUrl = 'http://localhost:2002/mf-manifest.json',
    errorMessage = 'Module loading failed, please try again later'
  } = config;

  return {
    name: 'fallback-plugin',
    async errorLoadRemote(args: { lifecycle: string; }) {
      // Handle component loading errors
      if (args.lifecycle === 'onLoad') {
        const React = await import('react');
        
        // Create a fallback component with error message
        const FallbackComponent = React.memo(() => {
          return React.createElement(
            'div',
            {
              style: {
                padding: '16px',
                border: '1px solid #ffa39e',
                borderRadius: '4px',
                backgroundColor: '#fff1f0',
                color: '#cf1322'
              }
            },
            errorMessage
          );
        });
        
        FallbackComponent.displayName = 'ErrorFallbackComponent';
        
        return () => ({
          __esModule: true,
          default: FallbackComponent
        });
      }
      
      // Handle entry file loading errors
      if (args.lifecycle === 'afterResolve') {
        try {
          // Try loading backup service
          const response = await fetch(backupEntryUrl);
          if (!response.ok) {
            throw new Error(`Failed to fetch backup entry: ${response.statusText}`);
          }
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const backupManifest = await response.json() as any;//Manifest;
          console.info('Successfully loaded backup manifest');
          return backupManifest;
        } catch (error) {
          console.error('Failed to load backup manifest:', error);
          // If backup service also fails, return original error
          return args;
        }
      }

      return args;
    },
  };
};

export default fallbackPlugin;