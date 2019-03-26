import { Configuration } from 'webpack';
import createStyledComponentsTransformer from 'typescript-plugin-styled-components';

const styledComponentsTransformer = createStyledComponentsTransformer({
  minify: false
});

export default {
  mode: 'development',
  entry: './index.tsx',

  output: {
    filename: 'index.js',
    path: __dirname,
    publicPath: '/'
  },

  module: {
    rules: [{
      test: /\.(?:tsx?)$/,
      loader: 'ts-loader',

      options: {
        getCustomTransformers: () => {
          return { before: [styledComponentsTransformer] };
        }
      }
    }]
  }
} as Configuration;
