const arr = [4,1,5,3,2,8,0]
selection(arr)
console.log(arr)

function selection(arr){
    let n = arr.length;

    for(let i = 0 ;i < n-1;i++){
        let smallest = i;//0

        for(let j = i+1;j<n;j++){
            if(arr[smallest] >arr[j]){//4
                smallest = j;
            }
        }
        let temp =  arr[smallest] ;
        arr[smallest] = arr[i];
        arr[i] = temp;


    }

}