let names=['giri','siri','hari','nari']

console.log(names)

// convert array to string separate with ,
let n =names.toString()
console.log(n)


//join
console.log(names.join("@"))

for (let d = 1; d < names.length; d++) 
{
    const element = names[d];
    console.log(element)
}

// // with index acess of array 
// console.log(names[3])
//  console.log(names[1])
// // upadte of array
 names[2]='janu'
 console.log("updatevalue:"+names[2])

 

// //add new value in the array
names.push("jani")
 console.log(names[4])


// //delete the last value in the array
 //console.log(names.pop())
 console.log(names)

// //unshift  add new  value in the begining
 names.unshift('puri')
// console.log(names)
// //index 
 names.indexOf('hari')
console.log(names[3])

 names.includes('siri')
 console.log(names)

 let marks = [50,78,90,67,23,25];
let size =marks.length;
console.log(size)
let sum = 0
for(let t=0;t<size;t++)
{
  sum += marks[t]
  console.log(sum)

}
// console.log(sum)

// // slice function 
 subnames = names.slice(0,2)
 console.log(subnames)

subna = names.slice(3,5)
console.log(subna.length)
ar = subna.length

