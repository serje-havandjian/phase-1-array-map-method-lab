const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
console.log(tutorials.length)


function titleCased(){
  return tutorials.map((tutorial)=>{
    // split apart each tutorial into individual words
    const tutorialWords = tutorial.split(" ")
    // capitalize each individual word
    const tutorialWordsUpper = tutorialWords.map((tutorialWord)=>{
      return tutorialWord[0].toUpperCase() + tutorialWord.substring(1)
    })
    // put back each word into a sentence in tutorial
    return tutorialWordsUpper.join(" ")
  })
}






// const titleCased = tutorials.map(createTitleCase)

// function createTitleCase(tutorials){
//   // let newTutorials = tutorials.split(" ")
//   // console.log(newTutorials)
//   // newTutorials = newTutorials[0][0].toUpperCase()
//   // return newTutorials
//   let newArray = []
//   for (let i = 0; i < tutorials.length; i++){
//     let split = tutorials[i].split()
    
//     newArray.push(split[0])
//     console.log(newArray)
//   }
//   }



// const titleCased = tutorials.map((create) => {
//   newTutorials = tutorial.toLocaleLowerCase()
  
//   for(let i = 0; i < newTutorials.length; i++){
//     newTutorials.split("")
//     return newTutorials
//   }

//   return newTutorials
//   newTutorials.split("")
//   // parse each word in each sentence in each element
//   // capitalize first letter of each word
//   // put back sentence
//   // move to next sentence

// })





// const titleCased = () => {
//   return tutorials
// }
