const HtmlWebPackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
})

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          { 
            loader: 'style-loader'
          },
          { 
            loader: 'css-loader', 
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: "[local]__[hash:base64:5]"
            } 
          },
          { 
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [htmlPlugin]
}