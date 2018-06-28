// var add=require("./add.js")
//
//
// console.log(add.add(10,15));
// var lodash= require('lodash');
// console.log(lodash.uniq([1,11,12,1,112,2,6,7,5,2,2,2,2,2,33,3]))
// //
// var command= process.argv[2];
//
// if(command=="add"){
//   console.log("Adding")
// }
// else {
//   console.log("NO RESULT")
// }

//
// var fs= require("fs");
//
// var s = {
//   name:"Udit Khanna",
//   CLass:"12th Class"
// };
//
// var m = JSON.stringify(s);
// fs.writeFileSync("notes.json",m);
//
// var ns = fs.readFileSync("notes.json");
//
// var x = JSON.parse(ns);
//
// console.log(typeof x);
//
// console.log(x.name);



//
// var request= require("request")
//
// request({
//   url:"http://maps.googleapis.com/maps/api/geocode/json?address=rakesh%20marg%20ghaziabad",
// json:true
// },(error,response,body)=>{
//
//   console.log(body.results[0].place_id);
// } )


var express= require("express")


var app = express();

app.use(express.static(__dirname+"/public"));
app.get("/about",(req,res)=>{
  res.render("app.ejs",{myName:"Udit Khanna"});
})


app.listen(3000);
