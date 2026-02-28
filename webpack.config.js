module.exports = (env, argv) => {
  const mode = argv.mode || 'development';

  const config = {
    mode,
    entry: "./lib/space_invaders.js",
    output: {
      filename: "./bundle.js"
    },
    devtool: mode === 'development' ? 'source-map' : false
  };

  if (mode === 'development') {
    config.devServer = {
      static: {
        directory: __dirname,
      },
      port: 8080,
      open: true,
      hot: true
    };
  }

  return config;
};
