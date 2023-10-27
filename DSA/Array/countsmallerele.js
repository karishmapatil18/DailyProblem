//Given an unsorted array arr[] of size N containing non-negative integers. You will also be given an integer X, the task is to count the number of elements which are strictly smaller than X. The given integer may or not be present in the array given.

    let arr = [4 ,5, 3, 1, 2];
    let n = 5;
    let x = 3;
    
    console.log(smallerThanX(arr,n,x))



    function smallerThanX(arr,n,x){
      let count = 0 ;
      for(let i =0 ;i < n ;i++ ){
         
         if(arr[i] < x){
             count ++ ;
         } 
         
      }
      return count ;
    }
