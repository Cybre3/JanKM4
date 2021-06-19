// function main(anArray, someFunction) {
//     return anArray.reduce((accumulator, currentVal) => {
//         // acc = empty array here ..

//         // calling someFunction <- (acting as map)  arguments == (anArray original array vals, currentVal mapped values)
//         accumulator.push(someFunction.call(anArray, currentVal)); // calling on "anArray"... currentVal is the arg being passed into the function

//         return accumulator;
//     }, []); // identifies accumulator as an array to be pushed to
// }


function main(arr, outputOfEachNumTimes2Function){
    // 'arr' is the original 'nums' arr: [1, 2, 3, 4, 5]
    // 'outputOfEachNumTimes2Function' is the annonymous function '(item) => item * 2)' -> which we are calling a map because it is converting a number by multiplying it by 2
    // NOTE: to be clear it is not a .map() method, it is just a regular function.
    /* like so: 
        (item) => {   // <- annonymous, no name
            return item * 2;
        } 
    */

    return arr.reduce((arrBox, eachNumFromArr) => {
        /* 
        -> arr.reduce() iterates through eachValue of an/the array/'arr', until it reaches the end of 'arr'. Which is what eachNumFromArr represents; each number in the array 'arr'.
        -> The arrBox in this case will be an empty array, which has identified in the second argument as the initial value; at the end of the .reduce() method. 
        // Quick simplified look: arr.reduce(arrowFunction, []);
        -> .reduce() arguments are: 
                an annonymous function '(item) => item * 2)' as argument1 
                initalValue/[] as argument2. 
        */

        // console.log(outputOfEachNumTimes2Function(eachNumFromArr)) // UNCOMMENT ME TO TEST, will print each output of '(eachNumFromArr) => eachNumFromArr * 2)', not in array form -> 2 \n 4 \n 6 \n 8 \n 10
        /* like so:
            outputOfEachNumTimes2Function(item){
                item * 2;
            }
        */

        // inside of function main(), you gave the anonymous function, ((item) => item * 2), a name. So now you can call/use it as if you called/were using a regular function you created.

        // console.log(outputOfEachNumTimes2Function.call(this)) // UNCOMMENT ME, YOU WILL GET NaN BECUASE 'this' REPRESENTS 'arr'. 'arr', a whole array with numbers, times 2 equals NaN.
        
        /* 
        So now you have to use '.call()' to call the function you named 'outputOfEachNumTimes2Function', which is the annonymous function '(item) => item * 2)', and pass in 'this', which is the 'arr'. You have to indicate a collection of data or where you are getting each item in this case. You also have to attach/assign something/number to the variable 'item'; to give it purpose.
            turns into:
             return for(let eachNum of arr) {
                        outputOfEachNumTimes2Function(eachNum);
                    }                
                -> will return each number of arr times 2
            Where:
                function outputOfEachNumTimes2Function(item) {
                    return item * 2;
                }
        */

        arrBox.push(outputOfEachNumTimes2Function.call(this, eachNumFromArr)); 
        /* 
        '.call()' says: 
            I'm calling a funciton, any function, to come execute it's functionality. 'outputOfEachNumTimes2Function', the annonymous function, comes a runnin.
        'outputOfEachNumTimes2Function' says: 
            Okay...my function is: I can double any single 'item' for you.
        .call() says: 
            Okay, here take everything, 'this', -> my array 'arr'.
        'outputOfEachNumTimes2Function' says: 
            Thats to much for me, does not compute ???? NaN
        parent function .reduce() says: 
            Here, let me give it to you peice by piece and when you are done with each one, put it in this box so I can return/show what you have done to your grandparent that is calling me. 
        */

        // you must/have to use .call() with the function 'outputOfEachNumTimes2Function', because you need an output to push into the arrBox

        return arrBox; 
        // Because you are console logging main, at the bottom, you have to return until it/the result, 'arrBox', reaches the function in which you are console logging; 'main'.
        //  In other words, what you really want is the arrBox. So now you have to return the reduce method, to get access to arrBox, which you returned.

    }, []);
}

let nums = [1, 2, 3, 4, 5];
console.log(main(nums, (item) => item * 2));

/* 
Complete version without comments
    function main(arr, outputOfEachNumTimes2Function){
        return arr.reduce((arrBox, eachNumFromArr) => {
            arrBox.push(outputOfEachNumTimes2Function.call(this, eachNumFromArr));
            return arrBox;
        }, []);
    } 
*/
