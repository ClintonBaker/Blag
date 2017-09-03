const path = require('path');

module.exports = {
  test: /\.css$/,
  include: path.resolve(__dirname, './../../source'),
  use: [
    {
      loader: 'style-loader'
    },
    {
      loader: 'css-loader',
      options: {
        importLoader: 1,
        modules: true,
        localIdentName: '[name]_[local]__'
      }
		},
		{
			loader: 'postcss-loader',
			options: {
				sourceMap: true
			}
		},
    {
      loader: 'stylus-loader',
      options: {
        import: path.resolve(__dirname, '../../source/styles/utils/index.styl')
      }
    }
  ]
};
