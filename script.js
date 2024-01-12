// -------------------------------------1-----------------------------------------
// 1. greet with both names:

// let obj = {
//     firstName:"Shivam",
//     lastName:"Tripathi"
// }

// console.log(`Good Morning, ${obj.firstName} ${obj.lastName}`);
// console.log(`Good Morning, ${obj.firstName + " " + obj.lastName}`);

// --------------------------------------2----------------------------------------
// 2. greet if gender is male

// let obj = {
//     firstName:"Shivam",
//     lastName:"Tripathi",
//     Gender:"male"
// }

// if(obj.Gender=="male"){
//     console.log(`Welcome ${obj.firstName}, You can join this group!`);
// }

// ---------------------------------------3-------------------------------------------
// 3. write a code which prints from 0 to 1000(for loop)

// for(let i=0;i<=1000;i++){
//     console.log(i);
// }

// ---------------------------------------4-------------------------------------------
// 4. write a code to calculate sum from 0 to 1000 and print at the end

// let sum=0;
// for(let i=0;i<=1000;i++){
//     sum = sum + i;
// }

// console.log("sum from 0 to 1000 is " + sum);

// ---------------------------------------5-------------------------------------------
// 5. write a prog.to print even numbers in an array

// let arr = [10, 33, 45, 22, 100, 98];

// let even_array = [];

// for(let i=0;i<arr.length;i++){
//     if(arr[i] % 2 == 0){
//         console.log(arr[i]);
//         even_array.push(arr[i]);
//     }
// }

// console.log(even_array);

// -------or------
// let even = arr.forEach(element => {
//     if(element % 2 == 0){
//         console.log(element)
//     }
// });

// -----------------------------------------6--------------------------------------------
// 6. write a prog.to print the largest number of an array

// let arr = [10, 33, 45, 22, 100, 98];
// let largest;

// for(let i=0;i<arr.length;i++){

//     for(let j=i+1;j<arr.length;j++){

//         if(arr[i] > arr[j]){
//             largest = arr[i];

//         }
//         else{
//             largest = arr[j];

//         }
//     }

// }

// console.log(largest);
// -----------------------------------------7--------------------------------------------

// let user = [
//     {
//         naam: "samarth",
//         isMale: true
//     },
//     {
//         naam: "kashish",
//         isMale: true
//     },
//     {
//         naam: "maverick",
//         isMale: false
//     }
// ]

// for (const item of user) {
//     if (item.isMale == true) {
//         console.log(item.naam);
//     }
// }


// -----------------------------------------8--------------------------------------------
// 8. reverse all the elements of an array

// let arr = [10, 33, 45, 22, 100, 98];

// let reversedArr = arr.reverse();

// console.log(reversedArr);

// -----or-------
// let arr = [10, 33, 45, 22, 100, 98];
// let revArr = [];

// arr.forEach(element => {
//     revArr.unshift(element);
// });

// console.log(revArr)

// -----------------------------------------9--------------------------------------------


// 9. write function to give sum of 2 numbers

// function sum(a,b){
//     return a+b;
// }

// let a=99,b=1;

// console.log(sum(a,b));

// -----------------------------------------10--------------------------------------------
// var x = 1;
// console.log(x);
// function a() {
//     x = 10;
//     console.log(x);
// }

// a();


//output
// 1
// 10
// -------------------------------------------------------------------------------------

// let x = 10;
// console.log(x);
// function a() {
//     x = 100;
//     console.log(x);
// }
// a();
// x = 1000;

//output
// 10
// 100

// ------------------------------------------------------------------------------------
// const x = 100;
// console.log(x);
// function a() {
//     x = 10;
//     console.log(x);
// }
// a();

//output
// 100
// error

// ------------------------------------------------------------------------------------

// function a() {
//     console.log(x);
// }
// a();
// var x = 2

//output
// undefined

// ------------------------------------------------------------------------------------

// let x;
// function b() {
//     console.log(x);
// }
// b();
// x = 2;

//output
// undefined

// ------------------------------------------------------------------------------------

// function a() {
//     console.log(x);
// }
// a();
// let x = 2;

//output
// error

// ------------------------------------------------------------------------------------


