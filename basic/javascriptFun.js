//Dealing with function in javascripts
function reusablCode (){
    console.log("I am inside a function ")
}reusablCode();

//passing parrament into a function. there are placeholder
function addTwoNumber (a,b){
     console.log(a+b);
}
addTwoNumber(3,6);

//function Next in Line
const nextInLine =(arr, item)=>{
    arr.push(item);
    return arr.shift();
}
var testArr = [3,4,5,6,0,10];
console.log("Before:" + JSON.stringify(testArr)); //passing array into json
console.log(nextInLine(testArr,90));
console.log("After: " + JSON.stringify(testArr));

//using if else statement with a function
const BooleanFunc = (isAdmin)=>{
    if(isAdmin){
        return 'He an admin';
    }
    return 'Not admin';
}
console.log(BooleanFunc(true));

//Comparsion using equality Operator
const testEqual = (evaluate)=>{
    if (evaluate == 12){
        return 'Equal';
    }
    return 'Not Equal';
}
console.log(testEqual(12));


//omparsion with the strict Equality operator
const testStrictEqual = (evaluate)=>{
    if (evaluate === 12){
        return 'Equal'; 
    }
    return 'Not Equal';
}
console.log(testStrictEqual('12'));


 


