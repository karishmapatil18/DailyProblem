//Count distinct element in array

let arr = [2,14,7,2,2,14,8,8,9]
distinct(arr);

function distinct(arr){
    let map = new Map();
    

    for(let ele of arr){
      let key = ele;//2

      if(map.has(key)){
        let count = map.get(key)+1;
        map.set(key,count);
      }
      else 
      {
          map.set(key,1);
      }
     

    }
    console.log(map)
}