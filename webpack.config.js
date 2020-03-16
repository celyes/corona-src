var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry:[
      __dirname + '/src/js/main.js',
      __dirname + '/src/scss/style.scss'
    ],
    output: {
        path: path.resolve(__dirname, 'assets/js'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                  presets: [
                    ['@babel/preset-env']
                  ]
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: { outputPath: '../css/', name: '[name].min.css'}
                    },
                    'sass-loader'
                ]
            },
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
