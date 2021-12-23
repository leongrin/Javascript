/*function sameFrequency(n1, n2){

    n1 = n1.toString();
    n2 = n2.toString();

    if (n1.length !== n2.length) return false;

    for (let item of n1) {
        if (!(n2.includes(item))) {
            return false
        }
    }

    return true;
}


console.log(sameFrequency(34, 14));*/


/*function areThereDuplicates(...args) {

    const frequencyCounter = {};

    for (let item of args) {
        frequencyCounter[item] = (frequencyCounter[item] || 0) + 1;
    }

    console.log(`frequencyCounter => ${Object.entries(frequencyCounter)}`);

    for (let key in frequencyCounter) {
        if (frequencyCounter[key] > 1) {
            return true
        }
    }

    return false;
}

console.log(areThereDuplicates('a', 'b', 'c', 'a'))*/





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




/*function averagePair(array, number){
    const targetSum = number * 2;
    let result = false;

    array.forEach((item, index) => {

        for (let elem = index + 1; elem < array.length; elem++) {

            if (array[elem] + item === +targetSum) {
                result = true;
            }
        }
    });

    return result;
}

console.log(averagePair([1, 2, 3], 2.5))*/



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/*function isSubsequence(s1, s2) {

    let obj = {};

    [...s1].forEach((item, index) => {
        obj[item] = false;
        for (let elem = index; elem < s2.length; elem++) {
            if (item === s2[elem]) {
                obj[item] = true;
            }
        }
    });

    console.log(Object.entries(obj));

    for (let key in obj) {
        if (obj[key] === false) {
            return false
        }
    }

    return true;
}

console.log(isSubsequence('sing', 'sting'))*/




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





/*function maxSubarraySum(array, number){

    if (array.length < number) return null;

    let maxSum = 0;
    let currentSum = 0;

    for (let index = 0; index < array.length - (number - 1); index++) {

        let elem = 1;
        currentSum = array[index];

        while (elem < number){
            currentSum += array[index + elem];
            elem++
        }

        if (maxSum < currentSum) {
            maxSum = currentSum;
        }
    }

    return maxSum;
}


console.log(maxSubarraySum([100, 200, 300, 400], 2))*/



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/*function minSubArrayLen(arr, numb) {

    const reducer = (a, b) => a + b;

    if (arr.reduce(reducer) < numb) return 0;

    if (arr.includes(numb)) return 1;

    let index = 0;
    let len = 1;

    while (index < arr.length - (len + 1)) {
        if (arr.slice(index, (index + len)).reduce(reducer) >= numb) {
            return len
        } else if (index === arr.length - (len + 2)) {
            index = 0;
            len++;
        } else {
            index++
        }

    }


}


console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39));*/




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




function minSubArrayLen(array, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while (start < array.length) {
        // if current window doesn't add up to the given sum then
        // move the window to right
        if(total < sum && end < array.length){
            total += array[end];
            end++;
        }
            // if current window adds up to at least the sum given then
        // we can shrink the window
        else if(total >= sum){
            minLen = Math.min(minLen, end-start);
            total -= array[start];
            start++;
        }
        // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
        else {
            break;
        }
    }

    return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39));







//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






/*function findLongestSubstring(str) {
    let maxSum = 0;

    let index = 0;
    let count = 0;
    let uniqueArray = [];

    while (index < str.length) {

        if (!uniqueArray.includes(str[index])) {
            uniqueArray.push(str[index]);
            index++;
            maxSum = Math.max(maxSum, uniqueArray.length);
        } else {
            count++;
            index = count;
            uniqueArray = [];
        }
    }

    return maxSum;

}


console.log(findLongestSubstring('thisisshowwedoit'))*/



















