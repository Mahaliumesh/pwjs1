
function isEvenOrOdd(x,fn){
    
    return x%2 == 0;
    //call fn here
    fn();
    return x%2 == 0;
}

isEvenOrOdd(10, function process(){
    console.log("Processing......")
    console.trace("Trace of the function");
});
