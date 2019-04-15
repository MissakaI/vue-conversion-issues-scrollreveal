/* eslint-disable */
module.exports = {
    chainWebpack: config => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
                options.transformAssetUrls= {
                    video: ['src', 'poster'],
                    source: 'src',
                    img: 'src',
                    image: 'xlink:href',
                    timelineItem: 'imageURL',
                }
                return options;
            })
    }
}