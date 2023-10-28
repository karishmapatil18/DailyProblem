const arr = [2,5,1,9,7]
n = arr.length;
element = 23
index = 3;
updateArray(arr,index, element);

function updateArray(arr,index, element){
    for(let i = 0 ; i < n ; i++){
        if(index == i){
            
            arr[i] = element;
        }
        
    }
    console.log(arr);
 }