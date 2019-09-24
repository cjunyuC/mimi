const path = require ('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports={
    entry:path.join(__dirname,'src/main.js'),
    output:{
        path:path.join(__dirname,'dist'),
        filename:'bundel.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.join(__dirname,'src/index.html'),
            filename:'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
                {test:/\.css$/, use: ['style-loader', 'css-loader']},
                {test:/\.vue$/,use:'vue-loader'},
                {test:/\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'}
        ]
    }

}