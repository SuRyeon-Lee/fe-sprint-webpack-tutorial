const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'), // './dist'의 절대 경로를 리턴합니다.
        filename: 'app.bundle.js',
    },
    module: {
        rules: [
            {
                // loader 설정하기
                // loader는 JavaScript, JSON이 아닌 파일을 불러오는 역할을 한다.

                test: /\.css$/, 
                // 파일명이 .css로 끝나는 모든 파일에 적용
                use: ["style-loader", "css-loader"],
                // 📌 배열 마지막 요소부터 오른쪽에서 왼쪽 순으로 적용!!
				// 먼저 css-loader가 적용되고, styled-loader가 적용되어야 한다.
				// 순서 주의!
                exclude: /node_modules/,
                // loader가 node_modules 안의 있는 내용도 처리하기 때문에
				// node_modules는 제외해야 합니다
            }
        ]
    },
    plugins: [
        // plugins 설정하기
        // 플러그인은 번들링 과정 중에 개발자가 원하는 다양한 작업을 할 수 있도록 도와줌
        new HtmlWebpackPlugin({
            //📌 template에 번들링한 파일들을 연결할 HTML 파일을 작성해준다.
            template: path.resolve(__dirname,"src","index.html")
        })
    ]
}