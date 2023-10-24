let arr = [1,3,2,1,2,2,1,1,3,5,5,5,4,4]

function calfreq(arr){
    let map = new Map();

   for(let ele of arr)
   {
       if(map.has(ele))
       {
          let f = map.get(ele)+ 1;
          map.set(ele,f)
       }
       else{

         map.set(ele,1);
       }
   }
   console.log(map);

}

calfreq(arr);

