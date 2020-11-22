const { resolve } = require('path');
const webpack = require('webpack');

const cwd = process.cwd();

const config = {
    entry: resolve(cwd, 'src/index.tsx'),
    output: {
        library: 'ThinkingHomeWebUi',
        path: resolve(cwd, '../test-server/dist'),
        filename: 'bundle.js',
    },
    externals: {
        react: 'React',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: require.resolve('ts-loader'),
                exclude: /node_modules/,
            },
        ],
    },
};

const compiler = webpack(config);

// compiler.run((err, stats) => { // [Stats Object](#stats-object)
//   // ...
// });

module.exports = {
    build: () => {
        console.log('BUILD');
        compiler.run((err, stats) => {
            console.log(err);
            console.log(stats.compilation.errors);
        });
    },
};
