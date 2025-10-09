// Data => is the collection of information or details about a particular object or figure.
// Structure => is how you save, format, process the data
// Algorithm => This is a set of instruction or a step by step rule on how to solve a problem.
// The Big 0 => Time and Space complexity of an algorithm.

//Write an algorithm that adds 2 to every number in an array.

import { count, log } from 'console';
import {performance} from 'perf_hooks';

const num = [3, 7, 12, 6, 34, 19];

async function addTwo(sum){
  for (let i = 0; i < num.length; i++) {
  num[i] += sum;
}

return num;}
;
console.log(addTwo(2));
console.log(addTwo(5));

async function fetchUser(){
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return await response.json()
}
fetchUser()

async function dotThen(){
  fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json()).then((data)=>{
    return data
  })
}
dotThen()


const normalizedPath =  `file:///${process.argv[1]}`.replace(/\\/g, '/');
console.log(normalizedPath);
console.log(import.meta.url);

if(import.meta.url === normalizedPath){
  const t0 = performance.now();
  addTwo().then(()=>
  console.log(`[time] ${((performance.now( ) - t0) / 1000).toFixed(4)}s`))

  fetchUser().then(()=>
  console.log(`[time] ${((performance.now( ) - t0) / 1000).toFixed(4)}s => Without then`))

  dotThen().then(()=>
  console.log(`[time] ${((performance.now( ) - t0) / 1000).toFixed(4)}s => dot Then`))
}
function isPalindrome(word){
  let reverse_word = ""
  let i = word.length -1
  while(i >= 0){
    if(word[i] == " "){
        i--
        continue;
    }
    reverse_word += word[i]
    i--
  }
  console.log(reverse_word)
  return word.replaceAll(" ","").toLowerCase() == reverse_word.toLowerCase()


}

console.log(isPalindrome("race car"));

function rightAngleTriangle(params){
    let star = ""
    for (let index = 0; index <= params-1; index++) {
        star += "*"
      
        console.log(star);
        
        
    }
}
rightAngleTriangle(5)
//min
//max
//sort alphabetical = acending & decending order
//lexographical order


let names = ["Daniel","Opemipo","Afolabi","Precious","Ayomide","ayo"]
function findName(myname){
  let found = false
  for (let index = 0; index < names.length; index++) {
    if (myname === names[index]) {
   console.log("Name found");
     found = true
     break
      
    }
    
    
  }
if(!found){
  console.log("Name not found");
  
}
}


findName("Afolabi");
;//serch for name and return the name is in the list

function maxLength(){
  let long = names[0]
  for (let i = 0; i < names.length; i++) {
    if(long.length < names[i].length)
    long = names[i]
  }
  console.log("Longest word is ",long);
  
}
maxLength()//the longest name

function minLength(){
  let short = names[0]
  for (let i = 0; i < names.length; i++) {
    if(short.length > names[i].length)
    short = names[i]
  }
  console.log("shortest word is ",short);
  
}

minLength()//the shortest

function acending(){

let sorted = [...names]
for (let i = 0; i < sorted.length; i++) {
 for (let j = i +1; j < sorted.length; j++) {
  if (sorted[i] > sorted[j]) {
    let swap = sorted[i]
    sorted[i] = sorted[j]
    sorted[j] =swap
  }
  
 }

  
}
  console.log("Acending",sorted);
}
acending()

function decending(){
let sorted = [...names]
for (let i = 0; i < sorted.length; i++) {
 for (let j = i +1; j < sorted.length; j++) {
  if (sorted[i] < sorted[j]) {
    let swap = sorted[i]
    sorted[i] = sorted[j]
    sorted[j] = swap
  }
  
 }
  
  
}
console.log("Decending",sorted);
}
decending()

function checkWord(params) {
  let count = 0;

  for (let i = 0; i < names.length; i++) {
    if (names[i] === params) {
      count++;
    }
  }

  console.log(params, "appears", count, "times");
}

checkWord("Opemipo");