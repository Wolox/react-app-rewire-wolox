import ExtractTextPlugin from "extract-text-webpack-plugin";

import loaders from "./loaders";
import utils from "./utils";

const eslintLoaderMatcher = utils.createLoaderMatcher("eslint-loader");
const babelLoaderMatcher = utils.createLoaderMatcher("babel-loader");
const fileLoaderMatcher = utils.createLoaderMatcher("file-loader");

const cssFilename = "static/css/[name].[contenthash:8].css";

export default function override(config) {
  const eslintRule = utils.findRule(config.module.rules, eslintLoaderMatcher);
  const {
    baseConfig,
    ignore,
    useEslintrc,
    ...restOptions
  } = eslintRule.options;
  restOptions.emitWarning = true;
  eslintRule.options = restOptions;

  const babelRule = utils.findRule(config.module.rules, babelLoaderMatcher);
  babelRule.options.babelrc = true;

  utils.addBeforeRule(config.module.rules, fileLoaderMatcher, loaders.scss);
  utils.addBeforeRule(
    config.module.rules,
    fileLoaderMatcher,
    loaders.scssModules
  );
  utils.addBeforeRule(
    config.module.rules,
    fileLoaderMatcher,
    loaders.cssModules
  );

  config.plugins = (config.plugins || []).concat([
    new ExtractTextPlugin({
      filename: cssFilename
    })
  ]);

  return config;
};