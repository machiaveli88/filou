#!/usr/bin/env node
// @ts-ignore todo: remove
import withLess from '@zeit/next-less';
import antdTheme from '../theme.json';
import overwrite from '../overwrite.json';
import { flattenObject } from '../utils';
import { theme as defaultTheme } from 'vilicando-core';

const manipulateObj = (obj: object, antd: string, origin: string) => {
  if (obj[antd] || obj[origin]) {
    obj[antd] = obj[antd] || obj[origin];
    delete obj[origin];
  }
};

module.exports = (modifyVars: any = {}, nextConfig: any) => {
  if (!nextConfig) {
    if (modifyVars.webpack) {
      nextConfig = { ...modifyVars };
      modifyVars = {};
    } else {
      nextConfig = {};
    }
  }

  const { lessLoaderOptions, webpack, ...rest } = nextConfig;
  modifyVars = flattenObject({
    ...antdTheme,
    ...defaultTheme,
    ...overwrite,
    ...modifyVars
  });
  // add 'px' to numbers, except of line-heights
  Object.keys(modifyVars).forEach(key => {
    if (
      typeof modifyVars[key] === 'number' &&
      !(key.indexOf('line-height') === 0 || ~key.indexOf('-line-height'))
    )
      modifyVars[key] = modifyVars[key] + 'px';
  });
  // see also in AntdProvider!
  manipulateObj(modifyVars, 'padding-xs', 'spacing-xs');
  manipulateObj(modifyVars, 'padding-sm', 'spacing-sm');
  manipulateObj(modifyVars, 'padding-md', 'spacing-md');
  manipulateObj(modifyVars, 'padding-lg', 'spacing-lg');
  manipulateObj(modifyVars, 'font-size-base', 'font-size-md');
  manipulateObj(modifyVars, 'primary-color', 'primary-base');

  return withLess({
    extractCssChunksOptions: { orderWarning: false },
    lessLoaderOptions: {
      javascriptEnabled: true,
      modifyVars,
      ...lessLoaderOptions
    },
    webpack: (config: any, options: any) => {
      const { isServer } = options;

      if (isServer) {
        const antStyles = /antd\/.*?\/style.*?/;
        const origExternals = [...config.externals];
        config.externals = [
          (context: any, request: any, callback: any) => {
            if (request.match(antStyles)) return callback();
            if (typeof origExternals[0] === 'function') {
              origExternals[0](context, request, callback);
            } else {
              callback();
            }
          },
          ...(typeof origExternals[0] === 'function' ? [] : origExternals)
        ];

        config.module.rules.unshift({
          test: antStyles,
          use: 'null-loader'
        });
      }

      if (typeof webpack === 'function') {
        return webpack(config, options);
      }

      return config;
    },
    ...rest
  });
};
