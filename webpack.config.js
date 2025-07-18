const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: process.env.NODE_ENV === 'production' ? '/dist/' : '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Match JavaScript files
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: 'babel-loader', // Use Babel loader
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/, // Match CSS files
        use: ['style-loader', 'css-loader'], // Use style-loader and css-loader
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Use index.html as template
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public/gen-ai',
          to: 'dist/gen-ai',
          globOptions: {
            ignore: ['**/.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Serve files from dist directory
      publicPath: '/',
      serveIndex: true
    },
    compress: true, // Enable gzip compression
    port: 3001, // Use port 3001
    historyApiFallback: {
      rewrites: [
        { 
          from: /^\/gen-ai\/[^/]+$/, 
          to: context => {
            const path = context.parsedUrl.pathname;
            // Check if the path already ends with .html
            return path.endsWith('.html') ? path : `${path}.html`;
          }
        },
        { from: /.*/, to: '/index.html' }
      ]
    },
  },
}
