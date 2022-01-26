const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('.figure-part');

const words = ['application', 'programming', 'interface', 'wizard'];

// function getData() {
//   fetch('https://random-word-api.herokuapp.com/word?number=10')
//   .then(res => res.json())
//   .then(data => data.map(word => {
//     words.push(word)
//     console.log(words)
//   }))
//   .catch(err => console.log(err))
// }
// getData()

let selectedWord = words[Math.floor(Math.random() * words.length)]

const correctLetters = []
const wrongLetters = []

//Show hidden word 
function displayWord(){
  wordEl.innerHTML = `
  ${selectedWord
    .split('')
    .map(letter => `
    <span class="letter">
      ${correctLetters.includes(letter) ? letter : ''}
    </span>
    `).join('')
  }`

  const innerWord = wordEl.innerText.replace(/\n/g, '')

  if(innerWord === selectedWord) {
    finalMessage.innerText = 'Congratulations! You Won! 🥰'
    popup.style.display = 'flex'
  }
}

displayWord()