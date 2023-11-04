//Implement a function that takes an array of integers as input and checks if there are any duplicate elements using hashing.


let array = [1,2];

checkDuplicates(array)
console.log(checkDuplicates(array))

function checkDuplicates(array) { /* Your JavaScript function body for checking duplicates goes here */
    let map = new Map();
    for(let ele of array){
      
        if(map.has(ele))
        {
          return "YES";
           
        }
        else{
           
             map.set(ele,1)
        }
       
    } 
   return "NO";
    
 }

 
