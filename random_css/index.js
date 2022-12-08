const button = document.querySelector('.button');
const text = document.querySelector('#text');

button.addEventListener('click', (event) => {
  let randomArr = [];
  let textList;
  if (text.innerHTML.match(/<(\/span|span)([^>]*)>/gi)) {
    let newWord = text.innerHTML.replace(/<(\/span|span)([^>]*)>/gi, '');
    textList = newWord.split('').map((data) => {
      return `<span>${data}</span>`;
    });
  } else {
    textList = text.innerHTML.split('').map((data) => {
      return `<span>${data}</span>`;
    });
  }

  console.log('버튼누르고맵', textList);
  text.innerHTML = textList.join('');
  if (textList.length > 1) {
    //난수의 갯수 정하기
    let randomi = Math.floor(Math.random() * (textList.length - 1));
    console.log('randomi', randomi);

    //그 수만큼 난수 만들기
    for (let i = 0; i < randomi; i++) {
      const num = Math.floor(Math.random() * (textList.length - 1 + 1)) + 1;

      randomArr.push(num);
    }
    console.log('배열', randomArr);
    randomArr.map((data) => {
      document.querySelectorAll('span')[data - 1].classList.add('random');
    });
  } else {
    document.querySelectorAll('span')[0].classList.add('color');
  }
  textList = [];
});
