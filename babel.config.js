module.exports = (api) => {
  api.cache(true);
  return {
    presets: [
      "@babel/preset-react",
      ["@babel/preset-env", { loose: true, modules: false }],
      "@babel/preset-flow",
      "@babel/preset-typescript",
    ],
    plugins: [
      ["@babel/plugin-proposal-class-properties", { loose: true }],
      ["@babel/plugin-proposal-private-methods", { loose: true }],
      ["@babel/plugin-transform-runtime", { useESModules: true }],
      [
        "babel-plugin-named-asset-import",
        {
          loaderMap: {
            svg: {
              ReactComponent: "@svgr/webpack![path]",
            },
          },
        },
      ],
      "@babel/plugin-transform-react-constant-elements",
      // [
      //   "transform-rename-import",
      //   { original: "^(.+?)\\.scss$", replacement: "$1.css" },
      // ],
      ["@babel/plugin-proposal-pipeline-operator", { proposal: "smart" }],
      [
        "transform-imports",
        {
          lodash: {
            // eslint-disable-next-line no-template-curly-in-string
            transform: "lodash/${member}",
            preventFullImport: true,
          },
          "@material-ui/core": {
            // Use "transform: '@material-ui/core/${member}'," if your bundler does not support ES modules
            // eslint-disable-next-line no-template-curly-in-string
            transform: "@material-ui/core/esm/${member}",
            preventFullImport: true,
          },
          "@material-ui/icons": {
            // Use "transform: '@material-ui/icons/${member}'," if your bundler does not support ES modules
            // eslint-disable-next-line no-template-curly-in-string
            transform: "@material-ui/icons/esm/${member}",
            preventFullImport: true,
          },
        },
      ],
      // api.env("cli") && [
      //   "@babel/plugin-proposal-private-property-in-object",
      //   { loose: true },
      // ],
    ],
  };
};
