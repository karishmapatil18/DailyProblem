//Reverse The Array



class Solution {
    reverseArray(arr, n) {
       let left = 0;
       let right = n-1 ; 
       
       while(left < right){
           let temp = arr[left];
           arr[left]= arr[right];
           arr[right]= temp;
           
           left ++;
          right --;
       }
       
       return arr ;
    }
}