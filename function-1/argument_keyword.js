/*
function addNumbers(){
    //no parameters passed in the function
    console.log(arguments[0]);
}
//variable arguments
addNumbers(9, 1, 2);
addNumbers(6, 1, 2, 0, 1);
addNumbers(5, 8, 9);
*/



//              Add Array


function addNumbers(){
    //no parameters passed in the function
    let result = 0;
    for(let i = 0; i < arguments.length; i++){
        //i denotes index of array 0-based
        result += arguments[i];
    }
    return result;
}
//variable arguments
console.log(addNumbers(9, 1, 2));
console.log(addNumbers(6, 1, 2, 0, 1));
console.log(addNumbers(5));