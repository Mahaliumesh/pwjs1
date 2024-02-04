const isEvenOrOdd = function (num){
    return num % 2 == 0;
}

// Is this a named function expression ?
// Yes

// how to call it ?
// You can use the name of the variable inside which you've stored the function to call it.

const result = isEvenOrOdd(45);
console.log(result);