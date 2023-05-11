var http=require('http');
var calculator = require('./mymodule.js');
var a = 21 , b = 67

http.createServer(function(req,res){
   res.writeHead(200,{'Content-Type':'text/html'});

   res.write("Addition of " + a + " and " + b + " is " + calculator.add(a, b)+","+ "  ");
  
   res.write("Subtraction of " + a + " and " + b + " is " + calculator.sub(a, b)+","+ "  ");
  

   res.write("Multiplication of " + a + " and " + b + " is " + calculator.mul(a, b)+","+ "  ");
   
   res.write("Division of " + a + " and " + b + " is " + calculator.div(a, b));
   
   res.end();
}).listen(9000);

console.log("Server running");