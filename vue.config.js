module.exports = {
    devServer: {
        // open: true, //配置自动启动浏览器 http://XXX.XXX.X.XX:7071/rest/XXX/
        hotOnly: true, // 热更新
        proxy:{
            '/baidu_music_api':{ //匹配 /api
                target:'http://tingapi.ting.baidu.com/', //匹配 /api 后转换的地址
                changeOrigin: true,//运行跨域
                ws:true,
                secure:false,
                pathRewrite:{ //重写,把之前的清空
                    '^/baidu_music_api':''
                },
            },


        },
    },
    //webpack配置
    configureWebpack: {
        //关闭 webpack 的性能提示
        performance: {
            hints:false
        },

        //或者

        //警告 webpack 的性能提示
        performance: {
            hints:'warning',
            //入口起点的最大体积
            maxEntrypointSize: 50000000,
            //生成文件的最大体积
            maxAssetSize: 30000000,
            //只给出 js 文件的性能提示
            assetFilter: function(assetFilename) {
                return assetFilename.endsWith('.js');
            }
        }
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? './'
        : '/'




};
