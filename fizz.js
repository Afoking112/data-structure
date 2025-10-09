function fizzBuzz(n){
    for (let index = 0; index <= n; index++) {
       
        if (index % 3 == 0 && index % 5 == 0) {
           console.log("FizzBuzz");
           continue;
        }else if(index % 3 == 0){
            console.log("Fizz");
            continue;
        }else if(index % 5 == 0){
            console.log("Buzz");
            continue;
        }
         console.log(index);
    }
}
fizzBuzz(50)

function capital(sentence){
    let newSentence = sentence.split(" ")

    for (let index = 0; index < newSentence.length; index++) {
        let element = newSentence[index]
        newSentence[index] = element[0].toUpperCase() + element.substr(1)
    }
    return newSentence.join(" ")
}
console.log( capital("do my assigment"));
//20 Twenty
// chunking array
//arr =[1,2,3,4,5,6,7,8,9]
//function chunkingArr(){
//if its divided by three 
//the output = [[123][456]]
//}
let array = [1,2,3,4,5,6,7,8,9]
function chunkArray(num){
    let setResult = []
    for (let index = 0; index < array.length; index += num) {
       setResult.push(array.slice(index,index +  num))
        
    }
    return setResult
}
console.log(chunkArray(3));

let ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
              "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen",
              "sixteen", "seventeen", "eighteen", "nineteen"];
 let tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];


function checkNum(params){
if(params === 100){
return "One hundred"
}else if (params < 20){
    return ones[params]
}else{
    let hun = Math.floor(params / 10)
    let Zeros = params % 10
    return tens[hun]+(Zeros?" "+ones[Zeros]:"")
}
}
console.log(checkNum(96));

