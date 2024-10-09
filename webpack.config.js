const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    experiments: {
        outputModule: true,
    },
    mode: 'production',
    entry: './index.ts',
    output: {
        path: path.resolve(__dirname, 'output'),
        // filename: 'aurora-design.js',
        filename: 'aurora-design.esm.js',
        library: {
            // name: 'AuroraDesign',
            // type: 'umd',
            // export: 'named',  // 确保导出命名导出
            // umdNamedDefine: true,
            type: 'module',
        },
        globalObject: 'typeof self !== \'undefined\' ? self : this',
    },
    externals: {
        // vue: {
        //     commonjs: 'vue',
        //     commonjs2: 'vue',
        //     amd: 'vue',
        //     root: 'Vue'
        // }
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue', '.json'],
        alias: {
            '@': path.resolve(__dirname),
        },
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                            appendTsSuffixTo: [/\.vue$/],
                            configFile: path.resolve(__dirname, 'tsconfig.json'),
                        }
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: 'aurora-design.css'
        })
    ]
};