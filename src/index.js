const _ = require('./underbar.js')
//🛑 index.html 브라우저에서 열면 오류 메세지 남
//require 문법은 Node.js 문법으로 브라우저에서 지원하지 않기 때문!
//브라우저에서 잘 작동할 수 있도록 번들링을 해줘야만 에러가 발생하지 않음
require('./style.css');

//💣 problem
// node src/index.js와 npm run build 시 에러메세지 뜸
//🛑 Node.js는 그 자체만으로는 CSS를 읽을 수 없어 문법 에러 발생 (기본으론 JavaScript와 JSON 파일만 이해한다.)
//✉️ 에러 메세지: You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
// 따라서! css를 위한 loader를 추가한다!
//https://webpack.js.org/loaders 여기서 다양한 경우 필요한 로더들을 찾아 볼 수 있음

//💡 solution
//npm i -D css-loader style-loader
//css-loader: CSS를 JS파일 내에서 불러올 수 있음 
//style-loader: 불러온 CSS를 style 요소 내에 담아줌

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

const shoutOnce = _.once(shout); //콘솔에 한번만 찍기
const shoutToHTMLOnce = _.once(shoutToHTML); //HTML에 한번만 찍기

shoutOnce(loremIpsum);
shoutOnce(loremIpsum);
shoutOnce(loremIpsum);
shoutOnce(loremIpsum);

shoutToHTMLOnce(loremIpsum);
shoutToHTMLOnce(loremIpsum);
shoutToHTMLOnce(loremIpsum);
shoutToHTMLOnce(loremIpsum);