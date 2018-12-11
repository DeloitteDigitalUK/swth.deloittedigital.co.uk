const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
  // For example, add typescript loader:
  defaultConfig.module.rules.push({
    test: /\.scss$/,
    loaders: [
      require.resolve('style-loader'),
      {
        loader: require.resolve('css-loader'),
        options: {
          importLoaders: 1,
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
      require.resolve('sass-loader')
    ],
  });

  return defaultConfig;
};