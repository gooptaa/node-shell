console.log(process.env);
// console.log(Object.keys(process));
var commands = require("./commands.js")

process.stdout.write('prompt > ');

process.stdin.on('data', function (data){
    var cmd = data.toString().trim();
    if (cmd === 'pwd') {
        commands.pwdFunction();
    }
    if (cmd === 'date') {
        // console.log(Date());
        process.stdout.write(Date());
    }
    if (cmd === "ls"){
        commands.ls()
    }
    if (cmd.slice(0, 4) === "echo"){
        commands.echo(cmd.slice(5))
    }
    if (cmd.slice(0, 3) === "cat"){
        commands.cat(cmd.slice(4))
    }
    if (cmd.slice(0, 4) === "head"){
        commands.head(cmd.slice(5))
    }
    //
    // process.stdout.write('You typed: ' + cmd);
    //console.log("are we here?")
});
// console.log();