// var a = 1;
// let b = 2;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// console.log(b);


//output
// 10
// 20
// 30
// 2

// ------------------------------------------------------------------------------------


// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     return y;
// }
// var z = x();
// console.log(z);
// z();

//output
// ƒ y() {
// console.log(a);
//     }
// 7


// ---------------------------------------14---------------------------------------------
// 14. string methods -> length, toUpperCase(), toLowerCase(), trim(), split(),
//                        reverse(), replace(), replaceAll(), slice(), splice(),
//                         indexOf(), lastIndexOf(), concat()


//length
// let str = "Shivam";
// console.log(str.length); //output -> 6

//toUpperCase();
// let str = "hello shivam";
// console.log(str.toUpperCase());  //output -> HELLO SHIVAM

//toLowerCase();
// let str = "Hello SHIVAM";
// console.log(str.toLowerCase()); //output -> hello shivam

//trim();
// let str = "                Hello Shivam, How are you?    ";
// console.log(str.trim());  //output -> Hello Shivam, How are you?

//split();
// let str = "Bottle of Water";
// let arr = str.split(" ");
// console.log(arr);  //output -> ['Bottle','of','Water']

//reverse();
// let str = "wwaeM";
// let reversedString = str.split('').reverse().join('');
// console.log(reversedString); //output -> Meaww

//replace();
// let str = "Helli";
// let newStr = str.replace("i","o");
// console.log(newStr); //output -> Hello


//replaceAll();
// let str = "Hello bro, how are you bro?";
// let newStr = str.replaceAll("bro","Shivam")
// console.log(newStr);  //output ->Hello Shivam, how are you Shivam?

// slice();
// let str = "How are you? my friend?";
// let newStr = str.slice(0,12);
// console.log(newStr); //output -> How are you?


//splice()


//indexOf();
// let str = "How are you? my friend?";
// console.log(str.indexOf("friend")); //output-> 16


//lastIndexOf();
// let str = "Hello bro! how are you bro?";
// console.log(str.lastIndexOf("bro")); //output-> 23


//concat();
// let str1 = "Hello";
// let str2= " Shivam";

// console.log(str1.concat(str2)); //Output -> Hello Shivam
// -----------------------------------------------------------------------------------------------------

// 15. array methods -> push(), pop(), unshift(), shift(), concat(),
                     //  forEach(), map(), filter(), reduce(), find(), sort()

//push();
// let arr = [1,4,6,7,0,3];
// arr.push(9);
// console.log(arr); //  output-> [1,4,6,7,0,3,9]


//pop();
// let arr = [1,4,6,7,0,3];
// arr.pop();
// console.log(arr);  //output-> [1, 4, 6, 7, 0]

//unshift();
// let arr = [1, 4, 6, 7, 0, 3];
// arr.unshift(0);
// console.log(arr); //output-> [0, 1, 4, 6, 7, 0, 3]

//shift();
// let arr = [1, 4, 6, 7, 0, 3];
// arr.shift();
// console.log(arr); //output-> [4, 6, 7, 0, 3]

// concat();
// let arr1 = [1,2,3,4,5,6];
// let arr2 = [7,8,9,10];
// console.log(arr1.concat(arr2));  //output -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// forEach();
// let arr = [1,2,4,5,6,7];
// arr.forEach(function(item,index){
//      console.log(item,index);
// });  //output -> 1 2 4 5 6 7


//map();
// let arr = [1, 2, 4, 5, 6, 7];
// let newArr = arr.map(function(item, index){
//     return item * item;
// });

// console.log(newArr); //output -> [1, 4, 16, 25, 36, 49]


// filter();
// let arr = [0,1,2,3,4,5,6,7,10];
// let filteredArr = arr.filter(function (item,index){

//     if(item<=5){
//         return true;
//     }
//     else{
//         return false;
//     }
// });

// console.log(filteredArr); //output ->  [0, 1, 2, 3, 4, 5]

//reduce();
// let arr = [0, 1, 2, 3, 4, 5];
// let newVal = arr.reduce(function (totalValue,currentValue){
//     return totalValue + currentValue;
// });

// console.log(newVal);  //output->15



