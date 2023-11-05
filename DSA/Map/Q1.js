//The program should display the first non-repeating character in the string. If there are no non-repeating characters, it should display a message indicating that.

let str = "abcdab";
findFirstNonRepeatingCharacter(str)

function findFirstNonRepeatingCharacter(str) {
    
    let map = new Map();

    let key = str.split("");
     if(map.has(key)){
        let count = map.get(key);
        map.set(key,count);
        
     }
     else{
         map.set(key,1);
     }
    
     console.log(map);
  }