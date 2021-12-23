

function countUniqueValues(array) {

    const uniqueValuesArray = [];

    array.forEach(item => {
        if (!uniqueValuesArray.includes(item)) {
            uniqueValuesArray.push(item);
        }
    });

    return uniqueValuesArray.length;

}


console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
