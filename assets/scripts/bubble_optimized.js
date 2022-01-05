// Optimized BubbleSort with noSwaps. Ideal for sorting arrays that are almost sorted
function bubbleSort(arr) {
    let noSwaps;

    for (let i = arr.length - 1; i > 0; i--) {

        console.log('LOOP AGAIN')
        noSwaps = true;

        for (let j = 0; j < i; j++) {

            console.log(arr, arr[j], arr[j + 1]);

            if (arr[j] > arr[j + 1]) {
              console.log('Swap!');
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }

        if (noSwaps) break;
    }
    return arr;
}

bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);
