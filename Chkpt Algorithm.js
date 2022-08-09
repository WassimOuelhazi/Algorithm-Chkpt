var text = "ameny et wassim"
var count =0
const vowels = ["a", "e", "i", "o", "u"]

for (let i=0;i<text.length;i++)

{
  if(text[i]== " ")
  {
  count ++
  }
}

var numcar = text.length - count
console.log("number of white spaces = "+ count);
console.log("number of caracters = "+ numcar);




function countVowelsIterative(text) {
  let counter = 0

  for (let letter of text.toLowerCase()) {
    if (vowels.includes(letter)) {
      counter++
    }
  }

  console.log(`The text contains ${counter} vowel(s)`)

  return counter
}

console.log(countVowelsIterative(text))