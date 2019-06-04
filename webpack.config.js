const path = require('path');

module.exports = {
      entry: {
            index: './src/index.js',
            another: './src/another-index.js'
      },
      output: {
            path: path.resolve(__dirname, 'dist/assets/js'),
            filename: '[name].bundle.js',
      },
      devServer: {
            contentBase: path.resolve(__dirname, 'dist'),
            publicPath: '/assets/'
      },
      module: {
            rules: [
                  {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: {
                              loader: 'babel-loader',
                              options: {
                                    presets: ['@babel/preset-env']
                              }
                        }
                  },
                  {
                        test: /\.css$/,
                        use: ['style-loader', 'css-loader']
                  },
                  {
                        test: /\.(scss)$/,
                        use: [
                              {
                                    // Adds CSS to the DOM by injecting a `<style>` tag
                                    loader: 'style-loader'
                              },
                              {
                                    // Interprets `@import` and `url()` like `import/require()` and will resolve them
                                    loader: 'css-loader'
                              },
                              {
                                    // Loader for webpack to process CSS with PostCSS
                                    loader: 'postcss-loader',
                                    options: {
                                          plugins: function () {
                                                return [
                                                      require('autoprefixer')
                                                ];
                                          }
                                    }
                              },
                              {
                                    // Loads a SASS/SCSS file and compiles it to CSS
                                    loader: 'sass-loader'
                              }
                        ]
                  }
            ]
      }
};