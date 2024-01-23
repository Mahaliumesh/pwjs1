/*

let temperature = 16

if(temperature < 20){
    console.log("it's really cold");
}else{
    console.log("it's really Hot")
}
console.log("Pw SKILL")









//Above 99,you get a life up
//Below that you don't get it
//A welcome message to game

let score = 110
let life = 3
let bullets = 1000
console.log('welcome to the PW Game');
if(score>99){
    console.log("you get a life up");
    score = score - 100
    life = life + 1
    let bullets = 2000
    console.log(`your bullets ae ${bullets}`);
}else{
    console.log("you don't get it")
}
console.log(`your score is ${score} and my life is ${life} and your bullets are ${bullets}`);











//Never Do it 

let balance = 500
if (balance > 100)
    console.log("Balance is above 500"),
    console.log("Balance is above 500"),
    console.log("Balance is above 500") //This is not a readable but it is also a trick to write this  way











    //build code rating system for pizzahut
    //1 star - poor
    //2 star - emm,ok
    //3 star - average
    //4 star - cool
    //5 star - great
    //6 star - awesome
    //7 star - nailed it

    let getStarFromUser = "8"
    let starInNumber = parseInt(getStarFromUser)

    if(starInNumber == 1){
        console.log("poor");
    }else if(starInNumber == 2){
        console.log("emm, ok");
    }else if(starInNumber == 3){
        console.log("average");
    }else if(starInNumber == 4){
        console.log("cool");
    }else if(starInNumber == 5){
        console.log(" great");
    }else if(starInNumber == 6){
        console.log("awesome");
    }else if(starInNumber == 7){
        console.log("I will get executed");
    }else if(starInNumber == 7){
        console.log("nailed it !!!");
    }else{
        console.log("I don't know that rating !!!")
    }














    switch(expression){
        case 1:
            console.log("poor");
        break;
        
        case 2:
            console.log("emm,ok");
            break;
        case 3:
            console.log("average");
            break ;
        case 4:
            console.log("cool");
            break;
        case 5:
            console.log("great");
            break;
        case 6:
            console.log("awesome") 
            break;
        case 7:
            console.log("nailed it !!!") 
            break;
            
        default:
            console.log("I don't know that rating is for");    
    }
    */










    /*


    //login system

    const email = "sanjit@google.com"

    //if email is present, ask for password. Otherwise ask for email

    if (email == "sanjit@google.com"){
        console.log("please enter your password");
    }else{
        console.log("please enter your email");
    }

    // if (email !=""){
    //     console.log("please provide a password");
    // }else{
    //     console.log("please enter your email");
    // }

    console.log(Boolean(email));

    //truthy falsy

    //falsy values

    /*
    false
    0          (-0 and BigInt On)
    ""
    null                                     this all the falsy values rest of this are truthy values
    undefine
    NaN*/ 














    //if user provides email, password, then allow login, else ask for it

    const email =""
    const password =""

    if(email){
        if(password){
            console.log("welcome to the app");
        }else{
            console.log("please the password");
        } 
    }else{
        console.log("please enter your email");
    }













    //logical Operation
    //&& -> and ; || => OR

    if(email && password){
        console.log("welcome to the app");
    }else{
        console.log("please enter email and password");
    }









    

    //allow user to signin with google or github

    const googleLogginToken = ""
    const githubLogginToken = ""

    if(googleLogginToken || githubLogginToken){
        console.log("welcome to the app");
    }else{
        console.log("Please login to view account");
    }














