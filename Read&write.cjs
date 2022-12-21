// const { error } = require("console");
// var fs = require("fs")
// console.log(" Writing into an file ");

// // Sample.txt is an empty file
// fs.writeFile(
// "sample.txt",
// "Let's write a few sentences in the file",
// function (err) {
// 	if (err) {
// 	return console.error(err);
// 	}

// 	// If no error the remaining code executes
// 	console.log(" Finished writing ");
// 	console.log("Reading the data that's written");

// 	// Reading the file
// 	fs.readFile("sample.txt", function (err, data) {
// 	if (err) {
// 		return console.error(err);
// 	}
// 	console.log("Data read : " + data.toString());
		
// 	});
// }
// );


const file =require("fs");
let data = "My self Bala Ankaiah. i am working in innominds as a Quality Engineer"
file.writeFile("empdata.txt",data,(err) =>
{
if(err) throw err;
});
console.log("finished writing");


let read =file.readFile("empdata.txt",(err));
if(err)
{
	return console.error();
}
console.log(read);



// file.readFile("empdata.txt",function(err,data)

// {
// 	if(err)
// 	{ 
// 		 return console.error();
// 	}

// });
// // console.log("data read :"+ data.toString());

