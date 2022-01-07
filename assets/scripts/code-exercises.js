
function solution(A) {
    let count = 1;
    let result = 0;

    let sortedArray = A.sort((a, b) => a - b);
    console.log(`sortedArray => ${sortedArray}`)

    for (let i = 0; i < sortedArray.length; i++) {
        if (i !== 0 && sortedArray[i] === sortedArray[i - 1]) {
            continue;
        }
        console.log(`sortedArray[i] => ${sortedArray[i]}`);
        console.log(`count => ${count}`);
        if (sortedArray[i] > 0 && sortedArray[i] > count) {
            console.log(`match`);
            result = count;
            break;
        }
        count++
    }

    if (result === 0) {
        result = sortedArray[sortedArray.length - 1] + 1;
    }

    return result ? result : 1;
}

let A = [1, 2, 3]; // 5

console.log(solution(A));












