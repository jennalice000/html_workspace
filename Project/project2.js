const wordArray = [];

function addWord() {
  const wordInput = document.getElementById('wordInput');
  const word = wordInput.value.trim();

  if (word !== '') {
    wordArray.push(word);

    const wordList = document.getElementById('wordList');
    const listItem = document.createElement('div');
    wordList.style.width=500+'px';
    wordList.style.height=500+'px';
    listItem.textContent = word;
    listItem.classList.add('word-item');
    wordList.appendChild(listItem);

    

    // Position the word randomly
    const x = Math.random() * (wordList.width - 100);
    const y = Math.random() * (wordList.height - 100);
    listItem.style.left = `${x}px`;
    listItem.style.top = `${y}px`;

    // Apply animation class
    listItem.classList.add('animated');

    wordInput.value = '';
  }
}

// function checkMatchingWord() {
//   const matchingWordInput = document.getElementById('matchingWordInput');
//   const matchingWord = matchingWordInput.value.trim();

//   if (matchingWord !== '') {
//     const wordInput = document.getElementById('wordInput');
//     const word = wordInput.value.trim();

//     if (word === 'diary' && matchingWord === 'diary') {
//       document.body.style.top = '3000px';
//     } else if (word === 'Amola' && matchingWord === 'Amola') {
//       document.body.style.right = '3000px';
//     } else if (word !== matchingWord) {
//       alert('Please input correctly');
//     }
//   }
// }


// function checkMatchingWord() {
//   const matchingWordInput = document.getElementById('matchingWordInput');
//   const matchingWord = matchingWordInput.value.trim();

//   if (matchingWord !== '') {
//     const wordInput = document.getElementById('wordInput');
//     const word = wordInput.value.trim();

//     if (wordArray.includes(matchingWord) && matchingWord === 'diary') {
//       document.body.style.top = '3000px';
//       alert('Welcome to Stage 2!')
//     } else if (wordArray.includes(matchingWord) && matchingWord === 'gogo') {
//       document.body.style.left = '3000px';
//       alert('Welcome to Stage 3!')
//     } else if (word === matchingWord) {
//       // No action needed
//     } else {
//       alert('Please input correctly');
//     }
//   }
// }

function checkMatchingWord() {
  const matchingWordInput = document.getElementById('matchingWordInput');
  const matchingWord = matchingWordInput.value.trim();

  if (matchingWord !== '') {
    const wordInput = document.getElementById('wordInput');
    const word = wordInput.value.trim();

    if (wordArray.includes(matchingWord)) {
      if (matchingWord === 'diary') {
        document.body.style.top = '-3000px';
        alert('Welcome to Stage 2!');
      } else if (matchingWord === 'gogo') {
        document.body.style.left = '3000px';
        alert('Welcome to Stage 3!');
      } else if (word === matchingWord) {
        // No action needed
      } else {
        alert('Please input correctly');
      }
    } else {
      alert('Please input correctly');
    }
  }
}
