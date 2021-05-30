require('dotenv/config');
const path = require('path');

const clientPath = path.join(__dirname, 'client/');
const publicPath = path.join(__dirname, 'server/public/');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: clientPath,
  output: {
    filename: 'main.js',
    path: publicPath
  },
  module: {
    rules: [
      {
        test: /\.(gif|svg|jpg|png)$/,
        loader: 'file-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.jsx/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                'env',
                {
                  modules: false,
                  useBuiltIns: true,
                  targets: {
                    browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']
                  }
                }
              ]
            ],
            plugins: [
              '@babel/plugin-transform-react-jsx',
              "@babel/plugin-proposal-object-rest-spread"
            ]
          }
        }
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: publicPath,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: process.env.DEV_SERVER_PORT,
    proxy: {
      '/api': `http://localhost:${process.env.PORT}`
    },
    stats: 'minimal',
    watchContentBase: true
  }
};

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: clientPath,
  output: {
    filename: 'main.js',
    path: publicPath
  },
  module: {
    rules: [
      {
        test: /\.(gif|svg|jpg|png)$/,
        loader: 'file-loader'
      },
      {
        test: /\.jsx/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                'env',
                {
                  modules: false,
                  useBuiltIns: true,
                  targets: {
                    browsers: [
                      'Chrome >= 60',
                      'Safari >= 10.1',
                      'iOS >= 10.3',
                      'Firefox >= 54',
                      'Edge >= 15'
                    ]
                  }
                }
              ]
            ],
            plugins: [
              '@babel/plugin-transform-react-jsx',
              '@babel/plugin-proposal-object-rest-spread'
              ]
          }
        }
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: publicPath,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: process.env.DEV_SERVER_PORT,
    proxy: {
      '/api': `http://localhost:${process.env.PORT}`
    },
    stats: 'minimal',
    watchContentBase: true
  }
};
