const background = document.getElementById('background');
const passwordWindow = document.getElementById('passwordWindow');
const pwd = document.getElementById('pwd');
let pwdBackGround=background.querySelector=('.passwordBackground')

function popUp() {
  background.style.filter = ''
  if (pwd.value !== 'apple') {
    passwordWindow.classList.add('show');
    passwordWindow.classList.remove('hide');
  } else {
    passwordWindow.classList.add('hide');
    passwordWindow.classList.remove('show');
    background.style.filter = 'none'
  }
}

function reLock() {
  document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.altKey && e.shiftKey) {
      background.style.filter = ''
      passwordWindow.classList.remove('hide');
      passwordWindow.classList.add('show');
      e.preventDefault();
    }
  });
}

function passwordWindowInterval() {
  setInterval(popUp, 1000000);
}

//게임 단어들
let words = ["Adam", "Fruit", "red", "juicy", "ABC", "Tree", "Pine", "Mango", "Red", "Juicy", "abc", "adam", "hawa", "Hawa", "tree"];

// 게임 변수들
let wrapper = document.getElementById('wrapper');
let fallingWords = [];

//위에서 떨어지는 단어 생성
function createWords() {
    let newWord = document.createElement('div');
    newWord.innerText = words[Math.floor(Math.random() * words.length)];
    newWord.className = 'word';
  
    newWord.style.position = 'absolute';
    newWord.style.left = getRandomByRange(800, 1000) + 'px'; 
    newWord.style.top = '250px';
    newWord.style.fontSize = 17+'px'
  
    wrapper.appendChild(newWord);
    fallingWords.push(newWord);
  }
  

//랜덤함수
function getRandomByRange(min, max){
    let result=min + parseInt(((max-min)+1)*Math.random());
    return result;
}

//다시 업데이트되어 떨어지는 단어 생성
function updateWords() {
    for (let i = 0; i < fallingWords.length; i++) {
      let word = fallingWords[i];
      let top = parseInt(word.style.top) || 0;
      top += 5;
      word.style.top = top + 'px';
  
      if (top >= 600) {
        word.parentNode.removeChild(word);
        fallingWords.splice(i, 1);
        i--;
      }
    }
  }
  

addEventListener('load',function(){
    setInterval(createWords, 2000);
    setInterval(updateWords, 30);
    passwordWindowInterval();
    reLock();
})

pwd.addEventListener('input', function() {
  popUp();
  if (pwd.value === 'apple') {
    passwordWindow.classList.add('hide');
    passwordWindow.classList.remove('show');
    pwd.value = ""
  }
});
