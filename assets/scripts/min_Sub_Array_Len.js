
function minSubArrayLen(array, numb) {

    let minLen = Infinity;

    array.forEach((item, index) => {
        if (item > numb) {
            minLen = 1;
        }
    });

    let len = 2;
    let reducer = (a, b) => a + b;

    for (let index = 0; index < array.length; index++) {
        if (array.slice(index, index + len).reduce(reducer) >= numb  && array.slice(index, index + len).length < minLen) {
            minLen = array.slice(index, index + len).length
        }
        if (index === array.length - 1  && len <= array.length) {
            index = 0;
            len++;
        }
    }

    return minLen === Infinity ? 0 : minLen;
}



console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));




