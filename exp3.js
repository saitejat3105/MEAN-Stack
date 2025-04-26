console.log("Hi")
var array = [];
var arr = [ 'cat', 'goat', 'bat' ];
var arr = [ 'cat', 'goat', 'bat' ];
console.log(arr[0]) // prints cat
console.log(arr[2]) // prints bat
var arr = [ 'cat', 'dog', 'goat', 'mummy', 'goat' ];
console.log(arr) // prints 'cat', 'dog', 'goat', 'mummy', 'goat'
var position = arr.indexOf("avatar");
console.log(position)
//prints -1
console.log(arr.indexOf("goat"))
//prints 2
var arr = [ 'cat', 'dog', 'goat', 'cat'];
console.log(arr) // prints 'cat', 'dog', 'goat', 'cat'
var position = arr.lastIndexOf("avatar");
console.log(position)
//prints -1
console.log(arr.lastIndexOf("goat"))
//prints 3


const fruit = [];
fruit.push("banana", "apple", "peach");
console.log(fruit.length); // prints ‘3’
console.log(fruit); //prints "banana", "apple", "peach";
fruit.push("grapes");
console.log(fruit);//prints 'banana', 'apple', 'peach', 'grapes'
console.log(fruit.pop()); // prints ‘

var arr = [ 'cat', 'dog', 'goat' ];
console.log(arr) 
arr.pop()
console.log(arr)


var arr = [ 'cat', 'dog', 'goat' ];
console.log(arr) // prints 'cat', 'dog', 'goat'
arr.unshift("pug")
console.log(arr)

var arr = [ 'cat', 'dog', 'goat' ];
console.log(arr) // prints 'cat', 'dog', 'goat'
arr.shift()
console.log(arr)

var arr = [ 'cat', 'goat', 'dog','mummy', 'goat' ];
console.log(arr);
console.log(arr.sort());

var arr = [ 1, 9, 3 ];
console.log(arr) // prints 1, 9, 3
arr.reverse()
console.log(arr)


arr = ['jack fruit','grape'];
arr2 = ['mango','kiwi','apple'];
console.log(arr);
console.log(arr2);
var new_arr = arr.concat(arr2);
console.log(new_arr);

arr = ['jack fruit','grape'];
arr2 = ['mango','kiwi','apple'];
console.log(arr);
console.log(arr2);
var new_arr = arr2.concat(arr);
console.log("concatinated array is ", new_arr);
console.log("concatinated array aftersoting is" , new_arr.sort());

const fruits = [];
fruits.push("banana", "apple", "peach");
fruits.forEach(function(i) {
console.log(i);
});
