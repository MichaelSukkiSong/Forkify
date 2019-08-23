const path = require('path'); // just to include a built in node module called path, and then put it in the path variable.
const HtmlWebpackPlugin = require('html-webpack-plugin');

// export configuration object, so that webpack can take the object and work with it.
module.exports = {
    entry: './src/js/index.js', // where webpack will start the bundling.
    output: { // which will tell webpack where to save bundle file.
        path: path.resolve(__dirname, 'dist'), // needs to be absolute path. join __dirname: current absolute path, with, dist/js: path where the bundle to be in, using a method.
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist' // specify the folder from which webpack should serve our files.
    },
    plugins: [ // plugins allow us to do complex processing of our input file.
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html' // our starting html file. we can also create a new html from scratch automatically without providing any template, but not covering it here.
        })
    ]
};


