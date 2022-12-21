const flag=true;

if(flag=="true")
{
    console.log("condition is satisified")
}else
{
    console.log("condition is not satisified")
}

let key= "sat"
switch(key)
{
    case "mon":
        console.log("work")
        break;
    case "thurs":
        console.log("work")
        break;
    case "sat":
        console.log("weekend")
        break;
    default:
        console.log("nothing happend");
}

//loops

let i =2;
while(i<20)
{
    console.log(i)
    i = i+2;
}


let j=10;
do{
  
    console.log(j)
    j--;
}while(j>2);

for(let k=50;k>=15;k--)
{
console.log(k);
}


