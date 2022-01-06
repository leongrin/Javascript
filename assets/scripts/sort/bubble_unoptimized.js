// UNOPTIMIZED VERSION OF BUBBLE SORT
function bubbleSort(arr){

  for(let i = arr.length - 1; i > 0; i--){

    console.log('LOOP AGAIN')

    for(let j = 0; j < i; j++){

      console.log(arr, arr[j], arr[j+1]);

      if(arr[j] > arr[j+1]){

        console.log('Swap!')
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;         
      }
    }
  }
  return arr;
}


console.log(bubbleSort([8,1,2,3,4,5,6,7]));


// ES2015 Version
/*function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}*/


