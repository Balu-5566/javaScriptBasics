

export let add = (a,b) =>{
    return a+b
}
// console.log(add) 

 export let sub =(a,b)=>{
    return console.log(a-b);

}

export let mul = (a,b) => 
{
    return console.log(a*b); 
}


export function string_replace()
{
    const branch="electrical";
   const update = branch.replace("electrical","civil");
    console.log(branch);
    console.log(update)
}
// string_replace()



//string methods
export function string_methods()
{
    const course ="java";
    
    
   const sep = course.split()
   console.log("splitfun"+" "+sep);
   
   let  car= "audi";
   let  ma = car.match()
   console.log("matche string"+ma);
   let po =car.charAt(3)
   console.log(po)
}




  export let show = (name,age,id) =>  {
     name ="bala";

     id = "10838";
     age = 22; 
    console.log("emp details:"+ " "+ name,id,age);
 }
  






// //string_methods()

 export function str_meth()
{
let co ="manualtesting";
let ch =co.charCodeAt()
console.log(ch)
// if(co.match="testing")
// {
//     console.log("matched")
// }
// else{
//     console.log("not matched")
// }
console.log(co.concat("addstring:"+" "+"@automationTesting"))


console.log(co.endsWith("endlettercheck:"+""+"g"))

//search word 
let h = co.search("t");
console.log(h);

//textvalueof
let K =co.valueOf()
console.log("value:"+K);

//include word
let te ="Hello world, welcome to the universe.";
if(te.includes("world"))
{
    console.log("pass")
}
let b =te.repeat(3);



//split func
let li =b.split("")
let  c = "e";

if(c in li)
{
    console.log("pass")
}
console.log(li)


}

// str_meth()




 
 

//  addd(5,8)

// setTimeout(function() {
//     console.log('Execute later after 10 second')
// }, 10000);

// setInterval(function() {
//     console.log('Execute later after 10 second')
// }, 10000);


// export function add(a,b){
//     return  console.log("exporting statement",a*b);

// };