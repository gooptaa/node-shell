var pwdFunction = function(){
    process.stdout.write(process.cwd());
    process.stdout.write('\nprompt > ');

};

var fs = require("fs");

var ls = function(){
//    process.stdout.write(process.cwd())
  fs.readdir('.', function(err, files) {
    if (err) throw err;
    files.forEach(function(file) {
      process.stdout.write(file.toString() + "\n");
    })
    process.stdout.write('\nprompt > ');
  });
};

var echo = function(string){
  // if (string[0] === "$"){
  //   var comm = string.slice(1)
  //   var temp = "process.env." + comm
  //   temp
  //   //process.env[comm]
  //   process.stdout.write('\nprompt > ');
  // }
  {
    process.stdout.write(string);
    process.stdout.write('\nprompt > ');
  }
}

var cat = function(string){
  console.log(string)
  fs.readFile("./" + string, function(err, data){
    if (err) throw err;
    console.log(data.toString())
    process.stdout.write('\nprompt > ');
  })
}

var head = function(string){
  var catArray;
  fs.readFile("./" + string, function(err, data){
    if (err) throw err;
    catArray = data.toString()
  })
  console.log(catArray)
  //catArray.split("\n")

}

var commands = {
  pwdFunction: pwdFunction,
  ls: ls,
  echo: echo,
  cat: cat,
  head: head
}





module.exports = commands





