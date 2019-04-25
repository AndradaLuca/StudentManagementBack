const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'babel-polyfill',
        path.join(__dirname, '../../app/web/index'),
    ],
    output: {
        path: path.join(__dirname, '../public'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
        loaders: [
            // take all less files, compile them, and bundle them in with our js bundle
            {
                test: /\.jsx?$/,
                include: path.join(__dirname, '/client/src'),
                loader: 'babel-loader',
                query: {
                  presets: ["react", "es2015", "stage-1"]
                }
              },
              {
                test: /\.(gif|svg|jpg|png)$/,
                loader: "file-loader",
            },
            {
                test: /\.css$/,
                loader: 'style!css!'
            },{
                test: /\.less$/,
                loader: 'style!css!autoprefixer?browsers=last 2 version!less'
            },{
                test: /\.json$/,
                loader: "json",
            },{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: [['react-transform', {
                        transforms: [{
                            transform: 'react-transform-hmr',
                            imports: ['react'],
                            // this is important for Webpack HMR:
                            locals: ['module']
                        }],
                    }]],
                },
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
                PLATFORM_ENV: JSON.stringify('web'),
            },
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
    ]
};
