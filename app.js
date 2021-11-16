// On Submit we execute events 1 and 2
// 1. Grab inputs from second paragraph

// 2. Display inputs in new paragraph and hide the first paragraph 


// Cache the DOM

const verbInputs = document.getElementsByClassName('verb-input')
const nounInputs = document.getElementsByClassName('noun-input')
const adjectiveInputs = document.getElementsByClassName('adj-input')
const adverbInputs = document.getElementsByClassName('adverb-input')


const verbs = document.getElementsByClassName('verb')
const nouns = document.getElementsByClassName('noun')
const adjectives = document.getElementsByClassName('adj')
const adverbs = document.getElementsByClassName('adverb')

const submitBtn = document.getElementsByClassName('submit')



submitBtn[0].addEventListener('click', () => {
  for (i = 0; i < nounInputs.length; i++ ) {
    nouns[i].textContent = nounInputs[i].value
    console.log('Nouns', nouns[i]);
  }
})



