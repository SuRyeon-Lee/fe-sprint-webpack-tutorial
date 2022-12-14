const _ = require('./underbar.js')
//๐ index.html ๋ธ๋ผ์ฐ์ ์์ ์ด๋ฉด ์ค๋ฅ ๋ฉ์ธ์ง ๋จ
//require ๋ฌธ๋ฒ์ Node.js ๋ฌธ๋ฒ์ผ๋ก ๋ธ๋ผ์ฐ์ ์์ ์ง์ํ์ง ์๊ธฐ ๋๋ฌธ!
//๋ธ๋ผ์ฐ์ ์์ ์ ์๋ํ  ์ ์๋๋ก ๋ฒ๋ค๋ง์ ํด์ค์ผ๋ง ์๋ฌ๊ฐ ๋ฐ์ํ์ง ์์
require('./style.css');

//๐ฃ problem
// node src/index.js์ npm run build ์ ์๋ฌ๋ฉ์ธ์ง ๋ธ
//๐ Node.js๋ ๊ทธ ์์ฒด๋ง์ผ๋ก๋ CSS๋ฅผ ์ฝ์ ์ ์์ด ๋ฌธ๋ฒ ์๋ฌ ๋ฐ์ (๊ธฐ๋ณธ์ผ๋ก  JavaScript์ JSON ํ์ผ๋ง ์ดํดํ๋ค.)
//โ๏ธ ์๋ฌ ๋ฉ์ธ์ง: You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
// ๋ฐ๋ผ์! css๋ฅผ ์ํ loader๋ฅผ ์ถ๊ฐํ๋ค!
//https://webpack.js.org/loaders ์ฌ๊ธฐ์ ๋ค์ํ ๊ฒฝ์ฐ ํ์ํ ๋ก๋๋ค์ ์ฐพ์ ๋ณผ ์ ์์

//๐ก solution
//npm i -D css-loader style-loader
//css-loader: CSS๋ฅผ JSํ์ผ ๋ด์์ ๋ถ๋ฌ์ฌ ์ ์์ 
//style-loader: ๋ถ๋ฌ์จ CSS๋ฅผ style ์์ ๋ด์ ๋ด์์ค

const shout = (...sentences) => console.log(...sentences);
const shoutToHTML = (...sentences) => {
    const app = document.querySelector('#app');
    app.append(...sentences.map(sentence => {
        const shoutHere = document.createElement('div');
        shoutHere.className = 'shout';
        shoutHere.textContent = sentence;
        return shoutHere;
    }))
    return;
}

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis egestas feugiat elit, ac tincidunt neque vestibulum at. Mauris a eros sit amet urna efficitur tempus.";

const shoutOnce = _.once(shout); //์ฝ์์ ํ๋ฒ๋ง ์ฐ๊ธฐ
const shoutToHTMLOnce = _.once(shoutToHTML); //HTML์ ํ๋ฒ๋ง ์ฐ๊ธฐ

shoutOnce(loremIpsum);
shoutOnce(loremIpsum);
shoutOnce(loremIpsum);
shoutOnce(loremIpsum);

shoutToHTMLOnce(loremIpsum);
shoutToHTMLOnce(loremIpsum);
shoutToHTMLOnce(loremIpsum);
shoutToHTMLOnce(loremIpsum);