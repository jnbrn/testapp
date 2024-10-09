import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'capacitor-react-shadcn-pwa',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
