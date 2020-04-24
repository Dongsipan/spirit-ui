module.exports = {
  addons: ['@storybook/preset-create-react-app'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
      },
    });
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("react-docgen-typescript-loader"),
      options: {
        shouldExtractLiteralValuesFromEnum: true,
        propFilter: (prop) => {
          if (prop.parent) {
            return !prop.parent.fileName.includes('node_modules')
          }
          return true
        }
      }
    })
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};