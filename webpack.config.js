const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
const hotModuleScript = 'webpack-hot-middleware/client'//?path=/__webpack_hmr&timeout=20000&  '

const NODE_ENV = process.env.NODE_ENV || 'development'

const HMRPlugin = () => {
  const HMR = [];
  if(NODE_ENV === "development") {
    HMR.push(new webpack.HotModuleReplacementPlugin())
  }

  return HMR
}


module.exports = {
  mode: NODE_ENV == 'development' ? 'development' : 'production',
  // mode: 'production',
  entry: [hotModuleScript, './src/scripts/main.js' ],

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'src', 'static/dist'),
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loader: {
            scss: 'vue-style-loader!css-loader!sass-loader'
          }
        }
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use:  [
          'vue-style-loader',
          'style-loader',
          {
            loader:  'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use:  [
          {
            loader: 'style-loader',
          },
          {
            loader:  'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template : './src/views/index.html',
    }),
    ...HMRPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.json', '.vue', '.scss'],
    alias: {
      '@': path.resolve(__dirname),
      '@common': path.resolve(__dirname, 'src/styles/common.scss'),
      '@components': path.resolve(__dirname, 'src/scripts/components/'),
      '@pages': path.resolve(__dirname, 'src/scripts/pages/'),
      // '@images': path.resolve(__dirname, 'src/static/images/'),
    }
  }
}
