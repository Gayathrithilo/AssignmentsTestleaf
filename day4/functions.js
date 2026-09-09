//Task 1: Function Declaration
function userProfile(name){
    console.log(`Hello ${name}!`)
}
userProfile("Gayathri")

//Task 2: Arrow Function
const double = number => number * 2
console.log(double(6));


//Task 3: Anonymous Function
function anonymous(){
    setTimeout(()=>{
        console.log("This message is delayed by 2 seconds")
    },2000);
}
anonymous();

//Task 4: Callback Function
function getUserData(callback){
    setTimeout(() => {
        callback();
    }, 3000);
}

getUserData(() => {
    console.log("Call Back Function");
});