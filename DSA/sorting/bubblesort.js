const array = [7,5,2,3,1,9]
console.log(array)

bubblesort(array);
console.log(array)


function bubblesort(array){
    let n = array.length;

    for(let i = 0 ; i < n-1 ;i++)
    {
        for(let j= 0 ; j < n-i-1 ;j++){

            if(array[j] > array[j+1]){
                 let temp = array[j];
                 array[j] = array[j+1];
                 array[j+1] = temp;
            }
        }
    }

}