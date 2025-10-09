//the 0 of n
//the executiontime time of the algorithm grows LINEARLY in proportion to the size of the input data (n) i.e if we have 
//have an array of five length it is faster time to execute information that anarray of length 100

let names = ["femi","tunde","kunle"]
function searchName(name){
    for (let index = 0; index < names.length; index++) {
        const element = names[index];
        if(element === names){
            return name
        }
        
    }
}
searchName()

//the 0 of 1 - it also know as k time , implies or signify that the time of execution of an algorithm remaims k
//regardless the lenght

//the 0 of n^2- it indicate that the algorithm execution time grows QUADRATICALLY with the size of the input data

for (let i = 0; i < 10; i++) { 
    console.log(i);
    for (let j = 0; j < 10; j++) {
   console.log(`finding pairs : ${i}:${j}`);
   
        
    }
    
    
}