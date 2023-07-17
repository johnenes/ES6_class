// constructing string with variable

var learningClass1 = "the second class which will start by 11 : 00 am \n";
var learningClass2 = " Lesson \' Remember to reviste the last lesson before this current class beinginng' ";

var stringCons  = "welcome to " + learningClass1 + learningClass2;

console.log(stringCons);



//Appending varaible to string using +=


var rate = "awesome!";
var lesson = "Today class was ";
lesson += rate;
console.log(lesson);


//finding the length of a string 
lengthOfString  = " communication is the powerful tool for exploit within your communitty";
console.log(lengthOfString.length)


//Bracket Notion is a way to get a character in a specific index.
var firstName = "";
var fullName = "Johh eneojo isreal nelson";
 indexName =  fullName[17];
 console.log(indexName);


// To get the last charact of any length in the string


getNthCharacter = fullName[fullName.length -1];
console.log(getNthCharacter);


//array 

var  arrayElement = ['john', 123];

var dimessionArray = [[12,34,25,67],[453,65,78,90],[32,65,78,34]];
var access3IndexofIndex1 = dimessionArray[2][1]; //65
console.log(access3IndexofIndex1)


//manipulating Array using push function
pushf = dimessionArray.push([90,2]) //added new array to the end of the array
console.log(pushf) //provide the length of the array
console.log(dimessionArray);


//manipulating array using pop  
var popArray = dimessionArray.pop();
console.log(popArray)// [90,2] remove
console.log(dimessionArray)


//shift function of array remove the first emelment of an array
var shiftH =  dimessionArray.shift(); //[12,34,25,67] remove
console.log(shiftH)

//unshift fucntion array push element to the begining of array
var unshiftArray  = dimessionArray.unshift([45,67,88,90]);
console.log(dimessionArray);
console.log(unshiftArray);


//shoppinglist

var cat = [
    ['cereal', 3],
    ['milk',   10],
    ['rice',   20],
    ['juice',   3],
    ['eggs',    2]
];

//remove the firstItems in the list
 removeItemFromCat = cat.shift();


//The slice operations take a positional argument (index) and 
sliceArray = cat.slice(1,2);
console.log(sliceArray); 
 //Index of array
 indexDimention = dimessionArray.indexOf('cereal');
 console.log(indexDimention)

//Iterating over array
cat.forEach(function(element, index){
    console.log(index + ' ' +  element);
});

//Iterate using forEach of array function
cat.forEach((element, index )=>{
    console.log(`Index : ${index}  Item-List : ${element}`);
});

console.log('')
//using map function for to interate through array
cat.map(function(value, key){
    console.log(`key: ${key}  value: ${value}`);
});

//using map array fuction 
cat.map((value , key)=>{
    console.log(`key: ${key}   value: ${value}`)
});
 








