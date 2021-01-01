module.exports = {
    chainWebpack: config => {
        const wasmExtensionRegExp = /\.wasm$/;
        // Wasm Loader
        config.module
            .rule('wasm')
            .test(wasmExtensionRegExp)
            .type('javascript/auto')
            .use('base64-loader')
            .loader('base64-loader')
            .end()
    }
};
