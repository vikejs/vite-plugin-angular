export { angular };

import { Plugin } from 'vite';
import { DirImporterPlugin } from './plugins/dirImporterPlugin.js';
import { ConfigPlugin } from './plugins/configPlugin.js';
import { DevelopmentPlugin } from './plugins/devPlugin.js';
import { BuildPlugin } from './plugins/buildPlugin.js';

function angular(): Plugin[] {
  const plugins = [
    ...ConfigPlugin,
    DirImporterPlugin,
    DevelopmentPlugin,
    ...BuildPlugin(),
  ];
  return plugins;
}
