let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey. The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(" ");//splits story into individual words into an array
//console.table(storyWords);

// ----- New story word array without unnecessaryWords ----- //
const unnecessaryWords = ['extremely', 'literally', 'actually' ];
const betterWords = storyWords.filter(storyWord => {
    //console.log(unnecessaryWords.includes(storyWord)); 
    if(!unnecessaryWords.includes(storyWord)){ //if not include
      return storyWord;
    };
});

// ----- Word Count ----- //
const wordCountOriginal = storyWords.length; //186
const wordCountBetter = betterWords.length; //179

// ----- Over Used Words Count (Based on betterWords) ----- //
//let overusedWords = ['really', 'very', 'basically'];//
const overUsedWords = () =>{
  let reallyCount = 0;
  let veryCount = 0;
  let basicallyCount = 0;
  let howManyTimesOverused = betterWords.forEach(betterWord => {
    if(betterWord === "really"){
        return reallyCount++;
      } else if (betterWord === "very"){
        return veryCount++;
      } else if (betterWord === "basically"){
        return basicallyCount++;
      }
    });

  console.log("Overused Words: Really, Very, Basically")
  console.log(`"Really": ${reallyCount} times.`);
  console.log(`"Very": ${veryCount} times.`);
  console.log(`"Basically": ${basicallyCount} times.\n`);
}

// ----- Total Amount of Sentence (Based on betterWords) -----//
const sentenceCount = () => {
  let sentenceCount = 0;
  betterWords.forEach(sentence => {
    if(sentence.includes(".") || sentence.includes("!")){
      sentenceCount++;
    };
  });

  storyWords.forEach(sentence => {
    if(sentence.includes(".") || sentence.includes("!")){
      sentenceCount++;
    };
  });

 console.log(`\nSentence Count (Original): ${sentenceCount} sentences.`)
 console.log(`Sentence Count (Improved): ${sentenceCount} sentences.\n`);
}

// ----- Word Frequency -----//
const wordFrequency = () => {
  const storyInLowerCase = story.toLowerCase();//change all to lowercase
  const storyNoSpclChar1 = storyInLowerCase.replace(/[^a-zA-Z0-9 ]/g,"");
  const storyNoSpclChar = storyNoSpclChar1.replace(/  +/g," ");

  console.log(storyNoSpclChar);
  const storyWordsNoSpclChar = storyNoSpclChar.split(" ");

 let mostWords = storyWordsNoSpclChar.reduce((acc,current)=>{
      acc[current] = 1 + acc[current] || 1   
      return acc
  },{});

  let highestFrequency = {word:null, frequency:0};
    storyWordsNoSpclChar.reduce((acc,current) => {
    acc[current] = acc[current] + 1 || 1;
    if(acc[current] > highestFrequency.frequency){
      highestFrequency.frequency = acc[current];
      highestFrequency.word = current; 
    }
    return acc;
  }, {});
  console.log("Word Frequency")
  console.log(`Most Used Word: ${highestFrequency.word}.`);
  console.log(`Frequency: ${highestFrequency.frequency} times.\n`);

  const userInput = prompt("If you would like to see a list of all words and its frequency, please type `yes`: ").toLowerCase();

 if(userInput === "yes"){
   console.log(mostWords);
 } else {
   console.log("Thank you, Bye!")
 }
};

const result = () => {
  console.log("Mini Linter\n");
  console.log("Original Story\n");
  console.log(story);

  console.log("\nImproved Story\n")
  console.log(betterWords.join(" "));

  console.log(`\nWord Count (Original): ${wordCountOriginal} words.`);
  console.log(`Word Count (Improved): ${wordCountBetter} words.`);

  sentenceCount();
  overUsedWords();
  wordFrequency();
}

result();

/*
// ----------- Another Way: Word Frequency --------- //

let wordFrequencyCount = {};
let mostWords = storyWords.forEach(mostWord => {
  if(wordFrequencyCount[mostWord]){
    wordFrequencyCount[mostWord] += 1;
  } else {
    wordFrequencyCount[mostWord] = 1;
  };
  return wordFrequencyCount;
});
console.log(wordFrequencyCount);

// ----- OR -----//

let wordFrequencyCount ={}
for(let i = 0; i < storyWords.length; i++){
  if (wordFrequencyCount[storyWords[i]]){
    wordFrequencyCount[storyWords[i]] += 1;
  } else {
    wordFrequencyCount[storyWords[i]] = 1;
  }
}
console.log(wordFrequencyCount);


// ----------- Another Way: Over Used Words --------- //
let howManyTimesOverused = betterWords.filter(betterWord => {
 if(overusedWords.includes(betterWord)){
    return overusedWords;
  };
})
console.log(howManyTimesOverused); //produce an array of the overUsedWords;

let reallyCount = 0;
let veryCount = 0;
let basicallyCount = 0;
let eachWordFrequency = howManyTimesOverused.forEach(howMany => {
//  console.log(howMany) ;
 if(howMany === "really"){
    reallyCount++;
  } else if (howMany === "very"){
    veryCount++;
  } else if (howMany === "basically"){
    basicallyCount++;
  }
});
console.log(`"Really" has been used ${reallyCount} times in this story`);
console.log(`"Very" has been used ${veryCount} times in this story`);
console.log(`"Basically" has been used ${basicallyCount} times in this story`);

*/