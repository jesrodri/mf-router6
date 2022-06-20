const { ModuleFederationPlugin } = require("webpack").container;

const deps = require("./package.json").dependencies;

module.export = () => ({
  webpack: {
    configure: {
      output: {
        publicPath: "auto",
      },
    },
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "playlist",
          filename: "remoteEntry.js",
          remotes: {
            movies: "movies@http://localhost:3000/remoteEntry.js",
          },
          shared: {
            ...deps,
            card: {
              singleton: true,
            },
            "movies-content": {
              singleton: true,
            },
            "playlist-content": {
              singleton: true,
            },
            store: {
              singleton: true,
            },
            tsconfig: {
              singleton: true,
            },
            ui: {
              singleton: true,
            },
            react: {
              singleton: true,
              requiredVersion: deps.react,
            },
            "react-dom": {
              singleton: true,
              requiredVersion: deps["react-dom"],
            },
          }
        })
      ],
    },
  }
});
