function selectionSort(arr) {

    for (let ia = 0; ia < arr.length; ia++) {

        const swap = (arr, ia, indexMinNum) => [arr[ia], arr[indexMinNum]] = [arr[indexMinNum], arr[ia]]

        let indexMinNum = ia;

        for (let ib = ia; ib < arr.length - 1; ib++) {

            if (arr[ib] > arr[ib + 1]) {

                if (arr[indexMinNum] > arr[ib + 1]) {
                    indexMinNum = ib + 1;
                }

            }
        }

        swap(arr, ia, indexMinNum);

        /*let temp = arr[ia];
        arr[ia] = arr[indexMinNum];
        arr[indexMinNum] = temp;*/
    }

    return arr;
}


console.log(selectionSort([34, 22, 10, 19, 17]));









