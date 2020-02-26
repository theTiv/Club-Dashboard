module.exports = {
  runtimeCompiler: true,
  chainWebpack: config => {
    config.module;
    {
      module: {
        rules: [
          // ... other rules omitted
          {
            test: /\.less$/,
            use: [
              "vue-style-loader",
              {
                loader: "css-loader",
                options: {
                  // enable CSS Modules
                  modules: true,
                  // customize generated class names
                  localIdentName: "[local]_[hash:base64:8]"
                }
              },
              {
                loader: "less-loader",
                options: {
                  strictMath: true,
                  noIeCompat: true,
                  // enable CSS Modules
                  modules: true,
                  // customize generated class names
                  localIdentName: "[local]_[hash:base64:8]"
                }
              }
            ]
          }
        ];
      }
    }
  }
};
