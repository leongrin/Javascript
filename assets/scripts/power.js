

/*function power(a, b) {
    return a ** b
}


console.log(power(2, 4))*/


/*function factorial(numb){
    let result = 1;

    function helper(numb) {
        if (numb > 0) {
            result *= numb;
            helper(numb - 1)
        }
    }

    helper(numb)

    return result;

}

console.log(factorial(4));*/



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*function productOfArray(arr) {

    let result = 1;

    function helper(arr) {

        result *= arr[0];

        if (arr.length > 1) {
            helper(arr.slice(1))
        }
    }

    helper(arr);

    return result;
}


console.log(productOfArray([1, 2, 3]));*/





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





/*function recursiveRange(number){

    let result = 0;

    function helper(numb) {
        result += numb;

        if (numb > 0) {
            helper(numb - 1);
        }
    }

    helper(number);

    return result;

}

console.log(recursiveRange(6));*/




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




/*function fib(numb){

    let fibArray = [];

    for (let i = 0; i < numb; i++) {
        if (i === 0 || i === 1) {
            fibArray.push(1);
        } else {
            fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
        }
    }

    return fibArray[fibArray.length - 1];

}

console.log(fib(10));*/




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




/*function reverse(str){

    let reversedString;

    function helper(str) {
        let strArray = str.split('');
        let reversedArray = strArray.reverse();
        reversedString = reversedArray.join('');
    }

    helper(str);

    return reversedString;

}

console.log(reverse('awesome'));*/



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/*function isPalindrome(str){

    let reversedString;

    function helper(str) {
        let strArray = str.split('');
        let reversedArray = strArray.reverse();
        reversedString = reversedArray.join('');
    }

    helper(str);

    return reversedString === str;

}


console.log(isPalindrome('tacocat'))*/



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/*function someRecursive(arr, func){
    let result = false;

    function helper(arr) {
        for (let item of arr) {
            if (isOdd(item)) {
                result = true;
                break;
            }
        }
    }

    helper(arr);

    return result;
}

const isOdd = (numb) => numb % 2 !== 0;

console.log(someRecursive([6, 2, 4], isOdd));*/



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*function flatten(oldArr) {
    let newArr = []
    for (let i = 0; i < oldArr.length; i++) {
        if (Array.isArray(oldArr[i])) {
            newArr = newArr.concat(flatten(oldArr[i]))
        } else {
            newArr.push(oldArr[i])
        }
    }
    return newArr;
}


console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));

console.log([1, 2, 3, [4, 5] ].length);*/



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




/*function capitalizeFirst (arr) {
    let newArray = [];

    function helper(arr) {
        arr.forEach(item => {
            let newString = item[0].toUpperCase() + item.slice(1);
            newArray.push(newString);
        })

    }

    helper(arr);

    return newArray;
}


console.log(capitalizeFirst(['car','taco','banana']));*/





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




/*function nestedEvenSum (obj) {
    let sum = 0;

    function helper(obj) {
        for (let key in obj) {
            if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
                sum += obj[key];
            } else if (typeof obj[key] === 'object') {
                helper(obj[key])
            }
        }
    }

    helper(obj);

    return sum;
}


let obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}

let obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
};

/!*nestedEvenSum(obj1); *!/// 6
/!*nestedEvenSum(obj2);*!/ // 10

/!*console.log(nestedEvenSum(obj1));*!/
console.log(nestedEvenSum(obj2));*/





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




/*function capitalizeWords (arr) {
    let newArray = [];

    function helper(arr) {
        arr.forEach(item => {
            newArray.push(item.toUpperCase());
        })
    }

    helper(arr);

    return newArray;
}

let words = ['i', 'am', 'learning', 'recursion'];

console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']*/





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/*function stringifyNumbers(obj) {

    let newObj = {};

    function helper(obj) {
        for (let key in obj) {
            if (typeof obj[key] === 'number') {
                newObj[key] = obj[key].toString();
            } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
                newObj[key] = stringifyNumbers(obj[key]);
            } else {
                newObj[key] = obj[key];
            }
        }
    }

    helper(obj);

    return newObj;
}*/



/*function stringifyNumbers(obj) {
    let newObj = {};
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            newObj[key] = obj[key].toString();
        } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            newObj[key] = stringifyNumbers(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}*/



/*let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}


console.log(stringifyNumbers(obj));*/

/*{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}*/






////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/*function collectStrings(obj) {

    let newArray = [];

    function helper(obj) {
        for (let key in obj) {
            if (typeof obj[key] === 'string') {
                newArray.push(obj[key])
            } else if (typeof obj[key] === 'object') {
                helper(obj[key])
            }
        }

    }

    helper(obj);

    return newArray;
}


const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj));*/ // ["foo", "bar", "baz"])





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






function linearSearch(arr, num){
    let result;
    arr.forEach((item, index) => {
        if (item === num) {
            result = index;
        }
    });
    return  result === 0 ? 0 : result ? result : -1;
}

console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10));

console.log(linearSearch([10, 15, 20, 25, 30], 15));

console.log(linearSearch([100], 100));













