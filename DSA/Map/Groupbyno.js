let arr = ["2314","567","89","1432","765","98","657"];

sum(arr);

function sum(arr){
    let map = new Map();

    for(let ele of arr){
        
        let sum = 0 ;
        for(let a of ele.split("")){
           sum = sum + parseInt(a) ;
        }
        
        let key = sum ;
        if(map.has(key)){
            let temp = [];
            temp = map.get(key);
            temp.push(ele)
        }
        else{
            map.set(key,[ele])
        }
        
    }
    console.log(map)

}