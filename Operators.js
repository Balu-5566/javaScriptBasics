let x=10,y=20;

//Arithmatic operators + -  * / %  ** ++ --
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(y/x);
console.log(y%x);
console.log(y**y);

//pre increament
//x= x+1;
x++;
console.log(x);
++y;
console.log(y);
x = x-2;
x--;
--x;
console.log(x);

//Assignment operator
console.log(x+=y);
console.log(x-=y);
console.log(x*=y);
console.log(x/=y);
console.log(x%=y);

//comparision operators
console.log(x=y);
console.log(x>y);
console.log(x<y);
console.log(x>=y);
console.log(x<=y);
console.log("notequal:" + x!=y);

//ternary operator
console.log("ternary:"+x<y?x:y);

a=true;
b=false;
//logical operators && || !
console.log(a && b);
console.log(a || b);
console.log(!b);

