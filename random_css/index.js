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

  text.innerHTML = textList.join('');
  if (textList.length > 1) {
    let randomi = Math.floor(Math.random() * (textList.length - 1));

    for (let i = 0; i < randomi; i++) {
      const num = Math.floor(Math.random() * (textList.length - 1 + 1)) + 1;

      randomArr.push(num);
    }
    randomArr.map((data) => {
      document.querySelectorAll('span')[data - 1].classList.add('random');
    });
  } else {
    document.querySelectorAll('span')[0].classList.add('color');
  }
  textList = [];
});
