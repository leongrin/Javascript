
function binarySearch(array, number){

    let toSum = 0;

    let result;

    function helper(array, number) {
        let half = Math.floor(array.length / 2);

        if (number === array[half]) {
            result = toSum + half;
        } else if (number > array[half]) {
            let newArray = array.slice(half + 1);
            toSum += half + 1;
            helper(newArray, number);
        } else if (number < array[half]) {
            let newArray = array.slice(0, half);
            helper(newArray, number);
        } else {
            result = -1;
        }
    }

    helper(array, number);

    return result;


}


console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95));























