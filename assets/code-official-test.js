
/*function solution(message, K) {

    let indexCut;

    for (let i = Math.min(K, message.length - 1); i >= 0; i--) {
        console.log(`i => ${i}`);
        if (message.length < K) {
            indexCut = message.length;
            break;
        }
        if (message[i] !== ' ' && message[i + 1] === ' ' || undefined) {
            indexCut = i + 1;
            break;
        }
    }

    return message.slice(0, indexCut);
}


console.log(solution('Codility We test coders', 14));*/



/*function solution(P, S) {
    let totalPassengers = P.reduce((a, b) => a + b);
    let sortedSmallCars = S.sort((a, b) => a - b);
    let carsNeeded = 1;

    for (let i = sortedSmallCars.length - 1; i >= 0; i--) {
        if (sortedSmallCars.slice(i).reduce((a, b) => a + b) >= totalPassengers) {
            console.log(`sortedSmallCars.slice(i) => ${sortedSmallCars.slice(i)}`);
            carsNeeded = sortedSmallCars.slice(i).length;
            break;
        }
    }


    return carsNeeded;
}


console.log(solution([1, 4, 1], [1, 5, 1]));*/




function solution(A) {
    let totalPollutionGoal = (A.reduce((a, b) => a + b)) / 2;
    let filtersNeeded = 0;
    let sortedFactories = A.sort((a, b) => a - b);

    console.log(`totalPollutionGoal => ${totalPollutionGoal}`);
    console.log(`sortedFactories => ${sortedFactories}`);

    for (let i = sortedFactories.length - 1; i >= 0; i--) {

        if (sortedFactories.reduce((a, b) => a + b) <= totalPollutionGoal) {
            console.log('inside 1')
            break;
        }

        if (sortedFactories[i + 1] > sortedFactories[i]) {
            console.log(`i => ${i} sortedFactories[i + 1] > sortedFactories[i] => ${sortedFactories[i + 1]} > ${sortedFactories[i]}`)
            sortedFactories[i + 1] = sortedFactories[i + 1] / 2;
            filtersNeeded++
            i++;
            continue;
        }

        filtersNeeded++

        sortedFactories[i] = sortedFactories[i] / 2;

        if (i === 0 && sortedFactories.reduce((a, b) => a + b) > totalPollutionGoal) {
            i = sortedFactories.length - 1;
        }

        console.log(`${i} => ${sortedFactories.reduce((a, b) => a + b)}`);

        console.log(`filtersNeeded => ${filtersNeeded}`);
    }

    return filtersNeeded;
}


console.log(solution([5, 19, 8, 1]))












