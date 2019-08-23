const path = require('path'); // just to include a built in node module called path, and then put it in the path variable.

// export configuration object, so that webpack can take the object and work with it.
module.exports = {
    entry: './src/js/index.js', // where webpack will start the bundling.
    output: { // which will tell webpack where to save bundle file.
        path: path.resolve(__dirname, 'dist/js'), // needs to be absolute path. join __dirname: current absolute path, with, dist/js: path where the bundle to be in, using a method.
        filename: 'bundle.js'
    },
};


