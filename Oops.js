  export class Employee
 {
     setdetails(eid,ename)
    {
        this.eid = eid;
        this.ename=ename;
        console.log("these are class variables");
  
    }
    display()
    {
        console.log(this.eid,this.ename);
    }
 }



export class stud
{
  constructor(name,age)
  {
  this.studname=name;
  this.age=age;
}
my(wish)
{
  return wish+" "+ "my name is"+" "+ this.studname;
} 
static study(s)
{
  return "daily i am going to college" +" "+s;
}

}


 export class games extends stud
{
constructor(name,play)
{
  super(name);
this.playg=play;
}
game1()
{
  return "i play football";
}
}




// let newstud=new games("Anil","i play football")
// console.log(newstud.my("hii good mrng"));
// console.log(newstud.game1());

// let stud1=new stud("anil",18);
// console.log(stud1.my("hi good morning"));
// console.log(stud.study(" for studying"));
// console.log(stud1);









 
//  class Aninmal

//  {
//    static  sound()
//    {
//     return "animal sounds"
//    }
//  }
//  class Dog
//  {

//  }

//   let stu = new Employee();
//   stu.setdetails(456,"bala")
//   stu.display()

