const path = require('path');

module.exports = {
    entry: {
        app: './src/index.js'
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist'
    },

    devServer: {
        overlay: true
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/i,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                options: {
                    presets: [
                        ['@babel/preset-env', {
                            modules: false
                        }],
                        '@babel/preset-react',
                    ]
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader', // creates style nodes from JS strings
                    'css-loader', // translates CSS into CommonJS
                    'sass-loader?sourceMap' // compiles Sass to CSS, using Node Sass by default
                ]
            }
        ]
    },
};
