
function naiveSearch(long, short){

    let count = 0;

    for(let i = 0; i < long.length; i++){

        for (let j = 0; j < short.length; j++) {

            console.log(`long[i+j] => ${long[i+j]}`);
            console.log(`short[j] => ${short[j]}`);

           if(short[j] !== long[i+j]) {
               console.log('Inside IF')
               break
           }

           if(j === short.length - 1) {

               console.log(`j === short.length - 1 => ${j} === ${short.length} - 1`);
               count++
           }
        }

    }
    return count;
}

console.log(naiveSearch("lorie loled", "lol"));
