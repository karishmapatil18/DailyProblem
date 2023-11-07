//Group the anagram in array.

let arr = ["triangle","adfgs","dsfga","abc","cab","bca"];
anagram(arr);
function anagram(arr){
    let map = new Map();
    for(let ele of arr)//abc
    {
      
        let key = ele.split("").sort().join("")//abc

        if(map.has(key)) {
            let temp = [];
            temp = map.get(key);
            temp.push(ele);
            map.set(key,temp)
        }
        else{
            map.set(key,[ele]);
        }


    }
    console.log(map);
}