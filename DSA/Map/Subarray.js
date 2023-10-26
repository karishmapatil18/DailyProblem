//Return true if there exist any subarray with sum 0.

let arr =  [5,-1,-8,4,4,3]

subarray(arr)

function subarray(arr){
    const prefix_arr = [];
    let num = 0 ;
    for (let i of arr){
         num = num + i;
         prefix_arr.push(num);
    }
    //[5,4,-4,0,4,7]

    let map = new Map(); 
    let index = 0;
    let start = null;
    let end =null;
    for(let pre of prefix_arr ){
        if(map.has(pre)){
            start = map.get(pre)+1;
            end = index;
        }
        else{
            map.set(pre,index)
        }
        index ++;
    }
   

    for(let i =start ; i <= end ; i++){
        console.log(arr[i])
    }


}