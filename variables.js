 //https://www.youtube.com/watch?v=PUVFmhYJNJA
 
 //variables
 
 //function scope   reassign and  redeclear possible
 var a=10;
var  b;

//b=60;
//  var b=30;
 console.log(a);
console.log(b);

//Block scope  redeclear is not possible
let e="java";
 e ="javascript";
 
let h = true;
let o=null;
 console.log(e);
 console.log(h);
 //console.log(u);

const week=70.89;
// week = 8; error type error assignment consatnt variable
console.log(week);

let mypromice = new Promise(function(myresolve,myreject)
{
setTimeout(function() { myFunction("I love You !!!"); }, 3000);
});
mypromice.then(function(value));