// console.log(process);
// console.log(Object.keys(process));

process.stdout.write('prompt > ');

process.stdin.on('data', function (data){
    var cmd = data.toString().trim();

    if(cmd === 'pwd') {
        process.stdout.write(process.cwd());
    }
    if (cmd === 'date') {
        // console.log(Date());
        process.stdout.write(Date());
    }

    //
    // process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
});
// console.log();