//find();
// let arr = [0,1,3,4,5,7];
// let newVal = arr.find(function(item){
//     if(item>5){
//         return (item);
//     }
// });

// console.log(newVal); //output -> 7


// sort();
// let arr = [4,7,3,1,0,8,10];
// arr.sort(function (a, b) {
//     return a - b;
// });
// console.log(arr); //output -> [0, 1, 3, 4, 7, 8, 10]

// -----------------------------------------------------------------------------------------------------
// Static methods
// In JavaScript, the `Date` object has both instance methods and static methods.
//  Instance methods are called on an instance of the `Date` object,
//  while static methods are called on the `Date` class itself.

// Here are examples of both instance methods and static methods of the `Date` object:

// ### Instance Methods:

// 1. ** Constructor:**
//     ```javascript
//    const currentDate = new Date();
//    ```

// 2. ** Getters:**
//     ```javascript
//    const year = currentDate.getFullYear();
//    const month = currentDate.getMonth();
//    const day = currentDate.getDate();
//    ```

// 3. ** Setters:**
//     ```javascript
//    currentDate.setFullYear(2022);
//    currentDate.setMonth(0); // January (months are 0-indexed)
//    currentDate.setDate(15);
//    ```

// 4. ** Formatting:**
//     ```javascript
//    const formattedDate = currentDate.toDateString();
//    ```

// ### Static Methods:

// 1. ** Current Date and Time:**
//     ```javascript
//    const currentDateTime = Date.now(); // Returns the current timestamp
//    ```

// 2. ** Parsing:**
//     ```javascript
//    const parsedDate = Date.parse("2022-01-11T12:00:00Z");
//    ```

// 3. ** UTC Methods:**
//     ```javascript
//    const currentUtcDate = Date.UTC(2022, 0, 11); // January 11, 2022
//    ```

// 4. ** String Representation:**
//     ```javascript
//    const stringDate = Date.toString();
//    ```

// Static methods are called directly on the `Date` class without creating an instance, while instance methods are called on a specific instance of the `Date` object.

// ------------------------------------------------------------------------------------------------------
// 17. Math method -> Math.random(), floor(), ceil(), round(), sqrt(), max(), min(), pow(), PI, LN2

//  Math.random() -> 1 to 10
// console.log(Math.random()); //output -> random number from 0 to 1 also decimal

// Math.floor()
// console.log(Math.floor(Math.random() * 20)); //output -> 0 to 19

// Math.ceil()
// console.log(Math.ceil(Math.random() * 20 )); //output-> 0 to 20

// Math.round()
// console.log(Math.round(55.6)); //output -> 56

// Math.sqrt()
// console.log(Math.sqrt(9)); //output -> 3

// Math.max()
// console.log(Math.max(-1,4000,90,1000)); //output->4000

// Math.min()
// console.log(Math.min(-1,4000,90,1000)); //output->-1

// Math.pow()
// console.log(Math.pow(3,2)); //output->9

// Math.PI
// console.log(Math.PI); // output -> 3.1415..

// Math.LN2
// console.log(Math.LN2); //output-> 0.69
// ------------------------------------------------------------------------------------------------------
// 18.

// let obj ={
//     name:"mayank",
//     age:22,
//     isAlive:function(){
//         return 'Yes I am Alive';
//     }
// }

// console.log(obj) // prints all properties with key value pair
// console.log(Object.keys(obj)) //returns array of keys name of obj ie ['name','age','isAlive']
// console.log(Object.values(obj)) //returns array of values of obj ie ['mayank',22,'func']
// console.log(Object.entries(obj)) // Output: [ ['name', mayank], ['age', 22], ['isAlive', func] ]
// console.log(obj.hasOwnProperty('age'))  //output->true, checks if key is present
// console.log(Object.assign(obj, { newProperty: "new Value" })) //{name: 'mayank', age: 22, newProperty: 'new Value', isAlive: ƒ}
// console.log(Object.assign({}, obj, { newProperty: "new Value" })) //{name: 'mayank', age: 22, newProperty: 'new Value', isAlive: ƒ}

// ------------------------------------------------------------------------------------------------------
// 19. loupe -> http://latentflip.com/loupe/ -> visually how js is being run actually like we do in browser with breakpoints






