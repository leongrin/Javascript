
function getDigit(num, dig) {
    return num.toString().split('').reverse()[dig] ? num.toString().split('').reverse()[dig] : 0;
}

function digitCount(num) {
    return num.toString().length;
}

function mostDigits(arr) {

    let maxDig = 0;

    for (const item of arr) {
        maxDig = Math.max(maxDig, digitCount(item))
    }

    return maxDig;

}


function radixSort(nums) {

    let maxDigitCount = mostDigits(nums);

    for (let k = 0; k < maxDigitCount; k++) {

        let digitBuckets = Array.from({length: 10}, () => []);

        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            console.log(`nums[i] => ${nums[i]}, k => ${k}, digit => ${digit}`);
            digitBuckets[digit].push(nums[i]);
        }

        nums = [].concat(...digitBuckets);
    }

    console.log(nums);

    return nums;
}


/*console.log(getDigit(12345, 1));  // 4*/

/*console.log(digitCount(12345)); // 5*/

/*console.log(mostDigits([1234, 56, 7]));  // 4*/

radixSort([1234, 56, 7]);

